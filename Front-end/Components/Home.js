import React , {useEffect} from "react";
import { Container, Button, Card } from "reactstrap";

const Home=()=>{

    useEffect( () =>{
        document.title="Home";
    }, [] )


    return(
        <div className="text-center">
        
            <p>
                <h1>Course React App</h1>
                <p>This is a CourseApp used to find different type of Courses.</p>
            </p>
            <Container>
                <Button color="primary" outline>
                    Start Using
                </Button>
            </Container>
        
        </div>
    )
}

export default Home;