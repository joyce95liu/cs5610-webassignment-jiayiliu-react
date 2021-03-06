import * as constants from "../constants/WidgetConstant"

export const widgetReducer=(state={widgets:[],preview:false},action)=>{
    Array.prototype.move
        = function (from, to) {
        this.splice(to, 0, this.splice(from, 1)[0]);
    };

    let newState
    let index
    switch(action.type) {

        case constants.MOVE_UP:
            index= state.widgets.indexOf(action.widget);
            state.widgets.move(index, index - 1);
            return {widgets:state.widgets.splice(0)}

        case constants.MOVE_DOWN:
             index = state.widgets.indexOf(action.widget);
            state.widgets.move(index, index + 1);
            return {widgets:state.widgets.splice(0)}

        case constants.PREVIEW:
            return {
                widgets:state.widgets,
                preview:!state.preview
            }

        case constants.HEADING_TEXT_CHANGED:
            return {
                widgets:state.widgets.map(widget=>{
                    if(widget.id===action.id){
                        widget.text=action.text
                    }
                    return Object.assign({},widget)
                })
            }

        case constants.HEADING_SIZE_CHANGED:
            return {
                widgets:state.widgets.map(widget=>{
                    if(widget.id===action.id){
                        widget.size=action.size
                    }
                    return Object.assign({},widget)
                })
            }

        case constants.HEADING_NAME_CHANGED:
            return {
                widgets:state.widgets.map(widget=>{
                    if(widget.id===action.id){
                        widget.name=action.name
                    }
                    return Object.assign({},widget)
                })
            }


        case constants.PARAGRAPH_NAME_CHANGED:
            return {
                widgets:state.widgets.map(widget=>{
                    if(widget.id===action.id){
                        widget.name=action.name
                    }
                    return Object.assign({},widget)
                })
            }

        case constants.IMAGE_TEXT_CHANGED:
            return {
                widgets:state.widgets.map(widget=>{
                    if(widget.id===action.id){
                        widget.src=action.src
                    }
                    return Object.assign({},widget)
                })
            }


        case constants.IMAGE_NAME_CHANGED:
            return {
                widgets:state.widgets.map(widget=>{
                    if(widget.id===action.id){
                        widget.name=action.name
                    }
                    return Object.assign({},widget)
                })
            }

        case constants.PARAGRAPH_TEXT_CHANGED:

            return {
                widgets:state.widgets.map(widget=>{
                    if(widget.id===action.id){
                        widget.text=action.text
                    }
                    return Object.assign({},widget)
                })
            }

        case constants.LINK_TEXT_CHANGED:
            return {
                widgets:state.widgets.map(widget=>{
                    if(widget.id===action.id){
                        widget.text=action.text
                    }
                    return Object.assign({},widget)
                })
            }


        case constants.LINK_NAME_CHANGED:
            return {
                widgets:state.widgets.map(widget=>{
                    if(widget.id===action.id){
                        widget.name=action.name
                    }
                    return Object.assign({},widget)
                })
            }


        case constants.LINK_CHANGED:
            return {
                widgets:state.widgets.map(widget=>{
                    if(widget.id===action.id){
                        widget.href=action.href
                    }
                    return Object.assign({},widget)
                })
            }



        case constants.LIST_TEXT_CHANGED:
            return {
                widgets:state.widgets.map(widget=>{
                    if(widget.id===action.id){
                        widget.listItems=action.listItems
                    }
                    return Object.assign({},widget)
                })
            }


        case constants.LIST_NAME_CHANGED:
            return {
                widgets:state.widgets.map(widget=>{
                    if(widget.id===action.id){
                        widget.name=action.name
                    }
                    return Object.assign({},widget)
                })
            }

        case constants.LIST_TYPE_CHANGED:
            return {
                widgets:state.widgets.map(widget=>{
                    if(widget.id===action.id){
                        widget.listType=action.listType
                    }
                    return Object.assign({},widget)
                })
            }



        case constants.SELECT_WIDGET_TYPE:
            let newState={
                widgets:state.widgets.filter((widget)=>{
                    if(widget.id===action.id){
                        widget.widgetType=action.widgetType
                    }
                    return true;
                })
            }
            return JSON.parse(JSON.stringify(newState))



        // case constants.SAVE:
        //     fetch('http://localhost:8080/api/widget/save', {
        //         method: 'post',
        //         body: JSON.stringify(state.widgets),
        //         headers: {
        //             'content-type': 'application/json'
        //         }
        //     })
        //     return state

        case constants.SAVE:

            fetch('http://localhost:8080/api/lesson/'+action.lessonId+'/widget/save', {
                method: 'post',
                body: JSON.stringify(state.widgets),
                headers: {
                    'content-type': 'application/json'
                }
            })
            return state


        case constants.FIND_ALL_WIDGETS:
            newState=Object.assign({},state)
            newState.widgets=action.widgets
            return newState

        case constants.DELETE_WIDGET:

            return {
                widgets: state.widgets.filter(widget => (
                    widget.id !== action.id
                ))
            }

        case constants.ADD_WIDGET:

            return {
                widgets:[
                    ...state.widgets,
                    {id:state.widgets.length+1,
                        name:'',
                        text:'',
                        widgetType:'Heading',
                        href:'',
                        src:'',
                        listType:'Ordered',
                        listItems:'',
                        size:'1'}
                ]
            }
        default:
            return state
    }
}