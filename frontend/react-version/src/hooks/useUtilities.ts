import { useDispatch } from 'react-redux';

export function useUtilities() {
  const dispatch = useDispatch();

  return {
    test: 'test',
    dispatch,
  };
}