import Button from '../Button/Button';

const Alert = ({children}) => {
    return (
        <div className='alertWrap'>
            <div className='alertContents'>
                <div className='txt'>{children}</div>
            </div>
            <div className='alertBottom'>
                <Button type='primary lg'>확인</Button>
            </div>
        </div>
    );
};
export default Alert;
