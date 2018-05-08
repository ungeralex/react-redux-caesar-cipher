import React from 'react';
import {codingAction} from "../action/CodeAction";
import {connect} from "react-redux";

class CryptoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            codedText: '',
            codeType: undefined,
            submitted: false,
            hasEmptyInput: false,
            shift: this.props.shift
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.sendTextWithKeyToServer.response !== undefined) {
            this.setState({
                codedText: nextProps.sendTextWithKeyToServer.response
            });
        }
    }

    handleSubmitForm(event) {
        event.preventDefault();
        this.setState({submitted: true});
        if (this.state.codeType === undefined) {
            this.setState({hasEmptyInput: true});
        } else {
            const {dispatch} = this.props;
            const {text, shift, codeType} = this.state;
            dispatch(codingAction.sendTextWithKeyToServer(text, shift, codeType));
        }
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
          <div>
              <form onSubmit={this.handleSubmitForm.bind(this)}>
                  <h1>Adja meg a szöveget</h1>
                  <h3>Válasszon az opciók közül!</h3>
                  {this.state.submitted && this.state.hasEmptyInput &&
                  <div>Válassza ki a kívánt műveletet!</div>
                  }
                  <select name='codeType' onChange={this.handleInputChange.bind(this)}>
                      <option selected disabled>Kérem válasszon</option>
                      <option value='encode'>Kódolás</option>
                      <option value='decode'>Dekódolás</option>
                  </select>
                  <br/>
                  <br/>
                  <textarea name="text" value={this.state.text} onChange={this.handleInputChange.bind(this)} rows="10" cols="40"/>
                  <br/>
                  <button type='submit'>Küldés</button>
              </form>
              <h3>Eredmény:</h3>
              <div>{this.state.codedText}</div>
          </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        sendTextWithKeyToServer: state.sendTextWithKeyToServer
    };
}

export default connect(mapStateToProps)(CryptoForm);