import React, { Component } from "react";
import { Navigate } from 'react-router-dom';

class Form extends Component {

  constructor(props) {
    super(props)

    this.state = {
      redirect: false
    }
  }

  createNews = (e) =>{

    e.preventDefault();

    const lead_paragraph = e.target.lead.value;
    const abstract = e.target.abst.value;
    const image = e.target.image.value;


    // crear producto
    this.props.createNews(lead_paragraph,abstract,image)
    this.setState({redirect: true})

  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Navigate to='/list'/>;    
    }
    return ( 
      <form onSubmit={this.createNews}>
        <label htmlFor="lead">Lead Paragraph:</label>
        <input type="text" name="lead"/> <br/>
        <label htmlFor="abst">Abstract:</label>
        <input type="text" name="abst"/><br/>
        <label htmlFor="image">Url image:</label>
        <input type="url" name="image" /><br/>
        <button className="btn" type="submit">Enviar</button>
      </form>
    )
  }
}

export default Form;
