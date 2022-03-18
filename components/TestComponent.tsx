// import React, { useEffect, useState } from "react";

// const TestComponent = ({ prop1 }) => {
//   const [state1, setState1] = useState(prop1);

//   useEffect(() => {
//     let functionRes = null;

//     const getData = async () => {
    
//         //call asynchronus function inside another function inside useEffect
//         //UseEffect doesn't allow for direct async funtion to avoid race condition
//       functionRes = await callTestFunction();
//       console.log("output", functionRes);

//       await setState1(functionRes);
//     };

//     getData();
//   }, []);

//   function callTestFunction() {
//     return "some value";
//   }

//   return (
//     <div>
//       <h1>{state1}</h1>
//     </div>
//   );
// };

// export default TestComponent;





// const func1 = () => {
//     ...
//     return databaseConnection;
// }
 
// const func2 = () => {
//     const database = func1();
//     ...
//     return valueFromDatabase;
// }
 
// const func3 = () => {
//     const valueFromDatabase = func2();
//     const database = func1();
//     ...
//     return calculationBasedOnDatabaseData;
// }