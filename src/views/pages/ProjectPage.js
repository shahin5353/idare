import { Steps, Button, message } from "antd";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectProjectBasicInfo, makeSelectProjectAdvanceInfo } from "../../stores/project-details/ProjectSelector";
import ProjectBasicForm from "../forms/project/ProjectBasicForm";
import './page-style.scss'

const { Step } = Steps;

export default function ProjectPage() {
    const dispatch = useDispatch()
    const projectBasicInfo = useSelector(makeSelectProjectBasicInfo)
    const projectAdvanceInfo = useSelector(makeSelectProjectAdvanceInfo)
    console.log("projectBasicInfo",projectBasicInfo, "projectAdvanceInfo", projectAdvanceInfo);
    const [current, setCurrent] = useState(0);
    useEffect(()=>{
        if(projectBasicInfo){
            setCurrent(1);
        }
        else if(projectBasicInfo && projectAdvanceInfo){
            setCurrent(2)
        }
    },[projectBasicInfo])
    const steps = [
        {
          title: 'Project Information',
          content: <ProjectBasicForm/>,
        },
        {
          title: 'Upload CSV',
          content: 'Second-content',
        },
        {
          title: 'Result',
          content: 'Last-content',
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
        {/* <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div> */}
      </>
    )
}

