import React from "react"
import LayOut from "../components/LayOut";
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as blogStyles from './blog.module.scss';
export default function Blog() {

    const data = useStaticQuery(graphql`
        query {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
            title
            date
        }
       fields{
           slug
       }
      }
    }
  }
}
`)
    console.log(data);

    return (
        <LayOut>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {
                    data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                    <p>{edge.node.frontmatter.date}</p>
                                </Link>
                              </li>
                                )
                    })
                }
            </ol>
            <br />

        </LayOut>
    );
}
