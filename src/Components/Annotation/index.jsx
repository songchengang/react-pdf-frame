import React, {Component} from 'react'
import Pen from './PendingAnnotation'
import Rec from './RecommendAnnotation'


export default class Ann extends Component{
    render(){
        return(
            <div className="annotation-wrap">
                <Rec></Rec>
                <Pen></Pen>
            </div>
        )
    }
}