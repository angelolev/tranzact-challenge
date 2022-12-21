import { DataState, IEvent } from "@/models";
import { useCallback, useEffect, useState } from "react";

export const useFetch = () => {
  const [dataState, setDataState] = useState<DataState>({
    data: [],
    loading: true,
    error: null,
  });
  const URL = "https://www.mocky.io/v2/59f08692310000b4130e9f71";

  const handleFetch = useCallback(async () => {
    try {
      const response = await fetch(URL);

      if (!response.ok) throw new Error(response.statusText);

      const dataApi: IEvent[] = await response.json();

      setDataState((prev) => ({
        ...prev,
        loading: false,
        data: dataApi,
      }));
    } catch (error) {
      setDataState((prev) => ({
        ...prev,
        loading: false,
        error: (error as Error).message,
      }));
    }
  }, []);

  useEffect(() => {
    if (dataState.data.length === 0) handleFetch();
  }, []);

  return {
    ...dataState,
  };
};
