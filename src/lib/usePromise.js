import { useEffect, useState } from 'react';

export default function usePromise(promiseFunction, deps) {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  const process = async () => {
    setLoading(true);
    try {
      const resolved = await promiseFunction();
      setResolved(resolved);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [loading, resolved, error];
}
