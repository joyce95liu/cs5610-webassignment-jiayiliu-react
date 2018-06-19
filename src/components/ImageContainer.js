import React from 'react'
import {connect} from "react-redux";
import * as actions from "../actions/WidgetAction";

const Image=({ widget,preview,imageNameChanged,imageTextChanged})=> {
    let nameElem
    let inputElem
    return (
        <div className="form-control">
            <div hidden={preview}>
                <h2> Image </h2>
                {/*{widget.size}*/}
                <div>
                <input className="form-control container-fluid"
                       placeholder="Image URL"
                                onChange={()=>imageTextChanged(widget.id,inputElem.value)}
                                value={widget.src}
                                ref={node=>inputElem=node}/>
                </div>
                <input className="form-control container-fluid"
                       placeholder="Widget Name"
                             onChange={()=>imageNameChanged(widget.id,nameElem.value)}
                             value={widget.name}
                             ref={node => nameElem = node}>
            </input>
            </div>
            <h3>Preview</h3>
            <img  src={widget.src}/>
        </div>

    )
}
const dispatchToPropsMapper=dispatch=>({
    imageTextChanged:(widgetId,newText)=> actions.imageTextChanged(dispatch,widgetId,newText),
    imageNameChanged:(widgetId,newName)=> actions.imageNameChanged(dispatch,widgetId,newName),

})

const stateToPropsMapper=state=>({
    preview:state.preview
})

const ImageContainer=connect(stateToPropsMapper,dispatchToPropsMapper)(Image)

export default ImageContainer