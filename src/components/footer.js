import React from "react"
import {  graphql, useStaticQuery } from "gatsby"
import * as footer from './footer.module.scss';


export default function Footer() {

   
    return (
        <footer className={footer.footer}>

            <h3>Created by  @2019</h3>

        </footer>
    );
}
