import React from 'react';
class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.selectCourse = this.selectCourse.bind(this);
        this.state = {courseId: ''};
    }

    componentDidMount() {
        this.selectCourse
        (this.props.match.params.courseId);
    }


    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }
    render() {
        return (
            <div>
                <h2>Editing course:{this.state.courseId}</h2>
            </div>
        )
    }

}
export default CourseEditor;