/**
 * @packageDocumentation
 * @module Services/NasaApod
 * Interacts with the NasaApod service.
 */
import axios, { AxiosResponse } from 'axios';

import { CONFIG } from '~/config';
import { handleError, handleResponse, axiosError, axiosResponse } from '~/utils/axiosHelper';

/**
 * API Client to interact with the service.
 */
const APIClient = axios.create({
  baseURL: CONFIG.SERVICES.NASA_APOD.URL,
  timeout: 10000,
  params: {
    api_key: CONFIG.SERVICES.NASA_APOD.API_KEY,
  },
});

/**
 * Interacts with the NASA - APOD service.
 */
export const nasaApodService = {
  /**
   * Gets a picture by date.
   */
  get: async (date: string): Promise<axiosResponse | axiosError> => {
    const url = `/apod?date=${date}`;
    let response: AxiosResponse;
    let result;
    try {
      response = await APIClient.get(url);
      result = handleResponse(response);
    } catch (error) {
      result = handleError(error);
    }
    return result;
  },
};
