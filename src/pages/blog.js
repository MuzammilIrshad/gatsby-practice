import React from "react"
import LayOut from "../components/LayOut";
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as blogStyles from './blog.module.scss';



export default function Blog() {

  /*  const data = useStaticQuery(graphql`
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
`)*/
    const data = useStaticQuery(graphql`
    query {
  allContentfulBlog(sort: {fields: publishedDate, order: ASC}) {
    edges {
      node {
        title
        slug
        publishedDate(fromNow: true)
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
                    data.allContentfulBlog.edges.map((edge) => {
                        return (
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                    <p>{edge.node.publishedDate}</p>
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
