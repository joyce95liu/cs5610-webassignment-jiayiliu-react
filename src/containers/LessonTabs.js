import React from 'react';
import LessonServiceClient from "../services/LessonServiceClient"
import LessonTab from "../components/LessonTab"
import {BrowserRouter as Router,Route} from 'react-router-dom'
import ModuleEditor from "./ModuleEditor";
import App from "./widgetList"

export default class LessonTabs extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            courseId: '',
            moduleId:'',
            lessonId:'',
            lesson: { title: '' },
            lessons: [],
            current:''

        };

        this.lessonServiceClient=LessonServiceClient.instance;
        this.createLesson=this.createLesson.bind(this);
        this.titleChanged=this.titleChanged.bind(this);
        this.setCourseId=this.setCourseId.bind(this);
        this.setModuleId=this.setModuleId.bind(this);
        this.deleteLesson=this.deleteLesson.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }

    titleChanged(event) {
         this.setState({lesson: {title: event.target.value}});

    }

    setCourseId(courseId){
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId){
        this.setState({moduleId: moduleId});

    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
    }

    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.findAllLessonsForModule(newProps.courseId,newProps.moduleId)
    }

    handleClick(index){
        this.setState({current:index});
    }

    createLesson(){
        this.lessonServiceClient
            .createLesson(this.state.courseId,this.state.moduleId,this.state.lesson)
            .then(() => {
                this.findAllLessonsForModule(this.state.courseId,this.state.moduleId);
            });
    }

    deleteLesson(lessonId){
        window.confirm('Confirm that you want to delete the lesson');
        this.lessonServiceClient
            .deleteLesson(lessonId)
            .then(() => { this.findAllLessonsForModule(this.state.courseId,this.state.moduleId);
            });
    }

    findAllLessonsForModule(courseId,moduleId) {
        this.lessonServiceClient.findAllLessonsForModule(courseId,moduleId)
            .then((lessons) => {
                this.setState({lessons: lessons});
            });
    }

    renderListOfLessons() {

          var lessons = this.state.lessons.map((lesson) => {
              return <LessonTab     lesson={lesson}
                                    title={lesson.title}
                                     key={lesson.id}
                                     courseId={this.state.courseId}
                                     moduleId={this.state.moduleId}
                                     delete={this.deleteLesson}
                                     handleClick={this.handleClick}
                                     back={this.state.current}/>
          });

          return (
              lessons
          )
    }

    render() {

        return (
                <div>

                    <h1 className="font-italic"> Lesson List for module:{this.state.moduleId}</h1>

                    <input className="form-control"
                           onChange={this.titleChanged}
                           placeholder="title"/>


                    <button onClick={this.createLesson}
                            className= "btn btn-primary btn-block">
                        <i className="fa fa-plus"></i>
                    </button>

                    <ul className="nav nav-tabs">
                        { this.renderListOfLessons()}
                    </ul>

                    <div>
                        <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId"
                               component={App}>
                        </Route>
                    </div>

                </div>
        )
    }
}