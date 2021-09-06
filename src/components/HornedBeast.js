import React, { Component } from 'react'

 class HornedBeast extends Component {
    render() {
        return (
            <div>
               <h2>{ this.props.title}</h2> 
               <img src={this.props.image_url} alt='img' title={this.props.title}/>
               <p>{ this.props.description}</p>
               <h4>{ this.props.keyword}</h4>
               <h4>{ this.props.horns}</h4>
               
            </div>
        )
    }
}

export default HornedBeast
