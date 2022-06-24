import React from 'react';
import { ErrorBoundary } from './ErrorBoundary';

export const RemoteWrapper = ({ children }) => (
  <div className="shell-app__remote-wrapper">
    <h2>Remote Wrapper</h2>
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);
