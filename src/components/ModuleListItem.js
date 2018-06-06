import React from 'react';
import { Link } from 'react-router-dom'
import ModuleEditor from "../containers/ModuleEditor";


export default class ModuleListItem
    extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currenttile:'list-group-item'
        }
    }

    componentDidMount() {
        console.log('zhu');

        if(this.props.back===this.props.module.id){
            this.setState({currenttile:"list-group-item bg-info"});
        }else{
            this.setState({currenttile:"list-group-item"});
        }
    }

    componentWillReceiveProps(newProps){
        if(newProps.back===newProps.module.id){
            this.setState({currenttile:"list-group-item bg-secondary"});
        }else{
            this.setState({currenttile:"list-group-item"});
        }

    }

    render() {


        return (

            <li className={this.state.currenttile}>

                <Link to=
                          {`/course/${this.props.courseId}/module/${this.props.module.id}`}
                       onClick={() =>{this.props.handleClick(this.props.module.id)}}>

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