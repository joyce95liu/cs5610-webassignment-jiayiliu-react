import React from 'react';
import { Link } from 'react-router-dom'


class CourseRow extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (

            <tr>
                <td>
                    <Link to=
                          {`/course/${this.props.course.id}`}>
                          {this.props.course.title}

                    </Link>
                </td>

                <td> Professor</td>
                <td> {this.props.course.created}</td>
                <td> {this.props.course.modified}</td>

                {/*<i className="fa fa-trash float-right" onClick={() =>*/}
                {/*{this.props.delete(this.props.course.id)}}>*/}
                {/*</i>*/}
                <button className="btn btn-danger"   onClick={() =>
                {this.props.delete(this.props.course.id)}}>
                    Delete
                </button>

            </tr>



        )
    }


}
export default CourseRow;