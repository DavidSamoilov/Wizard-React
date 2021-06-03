import Button from 'react-bootstrap/Button'

const ResetDataButton = ({text,onClick,className}) => {   

    return (
        <span>
            <Button
            className={className}
            onClick={()=>onClick()}>
                {text}
                </Button>
        </span>
    )
}

export default ResetDataButton
