import { FunctionComponent, useMemo } from 'react';
import { Client } from '../../client.model';
import {
  ExpandableCard,
  ExpandableCardContentConfig,
  ExpandableCardTitleConfig
} from '../../../../components/expandable-card/expandable-card.component';
import { Reports } from '../../../reports/reports.component';
import { DeleteClientButton } from '../delete-client-button/delete-client-button.component';

export interface ClientComponentProps {
  client: Client;
}

export const ClientComponent: FunctionComponent<ClientComponentProps> = ({
  client
}) => {
  const cardTitle = useMemo(() => `Client: ${client.name}`, [client]);
  const titleConfig: ExpandableCardTitleConfig = useMemo(
    () => ({ size: 30, text: cardTitle }),
    [cardTitle]
  );
  const contentConfig: ExpandableCardContentConfig = {
    minHeight: 400,
    maxHeight: 400
  };

  return (
    <ExpandableCard
      titleConfig={titleConfig}
      contentConfig={contentConfig}
      leftSlot={<DeleteClientButton clientId={client.id} />}
    >
      <Reports clientId={client.id} />
    </ExpandableCard>
  );
};
