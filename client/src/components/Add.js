import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { add } from '../actions/auth';
import { testFetch } from '../actions/protected-data';
import { sendEntry } from '../actions/addNew';
import SimplePieChart from './SimplePieChart';
import HourPieChart from './HourPieChart';
import DayPieChart from './DayPieChart';
import RankPieChart from './RankPieChart';
import WeekPieChart from './WeekPieChart';
// import {required, nonEmpty} from '../validators';

export class Add extends React.Component {

    componentDidMount() {
       // this.props.dispatch(testFetch());
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
                className="login-form2"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <br />
                <h4>{this.props.selectedCoin.name}  <span>&#36;</span>{this.props.selectedCoin.price_usd}</h4>

                    
                    <label>Amount</label>
                <br/>
                    <Field name="amount" component="input" type="text" placeholder="Enter Amount"/>
                <br />
                <button id="btnn" disabled={this.props.pristine || this.props.submitting}>
                    Add New
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

Add = connect(
    mapStateToProps
    )(Add);

export default reduxForm({
    form: 'add',
    onSubmitFail: (errors, dispatch) => dispatch(focus('add', 'email'))
})(Add);






