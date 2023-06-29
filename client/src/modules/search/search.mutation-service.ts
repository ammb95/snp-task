import { ChangeEventHandler } from 'react';

export interface SearchMutationService {
  handleFilterInput: ChangeEventHandler<HTMLInputElement>;
}

export interface WithSearchMutationService {
  searchMutationService: SearchMutationService;
}
