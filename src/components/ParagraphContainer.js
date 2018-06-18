import React from 'react'
import {connect} from "react-redux";
import * as actions from "../actions/WidgetAction";
import WidgetContainer from "./WidgetContainer";

const Paragraph=({ widget,preview,paragraphNameChanged,paragraphTextChanged})=> {
    let selectElem
    let inputElem
    return (
        <div className="form-control">
            <div hidden={preview}>
                <h2> Paragraph </h2>
                {/*{widget.size}*/}
                <textarea className="form-control "
                    placeholder="text"
                    onChange={()=>paragraphTextChanged(widget.id,selectElem.value)}
                        value={widget.text}
                        ref={node => selectElem = node}>
                </textarea>
                <div>
                <input className="form-control container-fluid"
                    placeholder="Widget Name"
                    onChange={()=>paragraphNameChanged(widget.id,inputElem.value)}
                                   value={widget.name}
                                   ref={node=>inputElem=node}/>
                </div>
            </div>
            <h3>Preview</h3>
            <h1>{widget.text}</h1>
            </div>

    )
}
const dispatchToPropsMapper=dispatch=>({

    paragraphTextChanged:(widgetId,newText)=>
        actions.paragraphTextChanged(dispatch,widgetId,newText),

    paragraphNameChanged:(widgetId,newName)=>
        actions.paragraphNameChanged(dispatch,widgetId,newName),

})

const stateToPropsMapper=state=>({
    preview:state.preview
})


const ParagraphContainer=connect(stateToPropsMapper,dispatchToPropsMapper)(Paragraph)


export default ParagraphContainer