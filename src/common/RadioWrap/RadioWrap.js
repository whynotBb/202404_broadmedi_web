import './RadioWrap.style.css';
const RadioWrap = ({id, title, name}) => {
    return (
        <div className='radioWrap'>
            <input type='radio' id={id} name={name} />
            <label htmlFor={id}>{title}</label>
        </div>
    );
};
export default RadioWrap;
