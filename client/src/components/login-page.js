import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {login} from '../actions/auth';
import LoginForm from './login-form';

export function LoginPage(props) {

    
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                
                <label htmlFor="email">Email</label>
                <Field
                    component={Input}
                    type="text"
                    name="confirmPassword"
                    id="email"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="confirmPassword"
                    id="password"
                    validate={[required, nonEmpty]}
                />
            </form>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
