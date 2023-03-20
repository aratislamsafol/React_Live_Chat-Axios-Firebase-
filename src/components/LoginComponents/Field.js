import classes from '../assets/css/module/login/formInner.module.css';
import Input from './Input';
export default function Field({type,placeholder, ...rest}){
    return <div className={classes.field}>
        <Input type={type} placeholder={placeholder} {...rest}/>
    </div>
}