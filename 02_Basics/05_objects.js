const course = {
    name: "Js",
    price: "999",
    courseInstructor: "hitesh"
}
// course.courseInstructor iska ek aur tareeka hai: object de-structure

const {courseInstructor} = course ;
console.log(courseInstructor);

// OR

const {courseInstructor : teacherName} = course;
console.log(teacherName);