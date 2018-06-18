import React from 'react'
import {connect} from "react-redux";
import * as actions from "../actions/WidgetAction";
import WidgetContainer from "./WidgetContainer";

const Link=({ widget,preview,linkNameChanged,linkTextChanged,linkChanged})=> {
    let nameElem
    let inputElem
    let linkElem
    return (
        <div className="form-control">
            <div hidden={preview}>
                <h2> Link </h2>
                {/*{widget.size}*/}
                <div>
                    <input className="form-control container-fluid"
                           placeholder="Link URL"
                        onChange={()=>linkChanged(widget.id,linkElem.value)}
                           value={widget.link}
                           ref={node=>linkElem=node}/>

                </div>
                <div>
                    <input className="form-control container-fluid"
                           placeholder="Link Text"
                        onChange={()=>linkTextChanged(widget.id,inputElem.value)}
                           value={widget.text}
                           ref={node=>inputElem=node}/>
                </div>
                <input className="form-control container-fluid"
                       placeholder="Widget Name"
                    onChange={()=>linkNameChanged(widget.id,nameElem.value)}
                       value={widget.name}
                       ref={node => nameElem = node}>
                </input>
            </div>
            <h3>Preview</h3>
            <a href={widget.link}>{widget.text}</a>
        </div>

    )
}
const dispatchToPropsMapper=dispatch=>({

    linkTextChanged:(widgetId,newText)=>
        actions.linkTextChanged(dispatch,widgetId,newText),

    linkNameChanged:(widgetId,newName)=>
        actions.linkNameChanged(dispatch,widgetId,newName),

    linkChanged:(widgetId,newLink)=>
        actions.linkChanged(dispatch,widgetId,newLink),

})

const stateToPropsMapper=state=>({
    preview:state.preview
})


const LinkContainer=connect(stateToPropsMapper,dispatchToPropsMapper)(Link)


export default LinkContainer