import { Button, Result } from "antd";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../assets/AppRoutes";

export default function NotFoundPage() {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={ <Link to={AppRoutes.DEFAULT}>
            <Button type='primary'>Back Home</Button>
        </Link>}
        />
    )
}