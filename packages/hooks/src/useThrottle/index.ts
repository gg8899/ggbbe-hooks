import { useEffect, useState } from 'react';
import useThrottleFn from '../useThrottleFn';
import type { ThrottleOptions } from './throttleOptions';

function useThrottle<T>(value: T, options?: ThrottleOptions) {
  const [throttle, setThrottle] = useState(value);

  const { run } = useThrottleFn(() => {
    setThrottle(value);
  }, options);
  useEffect(() => {
    run();
  }, [value]);
  return throttle;
}

export default useThrottle;
