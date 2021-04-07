import React from 'react'
import { Button } from 'antd'
import {SaveOutlined} from '@ant-design/icons'

export default function ButtonFormSubmit(props) {
    
    return (
        <Button
            type={'submit'}
            style={{ marginTop: '10px', width: '100%', textAlign: 'center' }}
            size='large'
            disabled={props.disabled}
            className='btn-orange'
            onClick={(event) => props.control.handleSubmit(props.onSubmit)}
            icon={props.icon ? props.icon : <SaveOutlined/>}
        >
            {props.title ? props.title : 'Submit'}
        </Button>
    )
}
