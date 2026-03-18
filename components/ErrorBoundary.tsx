'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      let errorMessage = this.state.error?.message || 'An unexpected error occurred.';
      let parsedError = null;

      try {
        parsedError = JSON.parse(errorMessage);
        if (parsedError.error) {
          errorMessage = parsedError.error;
        }
      } catch (e) {
        // Not a JSON error
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
          <div className="bg-red-50 text-red-600 p-6 rounded-2xl flex items-start gap-3 max-w-lg w-full">
            <AlertCircle className="w-6 h-6 shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-bold text-lg">Application Error</h3>
              <p className="mt-1 text-sm">{errorMessage}</p>
              
              {parsedError && parsedError.operationType && (
                <div className="mt-4 bg-white/50 p-3 rounded-lg text-xs font-mono text-slate-700">
                  <p><strong>Operation:</strong> {parsedError.operationType}</p>
                  <p><strong>Path:</strong> {parsedError.path}</p>
                  <p><strong>User ID:</strong> {parsedError.authInfo?.userId || 'Not authenticated'}</p>
                </div>
              )}

              <button 
                onClick={() => window.location.reload()} 
                className="mt-4 flex items-center gap-2 text-sm font-medium bg-red-100 px-4 py-2 rounded-lg hover:bg-red-200 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Reload Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
