import { Card, CardBody, CardText, CardTitle } from "reactstrap";

export default function About()
{
    return(
        <div>
            <Card>
                <CardBody>
                    <CardTitle><h1>Course Application</h1></CardTitle>
                    <CardText>This Course App is used as CURD Operation where you can create(add),update,read,delete Course from the App.</CardText>
                </CardBody>
            </Card>
        </div>
    )
}