import React from "react"
import { Link, graphql } from 'gatsby';
import LayOut from "../components/LayOut";


export const query = graphql`
      query($slug:String!){
           markdownRemark(fields: {slug: {eq: $slug}}) {
             frontmatter{
                 title
                  date
           }
           html
        }
}
`

export default function Blogpost(props) {
    console.log(props);
    return (
        <LayOut>
            <h1>{props.data.markdownRemark.frontmatter.title }</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
        </LayOut>
    );
}
