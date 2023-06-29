import {
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
  useMemo,
  useState
} from 'react';
import { IconButton } from '../icon-button/icon-button.component';
import styles from './expandable-card.module.scss';

export interface ExpandableCardTitleConfig {
  text: string;
  size: number;
}

export interface ExpandableCardContentConfig {
  minHeight: number;
  maxHeight: number;
}

export interface ExpandableCardProps extends PropsWithChildren {
  titleConfig: ExpandableCardTitleConfig;
  contentConfig: ExpandableCardContentConfig;
  leftSlot?: ReactNode;
}

export const ExpandableCard: FunctionComponent<ExpandableCardProps> = ({
  titleConfig,
  contentConfig,
  leftSlot: button,
  children
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const titleStyle = useMemo(
    () => ({
      fontSize: titleConfig.size
    }),
    [titleConfig]
  );

  const cardContentStyle = useMemo(
    () => ({
      minHeight: `${contentConfig.minHeight}px`,
      maxHeight: `${contentConfig.maxHeight}px`
    }),
    [contentConfig]
  );

  return (
    <div className={styles.card}>
      <div className={styles['card-header']} style={titleStyle}>
        <div slot='left'>
          <IconButton onClick={handleToggle} icon={'V'} />
          <span>{titleConfig.text}</span>
        </div>
        <div slot='right'>{button}</div>
      </div>
      {isExpanded && (
        <div className={styles['card-content']} style={cardContentStyle}>
          {children}
        </div>
      )}
    </div>
  );
};
