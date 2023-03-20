import NavLinkButton from "./NavLinkButton";

export default function NavItem({className,id,btnContent,role,...rest}){
    return (
        <li class="nav-item" role="presentation">
            <NavLinkButton className={className} id={id} role={role} btnContent={btnContent} {...rest}/>
        </li>    
    );
}