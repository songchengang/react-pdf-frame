import React, {Component} from 'react'
import './index.css'

export default class Tool extends Component{
    render(){
        return(
            <div className="tool-wrap">
                <div className="tool-button-wrap">
                    <button className="save-btn">
                        <i className="save-i"></i>
                    </button>
                    <button className="back-btn">                        
                        <i className="back-i"></i>
                    </button>
                    <button className="ahead-btn">
                        <i className="ahead-i"></i>
                    </button>
                    <button>Redact all</button>
                    <button>Redact</button>
                    <button>Name</button>
                    <button>Location</button>
                    <button>Phone</button>
                    <button>Pending</button>
                </div>
                <div className="tool-page-wrap">
                    <input className="tool-page-input"></input>
                    <span> / 10</span>
                </div>
                <div className="tool-zoom-wrap">
                    <button>-</button>
                    <button>+</button>
                    <input className="tool-zoom-input"></input>
                </div>
            </div>
        )
    }
}