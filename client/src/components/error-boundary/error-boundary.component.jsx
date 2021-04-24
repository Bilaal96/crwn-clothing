import React from 'react';

// Styled Components
import * as SC from './error-boundary.styles';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
        };
    }

    // Used to update the ErrorBoundary's state & render a Fallback UI
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    // For side-effects & logging error info
    componentDidCatch(error, errorInfo) {
        console.log({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <SC.ErrorContainer>
                    <SC.ErrorMessage>Something went wrong ...</SC.ErrorMessage>
                    <SC.ErrorImage imageUrl="https://i.imgur.com/A040Lxr.png" />
                    <SC.ErrorImageText>
                        This page is lost in space
                    </SC.ErrorImageText>
                </SC.ErrorContainer>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
