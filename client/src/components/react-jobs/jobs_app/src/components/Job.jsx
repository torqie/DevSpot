import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import '../css/Job.css'

class Job extends Component{


    state = {
        job: {}
    }

    componentDidMount(){
        let jobId = this.props.match.params.id
        axios.get(`/api/jobs/${jobId}`).then( response =>{
            console.log(response)
            this.setState({
                job: response.data
            })
        })
    }
    
    render(){
        console.log(this.state)
        return(
            <div className = "Job">
                <h1>{this.state.job.title}</h1>
                <a href = {this.state.job.company_url}><img src = {this.state.job.company_logo} width = "100" alt ="logo"/></a>
                <div dangerouslySetInnerHTML = {{__html: this.state.job.how_to_apply}}></div>
                <span dangerouslySetInnerHTML = {{__html: this.state.job.description}}></span>
            </div>
        )
    }
}

export default withRouter(Job)

