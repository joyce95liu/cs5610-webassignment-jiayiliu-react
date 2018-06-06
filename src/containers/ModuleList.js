import React from 'react';
import ModuleListItem from '../components/ModuleListItem';
import ModuleServiceClient from '../services/ModuleServiceClient'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import ModuleEditor from './ModuleEditor'

class ModuleList extends React.Component {

    constructor(props) {
        super(props);
        this.moduleServiceClient=ModuleServiceClient.instance;

    this.state = {
            courseId: '',
            module: { title: '' },
            modules: [],
            current:''

        };

        this.titleChanged = this.titleChanged.bind(this);
        this.createModule=this.createModule.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.deleteModule=this.deleteModule.bind(this);
        this.handleClick=this.handleClick.bind(this);

    }

    setCourseId(courseId){
        this.setState({courseId: courseId});

    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }
    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)

    }


    createModule(){
        console.log(this.state.module);
        this.moduleServiceClient
            .createModule(this.state.courseId,this.state.module)
            .then(() => {
                this.findAllModulesForCourse(this.state.courseId);
            });
    }

    deleteModule(moduleId) {
        this.moduleServiceClient
            .deleteModule(moduleId)
            .then(() => { this.findAllModulesForCourse(this.state.courseId);
            });

    }



    handleClick(index){
        this.setState({current:index});
    }

    findAllModulesForCourse(courseId) {
        this.moduleServiceClient.findAllModulesForCourse(courseId)
            .then((modules) => {
                this.setState({modules: modules});
            });
    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({module: {title: event.target.value}});

    }




    renderListOfModules() {
        //let modules =   this.state.modules.map(function(module){
          //  return <ModuleListItem title={module.title} key={module.id}/>
       // });

        //return modules;

        var modules = this.state.modules.map((module) => {
            return <ModuleListItem module={module}
                title={module.title} key={module.id}
                                   courseId={this.state.courseId}
                                   handleClick={this.handleClick}
                                   delete={this.deleteModule}
                                   back={this.state.current}     />
        });

        return (
            modules
        )
    }


    render() {
        return (
            <Router>
            <div>
                <h3> Module List for course:{this.state.courseId}</h3>

                <br/>

                <div className="row">
                    <div className="col-4">

                <input className="form-control"
                       onChange={this.titleChanged}
                       value={this.state.module.title}
                       placeholder="title"/>


                <button onClick={this.createModule}
                        className=
                            "btn btn-primary btn-block">
                    <i className="fa fa-plus"></i>
                </button>


                <ul className="list-group ">
                    { this.renderListOfModules()}
                </ul>

                    </div>
                    <div className="col-8">

                <div>
                    <Route
                       path="/course/:courseId/module/:moduleId"
                       component={ModuleEditor}>
                    </Route>
                </div>
                    </div>

                </div>
            </div>
            </Router>
        )

    }
}
export default ModuleList;