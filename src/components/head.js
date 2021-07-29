import React from "react"
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby'



export default function Head() {

    const data = useStaticQuery(graphql`
      query{
           site{
                siteMetadata{
                   title    
              }
         }
        
      }

`)
    return (
        <Helmet title="This is a test"/>
    );
}
