import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class Header extends Component {
  render() {
    return (
      <div>
        <div>
            <Link to="/">Notas</Link>
            <Link to="/about">Sobre</Link>
        </div>
      </div>
    )
  }
}
