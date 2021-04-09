import { Steps, Button, message } from "antd";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectProjectBasicInfo, makeSelectProjectAdvanceInfo } from "../../stores/project-details/ProjectSelector";
import ProjectAdvanceForm from "../forms/project/ProjectAdvanceForm";
import ProjectBasicForm from "../forms/project/ProjectBasicForm";
import TableProjectDetails from "../tables/project/TableProjectDetails";
import './page-style.scss'

const { Step } = Steps;

export default function ProjectPage() {
    const projectBasicInfo = useSelector(makeSelectProjectBasicInfo)
    const projectAdvanceInfo = useSelector(makeSelectProjectAdvanceInfo)
    console.log("projectBasicInfo", projectBasicInfo, "projectAdvanceInfo", projectAdvanceInfo);
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        if (projectBasicInfo && projectAdvanceInfo) {
            setCurrent(2)
        }
        else if (projectBasicInfo) {
            setCurrent(1);
        }
    }, [projectBasicInfo,projectAdvanceInfo])
    const steps = [
        {
            title: 'Project Information',
            content: <ProjectBasicForm />,
        },
        {
            title: 'Upload CSV',
            content: <ProjectAdvanceForm/>,
        },
        {
            title: 'Result',
            content: <TableProjectDetails data={[{...projectBasicInfo,...projectAdvanceInfo}]}/>,
        },
    ];

    return (
        <>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
        </>
    )
}

