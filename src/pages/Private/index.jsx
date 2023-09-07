// import React from "react";
// import { logout } from "../../commonjs/auth";
import NavGauche from "./common/NavGauche";
import NavBar from "./common/NavBar";
import { Route, Routes } from "react-router-dom";
import Layout from "./common/Layout";
import Home from "./Home";
import Category from "./Category";
import NoMatch from "../NoMatch";
import Question from './Question' ;

const Private = () => {
  return (
    <>
          <NavGauche />

      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">

      <NavBar />


        {/* container */}
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home/>} />
          <Route path="/category" element={<Category/>} />
          <Route path="/question"  element={<Question/>}  />
          <Route  path="*" element={<NoMatch/>} />
          

        </Routes>


      </div>
    </>
  );
};

export default Private;
