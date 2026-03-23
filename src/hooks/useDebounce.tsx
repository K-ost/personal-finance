import { useEffect, useState } from "react";

const useDebounce = (value: string, delay: number = 500): string => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounced(value);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debounced;
};

export default useDebounce;
