import React from 'react';
import { Link } from 'react-router-dom'
import ModuleEditor from "../containers/ModuleEditor";


export default class ModuleListItem
    extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
     console.log(this.props.module);
        return (
            <li className="list-group-item">

                <Link to=
                          {`/course/${this.props.courseId}/module/${this.props.module.id}`}>
                    {this.props.title}
                </Link>


                <span className="float-right">

                    <i className="fa fa-trash" onClick={() =>
                    {this.props.delete(this.props.module.id)}}>

                    </i>

                <i className="fa fa-pencil"></i>
                </span>


            </li>
        );
    }
}