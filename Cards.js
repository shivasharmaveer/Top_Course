import React from "react";
import Card from "./Card";

function Cards({ courses }) {
    // Only process courses if it's not null or undefined
    const getCourses = () => {
        if (!courses) return []; // Return an empty array if courses is null or undefined

        let allCourses = [];
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course);
            });
        });
        return allCourses;
    };

    return (
        <div>
            {getCourses().map((course, index) => (
                <Card key={index} course={course} />
            ))}
        </div>
    );
}

export default Cards;