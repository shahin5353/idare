import { Steps, Button, message } from "antd";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  makeSelectProjectBasicInfo,
  makeSelectProjectAdvanceInfo,
} from "../../stores/project-details/ProjectSelector";
import { ButtonMildRed } from "../component/buttons/Buttons";
import ProjectAdvanceForm from "../forms/project/ProjectAdvanceForm";
import ProjectBasicForm from "../forms/project/ProjectBasicForm";
import TableProjectDetails from "../tables/project/TableProjectDetails";
import "./page-style.scss";
import { DeleteOutlined } from "@ant-design/icons";
import ResetAction from "../../stores/special/reset/ResetAction";

const { Step } = Steps;

export default function ProjectPage() {
  const projectBasicInfo = useSelector(makeSelectProjectBasicInfo);
  const projectAdvanceInfo = useSelector(makeSelectProjectAdvanceInfo);
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (projectBasicInfo && projectAdvanceInfo) {
      setCurrent(2);
    } else if (projectBasicInfo) {
      setCurrent(1);
    } else {
      setCurrent(0);
    }
  }, [projectBasicInfo, projectAdvanceInfo]);
  const steps = [
    {
      title: "Project Information",
      content: <ProjectBasicForm />,
    },
    {
      title: "Upload CSV",
      content: <ProjectAdvanceForm />,
    },
    {
      title: "Result",
      content: (
        <TableProjectDetails
          data={[{ ...projectBasicInfo, ...projectAdvanceInfo }]}
        />
      ),
    },
  ];

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2
          style={{
            borderBottom: "2px solid #000",
            display: "inline-block",
            paddingBottom: "10px",
          }}
        >
          Project Information{" "}
          <ButtonMildRed
            onClick={() => dispatch(ResetAction.resetStorage())}
            icon={<DeleteOutlined style={{ color: "red" }} />}
            text={"Reset"}
          />
        </h2>
      </div>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
    </>
  );
}
