import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'
import '../vendor/font/monosocialiconsfont'
import '../vendor/bootstrap/css/bootstrap.min'
import '../css/main.css'
import '../css/logo.css'

import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <header className="col-12">
          <div className="row d-flex flex-row-reverse align-items-center">

              <div className="logo col-3 col-sm-4 d-flex justify-content-end align-items-baseline">
                <svg viewBox="0 0 170 100" className="col-sm-4">
                  <use xlinkHref="#svg-logo" />
                </svg>
                <svg viewBox="0 0 240 100" className="col-sm-5 hidden-xs-down">
                  <use xlinkHref="#svg-text" />
                </svg>
              </div>

              <div className="interaction-icons col-9 col-sm-8">
                <a className="symbol" data-content="&#xe286;" href="http://twitter.com/wrenishly"><span className="sr-only">Twitter</span></a>
                <a className="symbol" data-content="&#xe237;" href="http://github.com/endlist"><span className="sr-only">Github</span></a>
                <a className="symbol" data-content="&#xe252;" href="https://www.linkedin.com/in/endlist"><span className="sr-only">LinkedIn</span></a>
                <a className="symbol" data-content="&#xe224;" href="mailto:self&#64;endlist&#46;io"><span className="sr-only">Email</span></a>
              </div>
              <picture>
                <source
                  media="(min-width: 1290px)"
                  srcSet="assets/img/portrait1290.png"
                  />
                <source
                  media="(min-width: 720px)"
                  srcSet="assets/img/portrait720.png"
                  />
                  <img src="assets/img/portrait.png" className="header-image img-fluid" alt="self portrait" />
              </picture>
            </div>

            <nav className="row nav sticky-top">
              <a href="#" className="nav-link active">home</a>
              <a href="#work" className="nav-link">work</a>
              <a href="#posts" className="nav-link">posts</a>
            </nav>
        </header>

        <section className="intro col-12">
          <div className="intro-content text-center rounded-bottom">
          <h2 className="font-glass-antiqua text-lowercase">Web Application Engineer</h2>
          <p className="text-lowercase">JavaScript Specialist.  CSS Enthusiast.  TDD Adherent.  Design & Illustration Initiate.</p>
          </div>
        </section>

        {this.props.children}

        <footer className="row">
          <span className="col-7"><a href="http://www.vim.org/">&#10084; Vim</a></span>
          <span className="col-5 text-right text-capitalize">Powered by green tea.</span>
        </footer>

        <svg className="defs-only" xmlns="http://www.w3.org/2000/svg">
          <defs>
          <svg id="svg-logo" width="170" height="100">
            <g className="logo-bracket bracket-left">
              <line x1="35" x2="10" y1="10" y2="50" />
              <line x1="10" x2="35" y1="50" y2="90" />
            </g>
            <line x1="60" x2="50" y1="5" y2="95" />
            <text x="70" y="93">li</text>
            <g className="logo-bracket bracket-right">
              <line x1="135" x2="160" y1="10" y2="50" />
              <line x1="160" x2="135" y1="50" y2="90" />
            </g>
          </svg>
          <svg id="svg-text" width="240" height="100">
            <text x="0" y="93">wren</text>
          </svg>
          </defs>
        </svg>

      </div>
    )
  },
})
