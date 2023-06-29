import { createContext } from 'react';
import { AppState } from './app.state';
import { AppMutationService } from './app.mutation-service';

export interface AppContextType {
  state: AppState;
  mutationService: AppMutationService;
}

const initState: AppContextType | null = null;

export const AppContext = createContext<AppContextType | null>(initState);
