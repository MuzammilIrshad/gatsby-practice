import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import './header.scss';
export default function Header() {

    const data = useStaticQuery(graphql`
         query{
            site {
                siteMetadata {
                 title
              }
             }
          }
`)
    console.log(data);
    return (
        <div className='header'>
            <h1><Link to='/' className='title'>{data.site.siteMetadata.title}</Link></h1>
            <div className='nav-list'>
                <Link to='/blog' className='link' activeClassName='active-nav-item'>Blog Page</Link>
                <Link to='/contact' className='link' activeClassName='active-nav-item'>Contact Page</Link>
                <Link to='/about' className='link' activeClassName='active-nav-item'>About Page</Link>
            </div>
        </div>
    );
}
