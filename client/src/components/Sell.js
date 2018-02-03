import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { add } from '../actions/auth';
import { testFetch } from '../actions/protected-data';
import { sendEntry } from '../actions/addNew';
// import {required, nonEmpty} from '../validators';

export class Sell extends React.Component {

    componentDidMount() {
        //this.props.dispatch(Fetch());
    }


    onSubmit(values) {
      
        console.log(values, this.props.selectedCoin);
        
        let submission = this.props.selectedCoin;

        submission.amount = values.amount
        return this.props.dispatch(sendEntry(submission));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }

        if (!this.props.loggedIn) {
            return <Redirect to="/" />;
        }

        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <br />
                    
                    <label>Amount</label>
                    <Field name="amount" component="input" type="text" placeholder="e.g 4000"/>
                <br />
                <button disabled={this.props.pristine || this.props.submitting}>
                    Sell
                </button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        loggedIn: currentUser !== null,
        email: currentUser ? state.auth.currentUser.email : ''
    };
};

Sell = connect(
    mapStateToProps
    )(Sell);

export default reduxForm({
    form: 'add',
    onSubmitFail: (errors, dispatch) => dispatch(focus('sell', 'email'))
})(Sell);






