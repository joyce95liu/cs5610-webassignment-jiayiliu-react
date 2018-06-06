import React from 'react';
import ModuleList from './ModuleList'
import CourseServiceClient from "../services/CourseServiceClient";

class CourseEditor extends React.Component {
    constructor(props) {
        super(props);

        this.courseServiceClient = CourseServiceClient.instance;
        this.selectCourse = this.selectCourse.bind(this);

        this.state = {
                courseId: '',
        };
    }

    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
    }

    componentWillReceiveProps(newProps){
        this.selectCourse(newProps.match.params.courseId);
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }


    render() {

        return (

            <div>
                   <ModuleList courseId={this.state.courseId}/>
            </div>

        )
    }
}
export default CourseEditor;