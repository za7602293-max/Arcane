import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class RootErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Portfolio caught runtime error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0c0d10] text-[#f4f4f6] flex items-center justify-center p-6 text-center">
          <div className="max-w-md space-y-4 p-8 rounded-2xl bg-[#14161f] border border-white/10 shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-[#ff4d36]/10 text-[#ff4d36] flex items-center justify-center mx-auto text-xl font-bold">
              !
            </div>
            <h1 className="text-xl font-semibold text-white">Temporary Loading Issue</h1>
            <p className="text-sm text-[#8b8f9e]">
              A minor rendering error occurred. Click below to reload the portfolio.
            </p>
            {this.state.error && (
              <pre className="text-xs bg-black/40 p-3 rounded text-rose-300 font-mono text-left overflow-x-auto max-h-32">
                {this.state.error.message}
              </pre>
            )}
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#ff4d36] hover:bg-[#e03d27] rounded-md transition-colors cursor-pointer"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  );
}
