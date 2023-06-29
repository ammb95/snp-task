import { ChangeEventHandler, useCallback } from 'react';
import { WithSearchMutationService } from '../search.mutation-service';
import { setFilter } from '../search.reducer';
import { useAppDispatch } from '../../../hooks/use-app-dispatch';

export const useCreateSearchMutationService = (): WithSearchMutationService => {
  const dispatch = useAppDispatch();

  const handleFilterInput: ChangeEventHandler<HTMLInputElement> = useCallback(
    e => dispatch(setFilter(e.target.value)),
    [dispatch]
  );

  return {
    searchMutationService: {
      handleFilterInput
    }
  };
};
