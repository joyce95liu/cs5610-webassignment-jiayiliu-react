import React from 'react'
import {connect} from "react-redux";
import * as actions from "../actions/WidgetAction";

const List=({ widget,preview,listNameChanged,listTextChanged,listTypeChanged})=> {
    let nameElem
    let inputElem
    let selectElem
    return (
        <div className="form-control">
            <div hidden={preview}>
                <h2> List </h2>

                <div>
                    <textarea className="form-control container-fluid"
                           placeholder="put each element in a seperate row"
                           onChange={()=>listTextChanged(widget.id,inputElem.value)}
                           value={widget.listItems}
                           ref={node=>inputElem=node}>
                </textarea>
                </div>

                <div>
                    <select className="form-control"
                            value={widget.listType}
                            onChange={()=>listTypeChanged(widget.id,selectElem.value)}
                            ref={node => selectElem = node}>
                        <option > Unordered</option>
                        <option >Ordered</option>
                    </select>
                </div>

                <input className="form-control container-fluid"
                       placeholder="Widget Name"
                       onChange={()=>listNameChanged(widget.id,nameElem.value)}
                       value={widget.name}
                       ref={node => nameElem = node}>
                </input>
            </div>
            <h3>Preview</h3>
            {widget.listType==="Unordered"&&<ul>{renderlist(widget.listItems)}</ul>}
            {widget.listType==="Ordered"&&<ol>{renderlist(widget.listItems)}</ol>}
        </div>

    )
}

const renderlist=(text)=>{
          let num=0;
           return (text.split('\n').map(
               (listitem)=>(<li key={num++}>{listitem}</li>))
                    );
                };

const dispatchToPropsMapper=dispatch=>({
    listTextChanged:(widgetId,newText)=> actions.listTextChanged(dispatch,widgetId,newText),
    listNameChanged:(widgetId,newName)=> actions.listNameChanged(dispatch,widgetId,newName),
    listTypeChanged:(widgetId,newType)=> actions.listTypeChanged(dispatch,widgetId,newType),
})

const stateToPropsMapper=state=>({
    preview:state.preview
})

const ListContainer=connect(stateToPropsMapper,dispatchToPropsMapper)(List)

export default ListContainer