import { instance } from './instance';

export const getAllAdverts = async () => {
  try {
    const { data } = await instance.get('/');
    return data;
  } catch ({ response }) {
    // eslint-disable-next-line no-console
    console.log(response.data);
  }
};
