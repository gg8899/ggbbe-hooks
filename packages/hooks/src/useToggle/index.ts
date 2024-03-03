import { useState, useMemo } from 'react';

export interface Action<T> {
  setLeft: () => void;
  setRight: () => void;
  set: (v: T) => void;
  toggle: () => void;
}

function useToggle<T = boolean>(): [boolean, Action<T>];
function useToggle<T>(defaultValue: T): [T, Action<T>];
function useToggle<T, R>(defaultValue: T, reverseValue: R): [T | R, Action<T | R>];

function useToggle<D, R>(defaultValue: D = false as unknown as D, reverseValue?: R) {
  const [state, setState] = useState<D | R>(defaultValue);
  const action = useMemo(() => {
    const reverseValueOrigin = (reverseValue ? reverseValue : !defaultValue) as D | R;
    const toggle = () => {
      setState((v: D | R) => (v === defaultValue ? reverseValueOrigin : defaultValue));
    };
    const set = (v: D | R) => setState(v);
    const setLeft = () => setState(defaultValue);
    const setRight = () => setState(defaultValue);

    return { toggle, set, setLeft, setRight };
  }, []);
  return [state, action];
}
export default useToggle;
