 import React from 'react';

export default class LessonTab extends React.Component {
    constructor(props){
        super(props)
    }
    render() {

        return (
            <li className="list-group-item">

                {this.props.title}

                <span className="float-right">

                    <i className="fa fa-trash" onClick={() =>
                    {this.props.delete(this.props.lesson.id)}}>
                    </i>

                <i className="fa fa-pencil"></i>
                </span>


            </li>
         );
    }
}

