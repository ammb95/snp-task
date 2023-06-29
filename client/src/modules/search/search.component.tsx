import { FunctionComponent } from 'react';
import { useSearchState } from './hooks/use-search-state';
import { useSearchMutationService } from './hooks/use-search-mutation-service';
import styles from './search.module.scss';

export const SearchComponent: FunctionComponent = () => {
  const {
    searchState: { filter }
  } = useSearchState();
  const { searchMutationService } = useSearchMutationService();

  return (
    <input
      type='text'
      className={styles.search}
      value={filter}
      onChange={searchMutationService.handleFilterInput}
      placeholder='Client Search'
    />
  );
};
