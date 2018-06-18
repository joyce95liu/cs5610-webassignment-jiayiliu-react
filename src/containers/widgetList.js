import React,{Component} from 'react'
import * as actions from "../actions/WidgetAction";
import {connect} from "react-redux";
import WidgetContainer from "../components/WidgetContainer";


class WidgetList extends Component{
    constructor(props){
        super(props)
        this.props.findAllWidgets(this.props.match.params.lessonId)
    }

  componentWillReceiveProps(newprops){
        if(newprops.match.params.lessonId!==this.props.match.params.lessonId){
            this.props.findAllWidgets(newprops.match.params.lessonId);
        }
  }

    render(){
        return(

            <div>
                <h1>Widget List{this.props.match.params.lessonId}</h1>

                {/*<h2>  {this.props.widgets.length}</h2>*/}
                <button hidden={this.props.previewMode} onClick={()=>this.props.save(this.props.match.params.lessonId)}>Save</button>
                <button onClick={this.props.preview}>Preview</button>

                <ul className="list-group ">
                    { this.props.widgets.map(widget=>(
                        <WidgetContainer widget={widget}
                                         preview={this.props.previewMode}
                                         key={widget.id}/>
                    ))}
                </ul>
                <button onClick={this.props.addWidget}
                >Add Widget</button>
                </div>
            
        )
    }
}




let idAutoIncrement=3


const mapStateToProps = state => ({
    widgets: state.widgets,
    previewMode:state.preview
})

const dispatcherToPropsMapper =dispatch=>({
    findAllWidgets:(lessonId)=>actions.findAllWidgets(dispatch,lessonId),
    addWidget:()=>actions.addWidget(dispatch),
   // save:()=>actions.save(dispatch),
    save:(lessonId)=>actions.save(dispatch,lessonId),
    preview:()=>actions.preview(dispatch)
})

const App=connect(mapStateToProps,dispatcherToPropsMapper)(WidgetList)

export default App