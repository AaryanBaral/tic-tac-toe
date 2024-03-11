export default function Block(props) {
    const value = props.value
    // const value = values.value

  return (
    <div className='block' onClick={props.onClick}>
      {value}
    </div>
  )
}
