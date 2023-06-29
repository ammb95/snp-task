import { useContext } from 'react';
import { AppContext, AppContextType } from '../app.context';

export const useAppContext = (): AppContextType => {
  const appContextValue = useContext(AppContext);
  return appContextValue as AppContextType;
};
