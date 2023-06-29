import { useMemo } from 'react';
import { useAppAPI } from './hooks/use-create-app-api';
import { Header } from './components/header/header.component';
import { Clients } from './modules/clients/clients.component';
import { AppContext, AppContextType } from './app.context';
import { useCreateAppState } from './hooks/use-create-app-state';
import { useCreateAppMutationService } from './hooks/use-create-app-mutation-service';
import styles from './app.module.scss';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

function App() {
  const api = useAppAPI();
  const state = useCreateAppState(api);
  const mutationService = useCreateAppMutationService(api);

  const appContext: AppContextType = useMemo(
    () => ({ mutationService, state }),
    [mutationService, state]
  );

  return (
    <ErrorBoundary>
      <AppContext.Provider value={appContext}>
        <div className={styles['app-wrapper']}>
          <Header />
          <Clients />;
        </div>
      </AppContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
