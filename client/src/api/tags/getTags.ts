import { instance } from '../api';
import axios from 'axios';

type tagType = {
  tags: {
    tagId: number;
    tagName: string;
  }[];
};

export const getAllTags = (): Promise<tagType> => {
  return instance.get('/tags').then(res => res.data.data);
};

export const getAccountTags = (): Promise<tagType> => {
  return axios.get('/tags').then(res => res.data.data);
};
