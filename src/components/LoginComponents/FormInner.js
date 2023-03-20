import { Link } from 'react-router-dom';
import classes from '../assets/css/module/login/formInner.module.css';
import Form from '../Form';
import Field from './Field';
import Input from './Input';
export default function FormInner(){
    return (
        <div className={classes.formInner}>
            <Form action="#" class="login" method="#">
                <Field type="text" placeholder="Email Address" required/>
                <Field type="password" placeholder="Password" required/>
                <div className={classes.passLink}>
                    <Link to="#">Forgot password?</Link>
                </div>
                <Link to="/profile">btn</Link>
                <div className={`${classes.field} ${classes.btn}`}>
                    <div class={classes.btnLayer}></div>
                    <Input type="submit" value="Login" />
                </div>
                <div className={classes.signupLink}>
                    Not a member? <Link to="">Signup now</Link>
                </div>
            </Form>
            
            <Form action="#" className={classes.signup}>
                <Field type="text" placeholder="Email Address" required/>
                <Field type="password" placeholder="Password" required/>
                <Field type="password" placeholder="Confirm password" required/>

                <div className={`${classes.field} ${classes.btn}`}>
                    <div className={`${classes.btnLayer}`}></div>
                    <Input type="submit" value="Signup" />
                </div>
            </Form>
           
        </div>
    );
}