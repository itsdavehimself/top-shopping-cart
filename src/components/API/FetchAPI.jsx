import { useState, useEffect } from 'react';

export default function FetchAPI(apiEndpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error('Network response not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch {
        setError('error');
        setLoading(false);
      }
    }
    fetchData();
  }, [apiEndpoint]);
  return { data, loading, error };
}
