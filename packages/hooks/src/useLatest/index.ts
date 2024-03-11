import { useRef } from 'react';

function useLatest<T>(value: T) {
  const ref = useRef(null);
  ref.current = value;
  return ref;
}
export default useLatest;
