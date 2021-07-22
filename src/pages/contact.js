import React from "react"
import { Link } from 'gatsby';
import LayOut from "../components/LayOut";
export default function Contact() {
    return (
        <LayOut>
          
            <h1>Contact Details</h1>
            <h3>I am from Pakistan. My City name is Quetta.</h3>
            <Link to='/'>GitHub account</Link>
            <br />
        </LayOut>
    );
}
