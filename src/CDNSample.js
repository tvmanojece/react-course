import React from "react";
import classes from "./test1.module.css";
function CDNSample() {
  
  //const dwolla = window.dwolla;
  //https://stackoverflow.com/questions/44510474/import-external-cdn-in-react-component
  //console.log(dwolla);

 // console.log(window._.each([1,2,3], alert));

  var list = [2, 4, 6]
//Example 1. check if all numbers are even
var result = window._.every(list, function(num) { return (num % 2 === 0) });
console.log(result);

list = [1, 2, 4, 6]
//Example 2. check if all numbers are even
result = window._.every(list, function(num) { return (num % 2 === 0) });
console.log(result);
  
  return (
  <div>
   <div>Hello world 2022</div>
  <h1 className={classes.text}>H1 tag</h1>
 
  <div className="jumbotron text-center">
  <h1>My First Bootstrap Page</h1>
  <p>Resize this responsive page to see the effect!</p>
</div>

<div className="container">
  <div className="row">
    <div className="col-sm-4">
      <h3>Column 1</h3>
      <p>Lorem ipsum dolor..</p>
    </div>
    <div className="col-sm-4">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor..</p>
    </div>
    <div className="col-sm-4">
      <h3>Column 3</h3>
      <p>Lorem ipsum dolor..</p>
    </div>
  </div>
</div>

  </div>
    
    );
}

export default CDNSample;
