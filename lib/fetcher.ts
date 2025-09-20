'use server';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const fetcher = async <T>(url: string, external?: boolean) => {
  let token = '';

  return fetch(`${API_URL}/${url}`, {
    headers: {
      ...(!external && { Authorization: `Bearer ${token}` }),
    },
  }).then((res) => res.json() as T);
};

export default fetcher;
