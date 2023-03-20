export default function TabPane({children,className,id,ariaLabelledBy}){
    return (
        <div className={className} id={id} role="tabpanel" aria-labelledby={ariaLabelledBy} tabindex="0"
        >
            {children}
        </div>
    );
}