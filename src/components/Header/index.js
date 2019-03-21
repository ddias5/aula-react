import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './style.css'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className='header'>
            <Link to="/">Notas</Link>
            <Link to="/about">Sobre</Link>
        </div>
      </div>
    )
  }
}
