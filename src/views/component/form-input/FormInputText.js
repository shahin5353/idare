import { Form, Input } from 'antd'

export function FormInputText(props) {
    const isTouched = props.control.touched[`${props.name}`]
    const error = props.control.errors[`${props.name}`]
    const value = props.isControlledManually ? props.value : props.control.values[`${props.name}`]

    return (
        <Form.Item
            label={props.label}
            hasFeedback
            validateStatus={
                isTouched ? (error ? 'error' : value && value.length > 0 ? 'success' : '') : ''
            }
            help={isTouched ? error : ''}
        >
            <Input
                size={'medium'}
                onChange={(e) => props.control.handleInputChange(props.name, e.target.value)}
                value={props.control.values[`${props.name}`]}
                type={props.type}
                name={props.name}
            />
        </Form.Item>
    )
}
