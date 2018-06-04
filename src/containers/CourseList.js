import React from 'react';
import CourseRow from "../components/CourseRow";
import CourseServiceClient from '../services/CourseServiceClient'
class CourseList extends React.Component {
    constructor() {
        super();

        this.courseServiceClient = CourseServiceClient.instance;
        this.state = {courses: []};
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);


    }

    componentDidMount() {
        this.findAllCourses();
    }

    findAllCourses(){
        this.courseServiceClient
            .findAllCourses()
            .then((courses) => {
                console.log(courses);
                this.setState({courses: courses});
            });
    }

    renderCourseRows() {

        let courses=this.state.courses.map(
            function(course){
                return <CourseRow key={course.id}
                                  course={course}/>
            }
        )


        return (
            courses
        )
    }

    titleChanged(event)
    {
        this.setState({
            course: { title: event.target.value }
        });

    }
    createCourse() {
        this.courseServiceClient
            .createCourse(this.state.course)
            .then(() => { this.findAllCourses(); });

    }

    render() {
        return (
            <div>
                <h2>Course List</h2>
                <table className="table">
                    <thead><tr><th>Title</th></tr></thead>
                    <tbody>
                    <tr>
                        <th><input onChange={this.titleChanged}
                                   className="form-control" id="titleFld"
                                   placeholder="cs101"/></th>
                        <th><button onClick={this.createCourse}
                                    className="btn btn-primary">Add</button></th>
                    </tr>



                    {this.renderCourseRows()}
                    </tbody>
                </table>
            </div>

        )
    }
}
export default CourseList;