import { AppState } from '../app.state';
import { useAppContext } from './use-app-context';

export const useAppState = (): AppState => {
  const { state } = useAppContext();
  return state as AppState;
};
