export default function NavTabs({children}){
    return (
        <ul class="nav nav-tabs border-top p-3 p-lg-0" id="myTab" role="tablist">
            {children}
        </ul>
    );
}
