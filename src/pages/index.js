import React from "react";
import { Link } from 'gatsby';
import Header from "../components/header";
import LayOut from "../components/LayOut";
import Head from "../components/head";

export default function Home() {
    return (
        <LayOut>
            <Head/>
            <h1>Hello World</h1>
            <h3> Welcome to the Gatsby Practice webapp</h3>
            <p>Need a developer ? <a href='/about'>About me.</a></p>
            <p>Need a developer ? <Link to='/contact'>Contact me.</Link></p>
        </LayOut>
    );
}
