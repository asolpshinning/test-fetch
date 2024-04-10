import express, { Request, Response } from 'express';
import axios from 'axios';
import cheerio from 'cheerio';

const app = express();
const port = 3000;

app.get('/positions/:department', async (req: Request, res: Response) => {
    const { department } = req.params;

    if (!department) {
        return res.status(400).json({ error: 'Department is required!' });
    }

    try {
        const response = await axios.get('https://www.actian.com/company/careers/');
        const html = response.data;
        const $ = cheerio.load(html);

        const openPositions: any = [];
        $('div.listing a').each((index, element) => {
            const jobName = $(element).find('div.job-name').text().trim();
            const departmentName = $(element).closest('.accordion-item').find('.category-name').text().trim();
            if (departmentName.toLowerCase().includes(department.toLowerCase())) {
                openPositions.push(jobName);
            }
        });

        if (openPositions.length === 0) {
            return res.status(404).json({ error: `No ${department} department found!` });
        }

        return res.status(200).json({ department, openPositions });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'An error occurred while fetching the data.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});