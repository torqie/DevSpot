//importing React and other modules
import React , { Component } from 'react'
import { Switch , Route } from 'react-router-dom'
import JobListItem from './JobListItem'
import Job from './Job'
import axios from 'axios'
import '../css/App.css'
import '../css/Jobs.css'


/**Job component contains job list items */
class Jobs extends Component{

    //initial state is empty
    state = {
        jobs : []
    }

    /**
     * Asynchronously making a axios call when the component mounts to fetch job data from server on port 3001
     */
    async componentDidMount(){
        let response  = await axios.get('/api/jobs')
        // Setting the state to contain data from response. jobs array is noe filled with response data
        this.setState({
            jobs : response.data
        })
    }

    /**
     * renders job list components with data from state.
     */
    render(){
        let jobsJSX =this.state.jobs.map((job, index) =>{
            return (
                <div className = "Jobs" key ={index}>
                    <JobListItem id = {job.id} job = {job.title} company = {job.company} type = {job.type} timestamp = {job.created_at}/>
                </div>
            )
        })
        return(
            <div>
                <div className = "App">
                    <header className = "App-header">
                        <h1 className = "App-title">Job's in Atlanta</h1>
                        <p className = "App-subtitle">Click to explore jobs!!</p>
                    </header>
                    
                </div>

                    <Switch>
                        <Route exact path = "/jobs" render = {()=>jobsJSX}/>
                        <Route path = "/jobs/:id" component = {Job}/>
                    </Switch>
                
            </div>
        )
    }
}

export default Jobs