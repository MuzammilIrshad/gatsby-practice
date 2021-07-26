import React from "react"
import { Link, graphql } from 'gatsby';
import LayOut from "../components/LayOut";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types";
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

    const json = JSON.parse(props.data.contentfulBlog.body.raw);
    const RICHTEXT_OPTIONS = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => {
                console.log(children);
                return <p style={{ color: "red" }}>{children}</p>
            }
        }
    }
    console.log(query)
    console.log(props);
    return (
        <LayOut>
            <h1>{props.data.contentfulBlog.title}</h1>
            <p>{props.data.contentfulBlog.publishedDate}</p>
            {documentToReactComponents(json, RICHTEXT_OPTIONS)}
        </LayOut>
    );
}