import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <StaticImage alt="lol Teemo" src="../images/Teemo_0.jpeg" />
        </Layout>
    );
};

export default IndexPage;
