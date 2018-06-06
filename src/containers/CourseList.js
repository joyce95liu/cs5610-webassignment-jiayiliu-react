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
        this.deleteCourse = this.deleteCourse.bind(this);

    }

    componentDidMount() {
        this.findAllCourses();
    }

    findAllCourses(){
        this.courseServiceClient
            .findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
            });
    }

    deleteCourse(courseId) {
        this.courseServiceClient
            .deleteCourse(courseId)
            .then(() => { this.findAllCourses(); });
    }

    renderCourseRows() {
            var rows = this.state.courses.map((course) => {
                return <CourseRow course={course} key={course.id}
                                  delete={this.deleteCourse}/>
            });

            return (
            rows
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
                <h1>Course List</h1>
                <table className="table">
                    <thead><tr><th>Title</th></tr></thead>

                    <tbody>
                    <tr>
                        <th><input onChange={this.titleChanged}
                                   className="form-control" id="titleFld"
                                   placeholder="cs101"/>
                        </th>
                        <th><button onClick={this.createCourse}
                                    className="btn btn-primary"> Add
                        </button>
                        </th>
                    </tr>

                    <tr>
                        <th>CoureList</th>
                        <th>Owner</th>
                        <th>Created time</th>
                        <th>Last Modified time</th>
                    </tr>

                    {this.renderCourseRows()}

                    </tbody>
                </table>
            </div>

        )
    }
}
export default CourseList;