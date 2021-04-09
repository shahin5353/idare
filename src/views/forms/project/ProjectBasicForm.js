import ButtonFormSubmit from "../ButtonFormSubmit";
import * as Yup from 'yup'
import useFormInputValidation from "../../component/form-input/useFormInputValidation";
import { FormInputText } from "../../component/form-input/FormInputText";
import { FormBasicContainer } from "../FormStyles";
import ProjectAction from "../../../stores/project-details/ProjectAction";
import { useDispatch } from "react-redux";

const INITIAL_STATE = {
    projectName: '',
    projectDescription: '',
    client: '',
    contructor: '',
}

const VALIDATION_SCHEMA = Yup.object({
    projectName: Yup.string()
        .required('Building Name is Required')
        .min(3, 'Minimum 3 Characters')
        .max(40, 'Maximum 40 Characters'),
    projectDescription: Yup.string()
        .required('Address is Required')
        .min(5, 'Minimum 5 Characters')
        .max(150, 'Maximum 150 Characters'),
    client: Yup.string()
        .required('Building Name is Required')
        .min(3, 'Minimum 3 Characters')
        .max(40, 'Maximum 40 Characters'),
    contructor: Yup.string()
        .required('Building Name is Required')
        .min(3, 'Minimum 3 Characters')
        .max(40, 'Maximum 40 Characters'),
})

export default function ProjectBasicForm(props) {
    const dispatch = useDispatch()
    const { control, values } = useFormInputValidation(INITIAL_STATE, VALIDATION_SCHEMA)
    const onSubmit = () => {
        dispatch(ProjectAction._setProjectBasicInfo(values))
    }
    return (
        <FormBasicContainer>
            <FormInputText
                label={'Project Name: '}
                control={control}
                name={'projectName'}
            />
            <FormInputText
                label={'Description: '}
                control={control}
                name={'projectDescription'}
            />
            <FormInputText
                label={'Client: '}
                control={control}
                name={'client'}
            />
            <FormInputText
                label={'Contructor: '}
                control={control}
                name={'contructor'}
            />
            <ButtonFormSubmit
                title={'Continue'}
                control={control}
                onSubmit={onSubmit}
            />
        </FormBasicContainer>
    )
}