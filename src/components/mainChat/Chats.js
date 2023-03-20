import classes from '../assets/css/module/main/chats.module.css'
export default function Chat({children}){
    return(
        <div class={classes.chats}>
            {children}
        </div>
    );
}