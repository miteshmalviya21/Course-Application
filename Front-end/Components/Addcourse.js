import axios from "axios";
import React , {useEffect, useState} from "react";
import { Fragment } from "react";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";

const Addcourse = ()=> {

    useEffect( ()=>{
        document.title = "Add Course";
    }, [] )

    const [course,setCourse] = useState({});
    //form handle function
const handleForm = (e) =>{
    console.log(course);
    postDatatoserver(course);
    e.preventDefault();
};

// creating function to post data on server

const postDatatoserver = (data) => {
    axios.post(`${base_url}/courses`,data).then(
        (response)=>{
            console.log(response);
            console.log("success");
            toast.success("Course added successfully");
        }, (error)=>{
            console.log(error);
            console.log("error");
            toast.error("Error ! Something went wrong")
        }
    )
};

    return(
        <Fragment>
        <h1 className="text-center my-3">Fill Course Detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" placeholder="Enter here" name="userId" id="userId" onChange={(e) =>{
                        setCourse({...course,id:e.target.value});   // 3 .... ka mtlb purana data
                    }}></Input>
                </FormGroup>

                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter title here" id="title" onChange={(e) =>{
                        setCourse({...course, title : e.target.value});
                    }}></Input>
                </FormGroup>

                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea" placeholder="Enter description here" id="description" style={{height:100}} onChange={(e)=>{
                        setCourse({...course, description: e.target.value});
                    }}></Input>
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success">Add Course</Button>{' '}
                    <Button type="reset" color="warning">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}

export default Addcourse;