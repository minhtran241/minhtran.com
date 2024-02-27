import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
// import fs from 'fs/promises';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

// export const readDataFromLocalJson = async (path, slug, contentPath) => {
//     try {
//         const data = await fs.readFile(path, 'utf-8');
//         const jsonData = JSON.parse(data);
//         // If contentPath is provided, read content from file system
//         if (contentPath) {
//             const content = await fs.readFile(contentPath, 'utf-8');
//             jsonData.content = content;
//         }
//         // If slug is provided, filter data by slug
//         if (slug) {
//             const filteredData = jsonData.find((item) => item.slug === slug);
//             return filteredData;
//         }
//         return jsonData;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         throw new Error('Failed to fetch data');
//     }
// };
