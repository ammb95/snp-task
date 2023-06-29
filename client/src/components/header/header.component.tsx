import { FunctionComponent } from 'react';
import { SearchComponent } from '../../modules/search/search.component';
import { CreateClientButton } from '../../modules/clients/ui/create-client-button/create-client-button.component';
import styles from './header.module.scss';

export const Header: FunctionComponent = () => {
  return (
    <div className={styles['app-header']}>
      <SearchComponent />
      <CreateClientButton />
    </div>
  );
};
