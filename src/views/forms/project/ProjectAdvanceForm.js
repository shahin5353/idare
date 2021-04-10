import ButtonFormSubmit from "../ButtonFormSubmit";
import * as Yup from 'yup'
import useFormInputValidation from "../../component/form-input/useFormInputValidation";
import { FormInputText } from "../../component/form-input/FormInputText";
import { FormBasicContainer } from "../FormStyles";
import ProjectAction from "../../../stores/project-details/ProjectAction";
import { useDispatch, useSelector } from "react-redux";
import { message, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import Papa from 'papaparse'
import { checkRequiredFormatForCSV } from "../../../utils/Functions";
import FileAction from '../../../stores/project-file/FileAction'
import { makeSelectProjectCSVFileData } from "../../../stores/project-file/FileSelector";
import { useEffect } from "react";

const INITIAL_STATE = {
    csvData: '',
    max_X: '',
    min_X: '',
    max_Y: '',
    min_Y: '',
    max_Z: '',
    min_Z: ''
}

const VALIDATION_SCHEMA = Yup.object({
    csvData: Yup.string().required('File is Required'),
    max_X: Yup.string().required('Max X is Required'),
    min_X: Yup.string().required('Min X is Required'),
    max_Y: Yup.string().required('Max Y is Required'),
    min_Y: Yup.string().required('Min Y is Required'),
    max_Z: Yup.string().required('Max Z is Required'),
    min_Z: Yup.string().required('Min Z is Required')

})

export default function ProjectAdvanceForm(props) {
    const dispatch = useDispatch()
    const { control, values } = useFormInputValidation(INITIAL_STATE, VALIDATION_SCHEMA)
    const onSubmit = () => {
        dispatch(ProjectAction._setProjectAdvanceInfo(values))
        console.log(values);
    }
    const csvFileData = useSelector(makeSelectProjectCSVFileData);

    useEffect(() => {
        if (csvFileData.length) {
            const max_X = csvFileData.sort((a, b) => b.X - a.X)[0].X;
            const min_X = csvFileData.sort((a, b) => a.X - b.X)[0].X;
            const max_Y = csvFileData.sort((a, b) => b.Y - a.Y)[0].Y;
            const min_Y = csvFileData.sort((a, b) => a.Y - b.Y)[0].Y;
            const max_Z = csvFileData.sort((a, b) => b.Z - a.Z)[0].Z;
            const min_Z = csvFileData.sort((a, b) => a.Z - b.Z)[0].Z;
            control.setAllValues({...values, max_X, min_X, max_Y, min_Y, max_Z, min_Z})
        }
    }, [csvFileData])
    function beforeUpload(file) {
        const isCSV = file.type === 'application/vnd.ms-excel' || file.type === 'text/comma-separated-values'
        if (!isCSV) {
            message.error({ content: 'You can only upload CSV File!', key: 'FileTpeError', duration: 2 })
            return false;
        }
        return true;
    }
    const handleChange = (info) => {
        if (beforeUpload(info.file)) {
            Papa.parse(info.file.originFileObj, {
                header: true,
                skipEmptyLines: true,
                complete: function (results) {
                    const rightFileFormat = checkRequiredFormatForCSV(results.data)
                    if (rightFileFormat) {
                        control.setValue('csvData', info.file.originFileObj.name);
                        dispatch(FileAction._setProjectCSVFileData(results.data))
                    } else {
                        control.setValue('csvData', '');
                        console.log("Wrong Format");
                    }
                }
            })
        }
    }

    return (
        <FormBasicContainer>
            {/* <FormInputText
                label={'Project Name'}
                control={control}
                name={'projectName'}
            />
            <FormInputText
                label={'Project Description'}
                control={control}
                name={'projectDescription'}
            />
            <FormInputText
                label={'Client'}
                control={control}
                name={'client'}
            />
            <FormInputText
                label={'Contructor'}
                control={control}
                name={'contructor'}
            /> */}
            {values.csvData ? (
                <p style={{ 'fontWeight': 'bold' }}>Uploaded {values.csvData}</p>
            ) : (
                <Upload
                    accept='.csv'
                    style={{ width: '300px' }}
                    className='avatar-uploader'
                    control={control}
                    name={'csvData'}
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                    multiple={false}
                >
                    <div>
                        <InboxOutlined style={{ fontSize: "40px" }}/>
                        <div className='ant-upload-text'>Click or drag file to this area to upload CSV</div>
                    </div>
                </Upload>
            )
            }
            <FormInputText
                label={'Max X'}
                control={control}
                name={'max_X'}
            />
              <FormInputText
                label={'Min X'}
                control={control}
                name={'min_X'}
            />
              <FormInputText
                label={'Max Y'}
                control={control}
                name={'max_Y'}
            />
              <FormInputText
                label={'Min Y'}
                control={control}
                name={'min_Y'}
            />
              <FormInputText
                label={'Max Z'}
                control={control}
                name={'max_Z'}
            />
              <FormInputText
                label={'Min Y'}
                control={control}
                name={'min_Z'}
            />

            <ButtonFormSubmit
                title={'Continue'}
                control={control}
                onSubmit={onSubmit}
            />
        </FormBasicContainer>
    )
}