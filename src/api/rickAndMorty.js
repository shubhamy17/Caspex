import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchEpisodes = async () => {
  const res = await axios.get(`${BASE_URL}/episode`);
  return res.data.results;
};

export const fetchCharacters = async () => {
  const res = await axios.get(`${BASE_URL}/character`);
  return res.data.results;
};

export const fetchCharactersByUrls = async (urls) => {
  const promises = urls.map(url => axios.get(url));
  const responses = await Promise.all(promises);
  return responses.map(res => res.data);
};
