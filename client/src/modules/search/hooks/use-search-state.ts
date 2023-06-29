import { useAppState } from '../../../hooks/use-app-state';
import { WithSearchState } from '../search.state';

export const useSearchState = (): WithSearchState => {
  const { searchState } = useAppState();
  return { searchState };
};
