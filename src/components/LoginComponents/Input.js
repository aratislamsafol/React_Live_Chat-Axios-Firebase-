export default function Input({type,name, ...rest}){
    return <input type={type} name={name} {...rest} />
}