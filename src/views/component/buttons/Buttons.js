import { Button } from 'antd'
import './buttons.scss'

export function ButtonMildGreen(props) {
    return (
        <Button
            onClick={props.onClick}
            className={'btn-mild-green'}
            size={'default'}
            icon={props.icon}
        >
            {props.text}
        </Button>
    )
}
export function ButtonMildRed(props) {
    return (
        <Button
            onClick={props.onClick}
            className={'btn-mild-red'}
            size={'default'}
            icon={props.icon}
        >
            {props.text}
        </Button>
    )
}
