import React, { Component } from 'react';

class Episode8 extends Component {
    constructor(){
        super()
        this.state ={
            title: '',
            releaseDate: '',
            rating: '',
            plot: '',
            img: '',
        }
    }
async componentDidMount(){

    const url = `http://www.omdbapi.com/?apikey=988abcfb&t=star+wars+episode+viii`
    const response = await fetch(url)
    const data = await response.json()
    this.setState({
        title: data.Title,
        releaseDate: data.Released,
        rating: data.Rated,
        plot: data.Plot,
        img: data.Poster,

    })
    console.log(this.state.title)
}

    render() {
        return (
            <div className="episode">
                <div className="bigInfo">
                <h1>{this.state.title}</h1>
                <img src={this.state.img} alt=""/>
                </div>
                <div className="infoHolder">
                <div className="infoText">
                <h3>Released:</h3> {this.state.releaseDate} <br/>
                <h3>Rated:</h3>{this.state.rating} <br/>
                <h3>Plot:</h3>{this.state.plot} <br/>
                </div>
                </div>


                
            </div>
        );
    }
}

export default Episode8;