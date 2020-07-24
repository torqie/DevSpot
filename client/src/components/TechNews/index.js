import React, { Component } from 'react'
import axios from 'axios'



export default class TechNewsFeed extends Component {
state = {
    article: {}
}

componentDidMount() {

    axios.get("https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&category=Technology&rapidapi-key=6d36da78a6msha238c0ff02538fdp165a31jsn530d7e5b5c6e")
    .then(response => {
        this.setState({article: response.data})
    }).catch (error => {
        console.log("Error getting news article: ", error)
    })
    console.log(response.data)
}

    render() {
        return (
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            
            </Card>
        )
    }
}
