let _singleton = Symbol();

const MODULE_API_URL =
    'https://webdev-summer-assignment.herokuapp.com/api/course/CID/module';

export default class LessonServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    findAllLessonsForModule(courseId,moduleId) {
        return fetch('https://webdev-summer-assignment.herokuapp.com/api/course'+'/'+courseId+'/module/'+moduleId+'/lesson')
            .then(function(response) {
                return response.json();
            })
    }

    createLesson(courseId, moduleId,lesson) {
        return fetch('https://webdev-summer-assignment.herokuapp.com/api/course/'+courseId+'/module/'+moduleId+'/lesson',
            {   body: JSON.stringify(lesson),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    deleteLesson(lessonId){
        return fetch('https://webdev-summer-assignment.herokuapp.com/api/lesson'+'/'+lessonId,
            {
                method: 'DELETE'
            }).then(function (response) {
            return response;
        })
    }


    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new LessonServiceClient(_singleton);
        return this[_singleton]
    }
}
