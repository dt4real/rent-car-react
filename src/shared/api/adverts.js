import { instance } from './instance';

export const getAllAdverts = async () => {
  try {
    const { data } = await instance.get('/');
    console.log(data);
    return data;
  } catch ({ response }) {
    console.log(response.data);
  }
};
