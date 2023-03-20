export default function Label({title,labelClass, ...rest}){
    return <label className={labelClass} {...rest}>{title}</label>
}