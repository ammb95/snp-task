import { FunctionComponent, ReactNode } from 'react';
import styles from './icon-button.module.scss';

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
}

export const IconButton: FunctionComponent<IconButtonProps> = ({
  icon,
  ...buttonProps
}) => {
  return (
    <button {...buttonProps} type='button' className={styles['icon-button']}>
      <span className={styles.icon}>{icon}</span>
    </button>
  );
};
