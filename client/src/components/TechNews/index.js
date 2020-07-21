import React, { Component } from 'react'
import axios from 'axios'



export default class TechNewsFeed extends Component {
state = {
    article: {}
}


// componentDidMount() {

//     axios.get("https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&category=Technology&textFormat=Raw")
// }

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
