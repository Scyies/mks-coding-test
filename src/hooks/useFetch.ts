import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

export interface IData {
  description: string;
  id: number;
  name: string;
  photo: string;
  price: string;
  quantity?: number;
  cartPrice?: string;
}

export interface IResponse {
  data: IData[] | null;
  loading: boolean;
  error: any;
}

export function useFetch(url: string): IResponse {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response: AxiosResponse = await axios.get(url);
        setData(response.data.products);
        setLoading(false);
      } catch (err: any) {
        setError(err);
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, loading, error };
}
