import axios from "axios";
import { LANGUAGE_VERSIONS } from './constance';

const API = axios.create({
     baseURL: "https://emkc.org/api/v2/piston"
});

export const executeCode = async (language, sourceCode) => {
  try {
    const response = await API.post('/execute', {
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
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
      console.error('Error response headers:', error.response.headers);
    } else if (error.request) {
      console.error('Error request:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
  }
};
