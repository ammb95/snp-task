import { FunctionComponent, PropsWithChildren, useMemo } from 'react';
import { useDelayedValue } from './use-delayed-values';

export interface DataBoundaryProps extends PropsWithChildren {
  message: string;
  isLoading?: boolean;
  data?: any[];
}

export const DataBoundary: FunctionComponent<DataBoundaryProps> = ({
  message,
  data,
  isLoading,
  children
}) => {
  const delayedIsLoading = useDelayedValue(1000, isLoading);
  const hasData = useMemo(() => !!data && !!data.length, [data]);

  return (
    <>
      {delayedIsLoading ? (
        <div>Loading</div>
      ) : (
        <>{hasData ? <>{children}</> : <div>{message}</div>}</>
      )}
    </>
  );
};
