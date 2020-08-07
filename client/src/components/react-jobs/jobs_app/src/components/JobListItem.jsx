//importing react and other modules

import React , { Component } from  'react'
import { withRouter } from 'react-router-dom'
import "../css/JobsListItem.css"


/**c
 * omponent for listin job items 
 * */
class JobsListingItem extends Component{
    
    /**
     * Function handles click events on each item. 
     * using the histiry prop that is attached from withRouter (higher order component)
     * it changes the url to the location where the job details will be rendered.
     */
    
    clickHandler =()=>{
       this.props.history.push(`/jobs/${this.props.id}`)
    }

    /**Renders detail of the list item to the Virtual DOM
     * 
     * --> props are passed in from within the Jobs compoent
     */
    render(){
        console.log(this.props)
        return(
            <div onClick = {()=>{this.clickHandler()}} className = "JobListItem">
                <div className = "left">
                    <b>{this.props.job}</b>
                    <div>{this.props.company}</div>
                </div>
                <div className = "right">
                    <b>{this.props.type}</b>
                    <div>{this.props.timestamp}</div>
                </div> 
            </div>
        )
    }
    
}

export default withRouter(JobsListingItem)