// API functions to fetch data from the Rick and Morty API

import axios from 'axios';
import { Character, Episode } from '../types';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchEpisodes = async (): Promise<Episode[]> => {
  const res = await axios.get(`${BASE_URL}/episode`);
  return res.data.results;
};

export const fetchCharacters = async (): Promise<Character[]> => {
  const res = await axios.get(`${BASE_URL}/character`);
  return res.data.results;
};

export const fetchCharactersByUrls = async (urls: string[]): Promise<Character[]> => {
  const promises = urls.map((url) => axios.get<Character>(url));
  const responses = await Promise.all(promises);
  return responses.map((res) => res.data);
};
