import { useDispatch, useSelector } from 'react-redux'
import KmpXChart from '../../charts/KmpXChart'
import PdfProjectDetails from '../../component/pdf/PdfProjectDetails'
import ComponentTable from '../ComponentTable'

export default function TableProjectDetails({data}) {
    const columns = [
        {
            title: 'Project Name',
            dataIndex: 'projectName',
            key: "name",
        },
        {
            title: 'Description',
            dataIndex: 'projectDescription',
            key: "desc",
        },
        {
            title: 'Contructor',
            dataIndex: 'contructor',
            key: "contructor",
        },
        {
            title: 'Client',
            dataIndex: 'client',
            key: "client",
        },
        {
            title: 'Max X',
            dataIndex: 'max_X',
            key: "max_X",
        },
        {
            title: 'Max Y',
            dataIndex: 'max_Y',
            key: "max_Y",
        },
        {
            title: 'Max Z',
            dataIndex: 'max_Z',
            key: "max_Z",
        },
        {
            title: 'Min X',
            dataIndex: 'min_X',
            key: "min_X",
        },
        {
            title: 'Min Y',
            dataIndex: 'min_Y',
            key: "min_Y",
        },
        {
            title: 'Min Z',
            dataIndex: 'min_Z',
            key: "min_Z",
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

    return <div style={{width:'100%',}}><ComponentTable dataList={data} columns={columns} /><KmpXChart/></div>
}
