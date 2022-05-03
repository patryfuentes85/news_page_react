import React, { Component } from 'react'
import Home from './Home';
import Form from './Home/Form'
import List from './Home/ListNews'
import { Route, Routes } from 'react-router-dom'

export class Main extends Component {
  render() {
    return (
      <div>
          <h1>BRIDGE NEWS</h1>
          <p>One of the Best News Website of the World </p>
          <Routes>
           <Route element={<Home/>} path='/home'/>
           <Route element={<Form/>} path='/form'/>
           <Route element={<List/>} path='/list'/>
          </Routes>

          
      </div>
    )
  }
}

export default Main