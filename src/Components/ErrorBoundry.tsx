import React, { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log the error to an error reporting service (e.g., Sentry)
    console.error("Error:", error);
    console.error("Error Info:", errorInfo);

    // Set the state to indicate that an error has occurred
    this.setState({
      hasError: true,
      error,
    });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // You can customize the fallback UI here
      return (
        <div>
          <h1>Something went wrong!</h1>
          <p>{this.state.error?.message || "Unknown error"}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
