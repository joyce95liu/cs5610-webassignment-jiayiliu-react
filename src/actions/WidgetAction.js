import * as constants from "../constants/WidgetConstant";

export const headingNameChanged=(dispatch,widgetId,newName)=>(
    dispatch({type:constants.HEADING_NAME_CHANGED,id:widgetId,name:newName})
)

export const headingTextChanged=(dispatch,widgetId,newText)=>(
    dispatch({type:constants.HEADING_TEXT_CHANGED,id:widgetId,text:newText})
)


export const headingSizeChanged=(dispatch,widgetId,newSize)=>(
    dispatch({type:constants.HEADING_SIZE_CHANGED,id:widgetId,size:newSize})
)

export const paragraphTextChanged=(dispatch,widgetId,newText)=>{
    console.log('juju')
    dispatch({type:constants.PARAGRAPH_TEXT_CHANGED,id:widgetId,text:newText})

}


export const paragraphNameChanged=(dispatch,widgetId,newName)=>(
    dispatch({type:constants.PARAGRAPH_NAME_CHANGED,id:widgetId,name:newName})
)


export const imageTextChanged=(dispatch,widgetId,newText)=>(
    dispatch({type:constants.IMAGE_TEXT_CHANGED,id:widgetId,src:newText})
)


export const imageNameChanged=(dispatch,widgetId,newName)=>(
    dispatch({type:constants.IMAGE_NAME_CHANGED,id:widgetId,name:newName})
)

export const linkTextChanged=(dispatch,widgetId,newText)=>(
    dispatch({type:constants.LINK_TEXT_CHANGED,id:widgetId,text:newText})
)


export const linkNameChanged=(dispatch,widgetId,newName)=>(
    dispatch({type:constants.LINK_NAME_CHANGED,id:widgetId,name:newName})
)


export const linkChanged=(dispatch,widgetId,newLink)=>(
    dispatch({type:constants.LINK_CHANGED,id:widgetId,href:newLink})
)

export const listTextChanged=(dispatch,widgetId,newText)=>(
    dispatch({type:constants.LIST_TEXT_CHANGED,id:widgetId,listItems:newText})
)


export const listNameChanged=(dispatch,widgetId,newName)=>(
    dispatch({type:constants.LIST_NAME_CHANGED,id:widgetId,name:newName})
)

export const listTypeChanged=(dispatch,widgetId,newType)=>(
    dispatch({type:constants.LIST_TYPE_CHANGED,id:widgetId,listType:newType})
)


// export const findAllWidgets=dispatch=>{
//     fetch('http://localhost:8080/api/widget')
//         .then(response=>(response.json()))
//         .then(widgets=>dispatch({
//             type:constants.FIND_ALL_WIDGETS,
//             widgets:widgets
//         }))
// }

export const findAllWidgets=(dispatch,lessonId)=>{

    fetch('http://localhost:8080/api/lesson/'+lessonId+'/widget')
        .then(response=>(response.json()))
        .then(widgets=>dispatch({
            type:constants.FIND_ALL_WIDGETS,
            widgets:widgets
        }))
}

export const addWidget=dispatch=>(
    dispatch({type:constants.ADD_WIDGET})
)

export const deleteWidget=(dispatch,widgetId)=>(
    dispatch({type:constants.DELETE_WIDGET,
        id: widgetId
    })
)

export const selectWidget=(dispatch,widgetId,widgetType)=>(
    dispatch({type:constants.SELECT_WIDGET_TYPE,
        id: widgetId,
        widgetType:widgetType
    })
)

export const moveUpWidget=(dispatch,widget)=>(
    dispatch({type:constants.MOVE_UP,
        widget:widget
    })
)

export const moveDownWidget=(dispatch,widget)=>(
    dispatch({type:constants.MOVE_DOWN,
        widget:widget
    })
)

// export const save=dispatch=>(
//     dispatch({type:constants.SAVE})
// )

export const save=(dispatch,lessonId)=>(
    dispatch({
        type:constants.SAVE,
        lessonId:lessonId
    })
)


export const preview=dispatch=>(
    dispatch({type:constants.PREVIEW})
)