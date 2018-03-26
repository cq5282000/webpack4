import React, { Compnent } from 'react';
export default (WrappedComponent) => {
    return class extends Component {
        render() {
            return <WrappedComponent {...this.props} />;
        } 
    }
};
