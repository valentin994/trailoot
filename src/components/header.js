import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

import headerStyles from './header.module.scss'

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    site{
      siteMetadata{
        title
      }
    }
  }
  `)

  return (
  <header className={headerStyles.header}>
    <nav>
      <ul className={headerStyles.navList}>
      <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
      <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li>
      <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li>
      <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li>
      <div className={headerStyles.spacer}></div>
      <li><Link to="/" ><p>TRAILOOT</p></Link></li>
      </ul>
    </nav>
  </header>
  )
}

export default Header
