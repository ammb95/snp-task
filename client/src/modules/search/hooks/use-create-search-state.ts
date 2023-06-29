import { useSelector } from 'react-redux';
import { WithSearchState } from '../search.state';
import { RootState } from '../../../hooks/use-app-dispatch';

export const useCreateSearchState = (): WithSearchState => {
  const filter = useSelector(
    ({ searchReducer: { filter } }: RootState) => filter
  );

  return {
    searchState: {
      filter
    }
  };
};
