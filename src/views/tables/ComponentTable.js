import React from 'react'
import { Table } from 'antd'
import { isMobile } from 'react-device-detect'
import './table.scss'

export default function ComponentTable(props) {
    return (
        <Table
            rowClassName={(record, index) =>
                index % 2 === 0 ? 'table-row-dark' : 'table-row-light'
            }
            showHeader={true}
            bordered={true}
            columns={props.columns}
            dataSource={props.dataList}
            pagination={false}
            size='large'
            rowKey={(data) => data.id}
            loading={props.isRequesting}
            scroll={{ x: !isMobile ? '' : 'max-content' }}
            style={{marginTop:'20px'}}
        />
    )
}
