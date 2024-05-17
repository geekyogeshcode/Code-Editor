import axios from "axios";
import { LANGUAGE_VERSIONS } from './constance';

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston"
});

export const executeCode = async (language, sourceCode) => {
  try {
    const response = await API.post('execute', {
      language: language,
      version: LANGUAGE_VERSIONS[language],
      files: [
        {
          content: sourceCode
        }
      ],
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      // HTTP response errors
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
      console.error('Error response headers:', error.response.headers);
    } else if (error.request) {
      // Request was made but no response was received
      console.error('Error request:', error.request);
    } else {
      // Something else happened in setting up the request
      console.error('Error message:', error.message);
    }
    throw error; // Re-throw the error to propagate it
  }
};
