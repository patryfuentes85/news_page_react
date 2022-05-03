import React, { Component } from "react";
import axios from 'axios';
import { Card, CardMedia } from '@mui/material';

class ListNews extends Component {

  constructor(props) {
    super(props);
    this.state = { 
        news: this.props.defaultList
    }
    // Event binding (Bindear eventos)
    console.log('CONSTRUCTOR')
}

async componentDidMount(){
/// falta meter la apiKey en dotenv ///
    const resp = await axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=travel&api-key=3nTxlA55GJ7UZSq3OD0rAagX0MWyGjI5');
    const data = await resp.data.response.docs;
    const fiveNews = data.slice(0,5)
    console.log(fiveNews);

    this.setState({
        news: fiveNews
    })
}

handlerResetNews = () => {
    this.setState({
        news: []
    })
}


render() {
    console.log('Render');
 /*    const formNews = this.state.news.formNews
       const myNews = [...this.state.news,formNews] */
    
    return (
        <div class='big-box'>
            <h1>Travel News</h1>
            {
              this.state.news.map(item => 
            <div class='box-news'>
            <Card sx={{ width: 670, margin:1 }}>
            <CardMedia component="img" height="280" image={`https://static01.nyt.com/${item.multimedia[0].url}`} alt="img"/>
                <a href={item.web_url} alt="imagen">Read More..</a>
                <h3>{item.lead_paragraph}</h3>
                <h5>{item.abstract}</h5>
                <p>{item.source}</p>
            </Card>
            </div>
               )
            }
            <button onClick={this.handlerResetNews}>Reset List</button>
        </div>        
    );
}
}



ListNews.defaultProps = {
    defaultList: []
}

export default ListNews;