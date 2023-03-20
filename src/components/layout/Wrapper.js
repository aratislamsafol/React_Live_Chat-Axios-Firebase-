import classes from '../assets/css/module/login/loginGlobal.module.css';
export default function Wrapper({children}){
    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    );
}