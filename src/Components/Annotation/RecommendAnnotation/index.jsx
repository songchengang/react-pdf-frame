import React, {Component} from 'react'
import './index.css'

export default class Rec extends Component{
    constructor() {
        super();
        this.state = {
            activeCollapse: 'name'
        };
    }

    handleExpandCollaps = (name) => {
        if (this.state.activeCollapse === name) {
            //If collapsiable is already visible and clicked on same then this will hide it
            this.setState({ activeCollapse: '' })
        } else {
            //To show collapsiable
            this.setState({ activeCollapse: name })
        }
    }

    moreInfoClick = (e) => {
        e.stopPropagation();
        console.log("clicked");
    }

    render(){
        return(
            <div className="recommend-wrap">
                <div className="sidebar-nav">
                    <div className="sidebar-nav-menu">
                        <div className={`sidebar-nav-menu-item ${this.state.activeCollapse === "name" ? 'item-active' : ''}`} onClick={() => this.handleExpandCollaps("name")} data-id="name" >
                            <div className="sidebar-nav-menu-item-head">
                                <span className="sidebar-nav-menu-item-head-title">Name annotation</span>
                                <span className="sidebar-nav-menu-item-head-help">
                                    <button type="button" className="btn-help" onClick={this.moreInfoClick}>View more</button>
                                </span>
                            </div>
                            <div className="sidebar-nav-menu-item-body">Name annotation area ...</div>
                        </div>

                        <div className={`sidebar-nav-menu-item ${this.state.activeCollapse === "location" ? 'item-active' : ''}`} onClick={() => this.handleExpandCollaps("location")} data-id="location">
                            <div className="sidebar-nav-menu-item-head">
                                <span className="sidebar-nav-menu-item-head-title">Location annotation</span>
                                <span className="sidebar-nav-menu-item-head-help">
                                    <button type="button" className="btn-help" onClick={this.moreInfoClick}>View more</button>
                                </span>
                            </div>
                            <div className="sidebar-nav-menu-item-body">Location annotation area ...</div>
                        </div>

                        <div className={`sidebar-nav-menu-item ${this.state.activeCollapse === "phone" ? 'item-active' : ''}`} onClick={() => this.handleExpandCollaps("phone")} data-id="phone">
                            <div className="sidebar-nav-menu-item-head">
                                <span className="sidebar-nav-menu-item-head-title">Phone annotaton</span>
                                <span className="sidebar-nav-menu-item-head-help">
                                    <button type="button" className="btn-help" onClick={this.moreInfoClick}>View more</button>
                                </span>
                            </div>
                            <div className="sidebar-nav-menu-item-body">Phone annotaton area ...</div>
                        </div>

                        <div className={`sidebar-nav-menu-item ${this.state.activeCollapse === "all" ? 'item-active' : ''}`} onClick={() => this.handleExpandCollaps("all")} data-id="all">
                            <div className="sidebar-nav-menu-item-head">
                                <span className="sidebar-nav-menu-item-head-title">All annotaton</span>
                                <span className="sidebar-nav-menu-item-head-help">
                                    <button type="button" className="btn-help" onClick={this.moreInfoClick}>View more</button>
                                </span>
                            </div>
                            <div className="sidebar-nav-menu-item-body">All annotaton area ...</div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}