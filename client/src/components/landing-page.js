import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import LoginForm from './login-form';
import RegistrationForm from './registration-form';
import Stats from './Stats';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    
    
    
    return (
      
            
        <div id="particles">
        <LoginForm/>
       
         {/*<div className="container">
                <div className="feature-progress" aria-hidden="true">
                  <div className="feature-progress-ball-wrap">
                    <div className="feature-progress-ball"></div>
                  </div>



                  <div className="feature-progress-platform"></div>
                  <div className="feature-progress-platform"></div>
                  <div className="feature-progress-platform"></div>
                  <div className="feature-progress-platform"></div>
                  <div className="feature-progress-platform"></div>
                  <div className="feature-progress-platform"></div>
                  <div className="feature-progress-platform"></div>
            </div>
            </div>*/}
    </div>
   
);
}








const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);

{/* 
        <div className="cont_img_back_grey">
       </div>
       </div>
            */}

             {/*<div className="cotn_principal">
        <div className="cont_centrar">

        <div className="cont_login">
        <div className="cont_info_log_sign_up">
        <div className="col_md_login">
        <div className="cont_ba_opcitiy">*/}
        
            



 {/*<span><button id="btnns"><a href="/">LOGIN<span>▼</span></a></button></span>
            <LoginForm/>
          <span><button><a href="/register">SIGN UP<span>▼</span></a></button></span>
            <RegistrationForm/>
                  
                
        <RegistrationForm/>
        
        
    
    }


{/*}  */}

{/*function cambiar_login() {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
document.querySelector('.cont_form_login').style.display = "block";
document.querySelector('.cont_form_sign_up').style.opacity = "0";               

setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);  
  
setTimeout(function(){    
document.querySelector('.cont_form_sign_up').style.display = "none";
},200);  
  }

function cambiar_sign_up(at) {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
  document.querySelector('.cont_form_sign_up').style.display = "block";
document.querySelector('.cont_form_login').style.opacity = "0";
  
setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
},100);  

setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
},400);  


}    



function ocultar_login_sign_up() {

document.querySelector('.cont_forms').className = "cont_forms";  
document.querySelector('.cont_form_sign_up').style.opacity = "0";               
document.querySelector('.cont_form_login').style.opacity = "0"; 

setTimeout(function(){
document.querySelector('.cont_form_sign_up').style.display = "none";
document.querySelector('.cont_form_login').style.display = "none";
},500);  
  
  }*/}







