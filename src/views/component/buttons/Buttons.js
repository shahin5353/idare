import { Button } from 'antd'
import './buttons.scss'

export function ButtonMildGreen(props) {
    return (
        <Button
            onClick={props.onClick}
            loading={props.isLoading}
            className={'btn-mild-green'}
            size={'default'}
            icon={props.icon}
        >
            {props.text}
        </Button>
    )
}
