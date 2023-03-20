import classes from '../assets/css/module/login/signInUpSm.module.css';
export default function SignInUpSm(){
    return (
        <div className={classes.title_text}>
            <div className={`${classes.title} ${classes.login}`}>
               Login Form
            </div>
            <div className={`${classes.title} ${classes.signup}`}>
               Signup Form
            </div>
         </div>
    );
}