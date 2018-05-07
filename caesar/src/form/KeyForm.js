import React from 'react';
import {keyAction} from "../action/KeyAction";
import {connect} from "react-redux";

class KeyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "",
            shift: 0
        };
    }

    handleSubmitKeyForm(event) {
        event.preventDefault();

        const {dispatch} = this.props;
        dispatch(keyAction.sendKeyToServer(this.state.key));
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmitKeyForm.bind(this)}>
                <h1>Adja meg a kulcsot!</h1>
                <input name="key" value={this.state.key} onChange={this.handleInputChange.bind(this)} type="text" placeholder="Adja meg a kulcsot" />
                <button type="submit">Küldés</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        sendKeyToServer: state.sendKeyToServer
    };
}

export default connect(mapStateToProps)(KeyForm);