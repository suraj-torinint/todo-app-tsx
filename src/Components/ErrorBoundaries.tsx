import React from "react";

export default class ErrorBoundary extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        this.setState({ hasError: true });
        console.log(error, errorInfo);
    }

    static getDerivedStateFromProps(error: string) {
        return { error };
    }

    render() {
        if (this.state.hasError) {
            return <div className="text-center mt-5 fs-1 text-danger">Something went Wrong!!</div>;
        }
        return this.props.children;
    }
}
