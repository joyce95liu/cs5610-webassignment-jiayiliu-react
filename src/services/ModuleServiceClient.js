import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
render() {
    return (
        <Router>
            <div>
                <h1>Course Manager</h1>
                <Route path="/course"
                       component={CourseList}>
                </Route>
            </div>

        </Router>
    )
}
