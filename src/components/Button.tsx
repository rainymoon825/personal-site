

interface Props {
    children: string
    onHover: () => void;
}


const Button = ({children, onHover}: Props) => {
  return (
    <button className='btn btn-primary' onClick = {onHover} >{children}</button>
  )
}

export default Button