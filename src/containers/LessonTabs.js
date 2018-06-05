import React from 'react';
import ModuleServiceClient from "../services/ModuleServiceClient";
import LessonServiceClient from "../services/LessonServiceClient"
import LessonTab from "../components/LessonTab"


export default class LessonTabs extends React.Component {

    constructor(props) {
        super(props);
        this.lessonServiceClient=LessonServiceClient.instance;

        this.state = {
            courseId: '',
            moduleId:'',
            lesson: { title: '' },
            lessons: [],

        };
        this.createLesson=this.createLesson.bind(this);
        this.titleChanged=this.titleChanged.bind(this);
        this.setCourseId=this.setCourseId.bind(this);
        this.setModuleId=this.setModuleId.bind(this);
    }

    titleChanged(event) {
         console.log(event.target.value);
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


    createLesson(){
        // console.log('hi');
        // console.log(this.state);
        this.lessonServiceClient
            .createLesson(this.state.courseId,this.state.moduleId,this.state.lesson)
            .then(() => {
                this.findAllLessonsForModule(this.state.courseId,this.state.moduleId);
            });
    }

    deleteLesson(lessonId){
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
                                    />
          });

          return (
              lessons
          )
    }


    render() {

        return (
                <div>



                    <input className="form-control"
                           onChange={this.titleChanged}
                           placeholder="title"/>


                    <button onClick={this.createLesson}
                            className= "btn btn-primary btn-block">
                        <i className="fa fa-plus"></i>
                    </button>

                    <ul className="list-group">
                        { this.renderListOfLessons()}
                    </ul>

                </div>
        )

    }
}