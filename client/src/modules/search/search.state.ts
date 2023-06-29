export interface SearchState {
  filter: string;
}

export interface WithSearchState {
  searchState: SearchState;
}

export const SEARCH_DEFAULT_INITIAL_STATE: SearchState = {
  filter: ''
};
