import { useDispatch } from 'react-redux';

export const useUtilities = () => {
  const dispatch = useDispatch();

  return {
    test: 'test',
    dispatch,
  };
};
