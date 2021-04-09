import { useDispatch, useSelector } from 'react-redux'
import PdfProjectDetails from '../../component/pdf/PdfProjectDetails'
import ComponentTable from '../ComponentTable'

export default function TableProjectDetails({data}) {
    const columns = [
        {
            title: 'Project Name',
            dataIndex: 'projectName',
            key: "name",
            // width: "20%"
        },
        {
            title: 'Description',
            dataIndex: 'projectDescription',
            key: "desc",
            // width: "20%"
        },
        {
            title: 'Contructor',
            dataIndex: 'contructor',
            key: "contructor",
            // width: "20%"
        },
        {
            title: 'Client',
            dataIndex: 'client',
            key: "client",
            // width: "20%"
        },
        {
            title: 'Max X',
            dataIndex: 'max_X',
            key: "max_X",
            // width: "20%"
        },
        {
            title: 'Max Y',
            dataIndex: 'max_Y',
            key: "max_Y",
            // width: "20%"
        },
        {
            title: 'Max Z',
            dataIndex: 'max_Z',
            key: "max_Z",
            // width: "20%"
        },
        {
            title: 'Min X',
            dataIndex: 'min_X',
            key: "min_X",
            // width: "20%"
        },
        {
            title: 'Min Y',
            dataIndex: 'min_Y',
            key: "min_Y",
            // width: "20%"
        },
        {
            title: 'Min Z',
            dataIndex: 'min_Z',
            key: "min_Z",
            // width: "20%"
        },
        {
            title: 'Document',
            align: 'center',
            key: 'doc',
            render: (text, record) => (
                <PdfProjectDetails data={data}/>
            )
        }
      
    ]

    return <ComponentTable dataList={data} columns={columns} />
}
