import React, { useState } from "react";
import classes from "./Test.module.css";
import ReactTooltip from "react-tooltip";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import logo from "./images/the-lotus-temple.jpg";
import logo2 from "./images/seaimage.png";
function TestingCSSSample() {

    const [flag, setflag] = useState(false);

    return (
    <div className={classes.main}>
      <div className={classes.header}>
        {" "}
        <h2>Test page</h2>
      </div>
      <div className={classes.ulcontainer}>
        <ul>
          <ReactTooltip backgroundColor="white" textColor="black" />
          <li data-tip="This is link1"><a href="#">Link1</a></li>
          <li data-tip="This is link2"><a href="#">Link2</a></li>
          <li data-tip="This is link3"><a href="#">Link3</a></li>
        </ul>
      </div>
      <div style={{ display: "block" }}>
        <div>
        <img className={classes.img} src={logo} alt="logo" />
        </div>
        <div className={classes.container1}>
          <Component1 />
        </div>
        <div className={classes.container1}>
          <Component2 />
        </div>
        <div className={classes.container1}>
          <Component3 />
        </div>
        <div>
        {flag ? (<div className={classes.placeholder}><Component3 /></div>) : <div />}
        </div>
        <div style={{ clear: "both" }}></div>
        <div className={classes.container2}>
          <Component1 />
        </div>
        <div className={classes.container2}>
          <Component2 />
        </div>
        <div className={classes.container2}>
          <Component3 />
        </div>
      </div>
      <div style={{ clear: "both" }}></div>
      <div className={classes.text}>
        
        <h1 onMouseEnter={() => {setflag(true)}} onMouseLeave={() => {setflag(false)}}>Hello Hover on me</h1>
      </div>

      <div className={classes.logo2}><img  src={logo2}/></div>
    </div>
  );
}

export default TestingCSSSample;
