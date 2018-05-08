import React from 'react';
import KeyForm from "../form/KeyForm";
import {connect} from "react-redux";
import CryptoForm from "../form/CryptoForm";

class KeyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shift: undefined
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.sendKeyToServer.response !== undefined) {
            this.setState({
                shift: nextProps.sendKeyToServer.response
            });
        }
    }

    render() {
        if (this.state.shift === undefined) {
            return (
                <KeyForm/>
            );
        } else {
            return (
                <CryptoForm shift={this.state.shift}/>
            );
        }

    }
}

function mapStateToProps(state) {
    return {
        sendKeyToServer: state.sendKeyToServer
    };
}

export default connect(mapStateToProps)(KeyPage);