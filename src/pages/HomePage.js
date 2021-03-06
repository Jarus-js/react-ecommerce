import React, { Fragment } from "react";
import { ProductConsumer } from "../context/contexts";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Services from "../components/Services";
import Featured from "../components/Featured";

const HomePage = () => {
  return (
    <Fragment>
      <ProductConsumer>
        {value => {
          return (
            <Fragment>
              <Hero>
                <Link
                  to="/products"
                  className="main-link"
                  style={{ marginTop: "10rem" }}
                >
                  Our Products
                </Link>
              </Hero>
              <Services />
              <Featured />
            </Fragment>
          );
        }}
      </ProductConsumer>
    </Fragment>
  );
};

export default HomePage;
