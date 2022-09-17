import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import base_url from "../api/bootapi";

import Course from "./Course";

const Allcourse=()=>{

    useEffect( () =>{
        document.title="All Courses"; 
    }, [] ); //[] <--- ye sirf ek br se jyada refresh na ho isliye

     // function to call server
     const getAllCoursesFromServer = ()=>{
        axios.get(`${base_url}/courses`).then(
            (response) =>{
                //success
                //console.log(response);
                console.log(response.data);
                toast.success("courses has been loaded");
                setCourses(response.data);
            },
            (error) => {
                //for error
                console.log(error);
                toast.error("something went wrong");
            }
        );
    };

    // calling loading course function

    useEffect( () =>{
        getAllCoursesFromServer();
    }, [] );


    const [courses,setCourses] = useState([]);

    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=>c.id != id));
    }

   
    return(
        <div>
            <h1>All Course</h1>
            <p>List of courses are as follows</p>
            
            {
                courses.length>0 ? courses.map( (item) =>(
                    <Course key={item.id} course={item} update={updateCourses} />
                ) ) : "No courses"
            }

        </div>
    )
}

export default Allcourse;