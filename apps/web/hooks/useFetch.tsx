import { useCallback, useEffect, useState } from "react";

export function useFetch<T>(url: string, options?: any) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(url, options);
      const json = await res.json();
      setIsLoading(false);
      setData(json);
    } catch (err: any) {
      setIsLoading(false);
      console.error(err);
    }
  };
  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  return {
    data,
    isLoading,
  };
}
export const useGet = (url: string) => {
  const get = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    } else {
      return data;
    }
  }, [url]);

  return get;
};
