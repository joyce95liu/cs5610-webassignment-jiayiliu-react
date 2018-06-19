import React from 'react'
import{connect} from 'react-redux'
import * as actions from '../actions/WidgetAction'
import HeadingContainer from './HeadingContainer'
import ParagraphContainer from './ParagraphContainer'
import ImageContainer from './ImageContainer'
import LinkContainer from './LinkContainer'
import ListContainer from './ListContainer'

const Widget=({length,index,widget,preview,deleteWidget,selectWidget,moveUpWidget, moveDownWidget})=>{
    let selectElement
    return(
        <li className="list-group-item ">
            <div hidden={preview}>
                {widget.id} {widget.widgetType}

                <select value={widget.widgetType}
                        onChange= {()=>selectWidget(widget.id,selectElement.value)}
                        ref={node=>selectElement=node}>
                    <option>Heading</option>
                    <option>List</option>
                    <option>Paragraph</option>
                    <option>Link</option>
                    <option>Image</option>
                </select>

                <button hidden={index===0} className="btn btn-warning" onClick={()=>moveUpWidget(widget)}>
                    <i className="fa fa-arrow-up"></i>
                </button>

                <button hidden={index===length-1} className ="btn btn-warning" onClick={()=>moveDownWidget(widget)}>
                    <i className="fa fa-arrow-down"></i>
                </button>

                <button className="btn btn-danger" onClick={()=>deleteWidget(widget.id)}
                    >Delete</button>
            </div>

            <div>
                {widget.widgetType==='Heading'&& <HeadingContainer widget={widget}/>}
                {widget.widgetType==='Paragraph'&&<ParagraphContainer widget={widget} />}
                {widget.widgetType==='Image'&&<ImageContainer widget={widget} />}
                {widget.widgetType==='Link'&&<LinkContainer widget={widget} />}
                {widget.widgetType==='List'&& <ListContainer widget={widget}/> }
            </div>
        </li>
    )
}

const stateToPropsMapper=state=>({
    preview:state.preview
})

const dispatchToPropsMapper=dispatch=>({
    deleteWidget:(widgetId)=> actions.deleteWidget(dispatch,widgetId),
    selectWidget:(widgetId,widgetType)=> actions. selectWidget(dispatch,widgetId,widgetType),
    moveUpWidget:(widget)=> actions.moveUpWidget(dispatch,widget),
    moveDownWidget:(widget)=> actions.moveDownWidget(dispatch,widget)
})



const WidgetContainer=connect(stateToPropsMapper,dispatchToPropsMapper)(Widget)

export default WidgetContainer