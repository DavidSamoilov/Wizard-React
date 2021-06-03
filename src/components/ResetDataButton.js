import Button from 'react-bootstrap/Button'

const ResetDataButton = ({text,onClick}) => {   

    return (
        <span>
            <Button
            onClick={()=>onClick()}>
                {text}
                </Button>
        </span>
    )
}

export default ResetDataButton
