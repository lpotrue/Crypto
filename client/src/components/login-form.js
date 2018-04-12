import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.email, values.password));
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
        return (
         <div id="everything">
           <p>Welcome back to Just Hodl!</p> 
           <div className="login-form">

          
            <label className="tab">Sign In</label>
             <br/>
         
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <div disabled={this.props.pristine || this.props.submitting}></div>
                 <div className="login-wrap">
                <div className="group">
                <label className="start" htmlFor="email">Email</label>
                <Field className="second"
                    component={Input}
                    type="text"
                    name="email"
                    id="email"
                    validate={[required, nonEmpty]}
                /></div>
                <div className="group">
                <label className="start" htmlFor="password">Password</label>
                <Field className="second"
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                /></div>
              <div className="group">
                <button type="submit" className="sub" value="Sign In">SIGN IN</button>
              </div>
              
                <p>Don't have and account?</p>
                <a href ="/register">Sign up Here</a>
                <div className="hr"></div></div>
                <p>Demo Login:  me@me.com
                  <br/>
                   Password:  demo123</p>
             </form>

            </div>
          
           <h5>"Hodl" or hold onto cryptocurrency. Create an account with us to learn about cryptocurrency trends.</h5>

        </div>
    
            
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'email'))
})(LoginForm);
