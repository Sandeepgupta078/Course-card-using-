import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
    
    let courses = props.courses;
    let category = props.category;

    const [likedcourses, setLikedcourses] = useState([]);

    function getCourses() {
        if(category === "All"){
            let allCourses = [];
            Object.values(courses).forEach(courseCategory => {
                courseCategory.forEach(course => {
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        else{
            // data/array of only specific category to be passed
            return courses[category];
        }
       
    }
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course) => {
                    return <Card key={course.id}
                        course={course}
                        likedcourses={likedcourses}
                        setLikedcourses={setLikedcourses} />
                })
            }
        </div>
    )
}

export default Cards;