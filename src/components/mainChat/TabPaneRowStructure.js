import classes from '../assets/css/module/main/tabPaneRow.module.css';
// import Container from '../Container';
export default function TabPaneRowStructure({children}){
    return(
        <div className={classes.row}>
            <div class="col-12">
                <div class="container">
                    {children}
                </div>
            </div>
        </div>
    );
}