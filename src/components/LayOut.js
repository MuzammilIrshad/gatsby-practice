import React from "react"
import Header from "../components/header";
import Footer from "../components/footer";
import '../styles/index.scss';
import * as layoutStyles from './layout.module.scss';
export default function LayOut(props) {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
            <Header />
                {props.children}
            </div>
                <Footer />
                
        </div>
    );
}
