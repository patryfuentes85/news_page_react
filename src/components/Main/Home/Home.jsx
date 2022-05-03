import React, { Component } from "react";
import {userContext} from '../../../context/userContext';
import newsImg from '../../../assets/news1.jpeg';
/* import Button from '@mui/material/Button'; */


class Home extends Component {
  static contextType = userContext;

  constructor(props) {
    super(props)
    
    this.state = {
      user:""
    }

  }

  login = (event) => {
    event.preventDefault();
    const user = event.target.user.value;
    this.setState({user})
    // Guardar en el contexto 
    const loginUser = this.context.login // leer el contexto .. la función login
    loginUser(user);
    }


  render() {
    return <div>
      <img class='home_img' src={newsImg} alt='news' width='100%' heigth='auto'></img>
  <form class='home_form'onSubmit={this.login}>
    <label htmlFor="user">User:</label><br/>
    <input type="text" id="user" name="user"/><br/>
    <input type="submit" value="Enviar"/>
  </form>
    {/* <Button variant="contained" onClick={create}>Create</Button>
    <Button variant="contained" onClick={newsList}>News List</Button> */}

  </div>;


  }
}

export default Home;
