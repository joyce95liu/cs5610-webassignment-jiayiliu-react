 import React from 'react';

export default class LessonTab extends React.Component {
    constructor(props){
        super(props)
    }
    render() {

        return (

                <li className="nav-item ">
                    <a className="nav-link active"
                       href="#">{this.props.title}


                <span >

                    <i className="fa fa-trash " onClick={() =>
                    {this.props.delete(this.props.lesson.id)}}>
                    </i>

                <i className="fa fa-pencil"></i>
                </span>
                </a>

            </li>

         );
    }
}

