import React from "react";
import { Card, CardBody } from "reactstrap";

export default function Header({name,title})
{
    return(
        <div>
        <Card className="my-2 bg-warning">
            <CardBody >
            <h1 className="text-center my-2">Welcome to Courses Application</h1>
            </CardBody>
        </Card>
            
        </div>
    )
}
