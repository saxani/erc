'use client';
import Papa from 'papaparse';

export const parseCSV = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = ({ target }) => {
      const data = Papa.parse(target.result, { header: true });
      resolve(data);
    };

    reader.onerror = () => {
      console.log(`Error getting file`);
      reject();
    };

    reader.readAsText(file);
  });
};
