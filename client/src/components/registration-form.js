import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {email, password } = values;
        const user = {email, password };
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(email, password)));
    }

    render() {
        return (
            <div className="all">
            <div className="home">
                <div className="cont_back_info">
                <div class="cont_centrar">
         
           <div className="login-form">
            <label for="tab-2" className="tab">Sign Up</label>
            <div className="login-wrap">
            <form
                
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="email">*Email</label>
                <div className="group">
                <Field className="second"
                    component={Input}
                    type="text"
                    name="email"
                    validate={[required, nonEmpty, isTrimmed]}
                /></div>
                <div className="group">
                <label className="start" htmlFor="password">*Password</label>
                <Field className="second"
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, length({min: 1, max: 8}), isTrimmed]}
                /></div>
                <div className="group">
                <label className="start" htmlFor="passwordConfirm">*Confirm password</label>
                <Field className="second"
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matches('password')]}
                /></div>
                <div className="group">
                <button className="sub"
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    SIGN UP
                </button>
                </div>
               
               <p>Already have an account?</p>
                <a href ="/login">Sign in Here</a>
                <div className="hr"></div>
               <div className="foot-lnk">
               </div>
            </form>
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>      
        
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
