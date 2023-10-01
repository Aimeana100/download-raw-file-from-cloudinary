import fs from 'fs';
import axios, { AxiosResponse } from 'axios';

export const extractFromCloudinary = async (
  cloudinaryUrl: string,
  filePath: string
): Promise<void> => {
  try {
    // Send an HTTP GET request to Cloudinary to download the file
    const response: AxiosResponse = await axios.get(cloudinaryUrl, { responseType: 'arraybuffer' });
    const fileBuffer = Buffer.from(response.data);

    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, fileBuffer, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

const sourcePathOrUrl = '';
const downloadpath = 'download.zip';
extractFromCloudinary(sourcePathOrUrl, downloadpath)

  