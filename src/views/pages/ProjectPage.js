import { useDispatch } from "react-redux";
import ProjectBasicForm from "../forms/ProjectBasicForm";


export default function ProjectPage() {
    const dispatch = useDispatch()
    return (
        <div>
            <ProjectBasicForm/>
        </div>
    )
}