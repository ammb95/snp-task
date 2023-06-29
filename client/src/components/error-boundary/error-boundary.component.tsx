import { FunctionComponent, PropsWithChildren, useState } from 'react';

export interface ErrorBoundaryProps extends PropsWithChildren {}

export const ErrorBoundary: FunctionComponent<ErrorBoundaryProps> = ({
  children
}) => {
  const [hasError, setHasError] = useState(false);

  const handleOnError = () => {
    setHasError(true);
  };

  if (hasError) {
    return <div>Oops! Something went wrong.</div>;
  }

  return <div onError={handleOnError}>{children}</div>;
};

export default ErrorBoundary;
