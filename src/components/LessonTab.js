import React from 'react';

export default class LessonTab extends React.Component {
    constructor(props){
        super(props)


            this.state = {
                currenttile:'nav-item '
            }
        }

        componentDidMount() {
            if(this.props.back===this.props.lesson.id){
                this.setState({currenttile:"nav-link active bg-info"});
            }else{
                this.setState({currenttile:"nav-link active"});
            }
        }

        componentWillReceiveProps(newProps){
            if(newProps.back===newProps.lesson.id){
                this.setState({currenttile:"nav-link active bg-info"});
            }else{
                this.setState({currenttile:"nav-link active "});
            }
        }


    render() {

        return (

                <li className="nav-item ">
                    <a className={this.state.currenttile}
                       href="#"
                        onClick={() =>{this.props.handleClick(this.props.lesson.id)}}>
                        {this.props.title}

                       <span >
                            <i className="fa fa-trash" onClick= {() =>
                            {this.props.delete(this.props.lesson.id)}}>
                            </i>

                            {/*<i className="fa fa-pencil"></i>*/}
                        </span>
                     </a>

                 </li>

         );
    }
}

