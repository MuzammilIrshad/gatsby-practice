import React from "react"
import {  graphql, useStaticQuery } from "gatsby"
import * as footer from './footer.module.scss';


export default function Footer() {

    const data = useStaticQuery(graphql`
         query{
            site {
                siteMetadata {
                 author
              }
             }
          }
`)
    console.log(data);
    return (
        <footer className={footer.footer}>

            <h3>Created by {data.site.siteMetadata.author}, @2019</h3>

        </footer>
    );
}
