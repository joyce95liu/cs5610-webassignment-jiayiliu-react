import React from 'react'
import {connect} from "react-redux";
import * as actions from "../actions/WidgetAction";
import WidgetContainer from "./WidgetContainer";

const Heading=({ widget,preview,headingTextChanged,headingSizeChanged,headingNameChanged})=> {
    let selectElem
    let inputElem
    let nameElem
    return (
        <div className="form-control">
            <div hidden={preview}>
                <h2> Heading {widget.size}</h2>
                <div>
                <input className="form-control container-fluid"
                    placeholder="Heading Text"
                    onChange={()=>headingTextChanged(widget.id,inputElem.value)}
                       value={widget.text}
                       ref={node=>inputElem=node}/>
                </div>
                <div>
                <select className="form-control"
                    onChange={()=>headingSizeChanged(widget.id,selectElem.value)}
                        value={widget.size}
                        ref={node => selectElem = node}>
                    <option value='1'> Heading1</option>
                    <option value='2'>Heading2</option>
                    <option value='3'>Heading3</option>
                </select>
                </div>
                <input className="form-control container-fluid"
                    placeholder="Widget Name"
                    onChange={()=>headingNameChanged(widget.id,nameElem.value)}
                       value={widget.name}
                       ref={node=>nameElem=node}/>

            </div>
            <h3>Preview</h3>
            {widget.size==1&&<h1>{widget.text}</h1>}
            {widget.size==2&&<h2>{widget.text}</h2>}
            {widget.size==3&&<h3>{widget.text}</h3>}
        </div>
    )
}
const dispatchToPropsMapper=dispatch=>({

    headingTextChanged:(widgetId,newText)=>
        actions.headingTextChanged(dispatch,widgetId,newText),

    headingSizeChanged:(widgetId,newSize)=>
        actions.headingSizeChanged(dispatch,widgetId,newSize),

    headingNameChanged:(widgetId,newName)=>
        actions.headingNameChanged(dispatch,widgetId,newName)

})

const stateToPropsMapper=state=>({
    preview:state.preview
})



const HeadingContainer=connect(stateToPropsMapper,dispatchToPropsMapper)(Heading)


export default HeadingContainer