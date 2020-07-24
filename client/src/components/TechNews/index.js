import React, { Component } from 'react'
import axios from 'axios'
import { Card, Carousel } from 'antd'
const { Meta } = Card



export default class TechNewsFeed extends Component {
    state = {
    }

    componentDidMount() {
        axios.get("https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&category=Technology&rapidapi-key=6d36da78a6msha238c0ff02538fdp165a31jsn530d7e5b5c6e")
            .then(response => {
                this.setState({ article: response.data.value })
            }).catch(error => {
                console.log("Error getting news article: ", error)
            })
    }

    render() {
        const article = this.state.article;
        console.log("articles", this.state.article)
        return (
            <Carousel autoplay>
            {this.state.article ?
                this.state.article.map(news => {
                    return (<Card
                        hoverable="true"
                        cover={<img alt="example" src={news.image.thumbnail.contentUrl} />}
                        theme="dark"
                    >
                        <Meta title={<a href={news.url}>{news.name} </a>} description={news.description} />
                    </Card>)
                })

                : null}
                </Carousel>
        )
    }
}
