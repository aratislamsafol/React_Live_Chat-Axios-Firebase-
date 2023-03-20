import classes from '../assets/css/module/login/slideControls.module.css';
import Label from '../Lable';
import Input from './Input';
export default function SlideControls(){
    return (
        <div class={classes.slide_controls}>
            <Input type="radio" name="slide" id={classes.login} checked/>   
            <Input type="radio" name="slide" id={classes.signup}/>
            <Label for="login" labelClass={`${classes.slide} ${classes.login}`} title="Login"/>
            <Label for="signup" class={`${classes.slide} ${classes.signup}`} title="Signup"/>
            <div class={classes.sliderTab}></div>
        </div>
    );
}