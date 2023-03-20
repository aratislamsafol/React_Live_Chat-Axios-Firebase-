export default function NavLinkButton({className,id,btnContent,type,role,...rest}){
    return (
        <button className={className} id={id} type="button" role={role}>{btnContent}</button>
    );
}
