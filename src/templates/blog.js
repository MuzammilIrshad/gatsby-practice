import React from "react"
import { Link, graphql } from 'gatsby';
import LayOut from "../components/LayOut";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

/*
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
`*/

export const query = graphql`
 query($slug:String!) {
  contentfulBlog(slug: {eq: $slug}) {
    title
    publishedDate(fromNow: true)
    body {
      raw
    }
  }
}`

export default function Blogpost(props) {
    console.log(props);
    return (
        <LayOut>
            <h1>{props.data.contentfulBlog.title}</h1>
            <p>{props.data.contentfulBlog.publishedDate}</p>
            <div>{documentToReactComponents(props.data.contentfulBlog.body.raw)}</div>
        </LayOut>
    );
}
