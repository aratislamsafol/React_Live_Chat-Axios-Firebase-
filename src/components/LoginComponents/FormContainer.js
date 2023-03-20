import classes from '../assets/css/module/login/formContainer.module.css';
import FormInner from './FormInner';
import SlideControls from "./SlideControls";
export default function FormContainer(){
    
    return(
        <div className={classes.formContainerEx}>
            <SlideControls />
            <FormInner/>
        </div>
    );
}