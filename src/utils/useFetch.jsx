import { useState, useEffect } from "react";

export function useFetch(url) {
  const [fetchedData, setFetchedDat] = useState(null);

  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;

    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setFetchedDat(data);
      } catch (err) {
        setError(true);
      } finally {
      }
    }
    fetchData();
  }, [url]);
  return { fetchedData, error };
}
