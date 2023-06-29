import { useEffect, useState } from 'react';

export const useDelayedValue = (delayTime: number, valueToDelay: any) => {
  const [delayedValue, setDelayedValue] = useState(valueToDelay);

  useEffect(() => {
    const delay = setTimeout(() => {
      setDelayedValue(valueToDelay);
    }, delayTime);
    return () => clearTimeout(delay);
  }, [delayTime, valueToDelay]);

  return delayedValue;
};
