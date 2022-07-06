import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'
import Heading from './Heading'
import Para from './Para'
import OrderedList from './OrderedList'
import Greeting from './Greeting'
import fighter3, { fighter1, fighter2, fighter4 } from './Imp_Exp_Example';


/**----------------------------Hello World------------------------------- */


// Display Hello World In React Js
/*
    ReactDom.render method takes 3 paramaters
    ReactDOM.render("What to show,"Where to show","Callback Function")
    So we are passing html elements (JSX) in what to show param then seprate them
    with comma and the next paramater is document.getElementById("root")
    We had passed root inside that method because it will display Hello World
    in that root id.
    Now root id is in index.html and we have  div tag with id = root

    index.html
         <div id="root"></div>

    So our output will be displayed in that div.
 */


// ReactDOM.render(
//   <h1>Hello World..! </h1>,
//   document.getElementById("root")
// );

/**------------------------------JSX------------------------------------- */

/**
 *    JSX In React js
 *
 *    JSX Stands for JavaScript XML
 *
 *    JSX allows us to write HTML in React.

      JSX makes it easier to write and add HTML in React.
 *
 *    In below example we have saw that we can use html element
 *    So that html element are called as JSX in React.
 *
 */

// ReactDOM.render(
//   <h1>Zahid Chand </h1>,
//   document.getElementById("root")
// );


/**--------Render Multiple Elements(JSX) Inside ReactDOM.render()------- */
/**
 *    Till now we saw only 1 JSX in our render()
 *    What if we want multiple of them
 *
 * EG -->
       ReactDOM.render(
       <h1>Zahid Chand </h1>
       <p>Hello , We are learning React</p>,
       document.getElementById("root")
      );

  It will give us an error
 * Error -->
 *    Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag.
 *    Did you want a JSX fragment
 *
 * It's diplay us an error that render method will only take one element
 * To solve that issue we have to pass it into one tag
 *
 * Let's suppose div tage and it will solve that problem.
 *
 *
 *
 */

// ReactDOM.render(
//   <div>
//     <h1>Zahid Chand </h1>
//     <p>Hello , We are learning React</p>
//   </div>,
//   document.getElementById("root")
// );

/**
 * O/P -->
 *    Zahid Chand
      Hello , We are learning React
 */

/**
 *    In react v16 and about we can write array of elements [] insted of div tag
 */


// ReactDOM.render(
//   [  
//   <h1>Zahid Chand </h1>,
//   <p>Hello , We are learning React</p>,
//   ],
//   document.getElementById("root")
// );


/**------------------------------React Fragments------------------------- */
/**
 *    When we use div tag then in browser when we inspect then we get div inside div
 * that means we are already passing that value to div tag whose id is root
 * and again we are sending div from our JSX .
 * So it can lead us to a problem that while applying css we can get some issue
 * regarding that.
 * So to solve that issue we have React Fragments
 * We can use tag
 *
     <React.Fragment>
     </React.Fragment>

     Eg -->

     ReactDOM.render(
        <React.Fragment>
          <h1>Zahid Chand </h1>
          <p>Hello , We are learning React</p>
        </React.Fragment>,
        document.getElementById("root")
      );
 *
     Inside that we need to write our JSX

     NOTE --> React 16.2 has introduced a syntactical sugar for Fragments.
     <>
     </>
 *
     This will also work
 */

// ReactDOM.render(
//   <>
//     <h1>Zahid Chand </h1>
//     <p>Hello , We are learning React</p>
//   </>,
//   document.getElementById("root")
// );

/**------------------Top 5 Netflix Series In OrderList/**----------------- */

// ReactDOM.render(
//   <>
//     <h1>Zahid's Top 5 Netflix Pick</h1>
//     <p>List of 5 best series</p>

//     <ol>
//       <li>Breaking Bad</li>
//       <li>Banshee</li>
//       <li>Money Heist</li>
//       <li>Narcos</li>
//       <li>Sacred Games</li>
//     </ol>
//   </>,
//   document.getElementById('root')
// );


/**------------------JavaScript Expression In JSX/**------------------ */

/**
 *    We have saw how we use html in out js file
 *    But if we want to use Js again in our html element then we can use it
 *    by {} inside this
 *
 *
          const myName = "Heisenberg"
          ReactDOM.render(
          <h1>Say My Name myName</h1>,
          document.getElementById("root")
          );
 *
        O/P --> Say My Name myName

        To use Js in HTML Element we need to add {} .

        NOTE --->
              In this {} we can only use expression , we cannot use Statements
              Statements are if  else,switch etc we cannot use Statements.
 */


// const myName = "Heisenberg"
// ReactDOM.render(
//   <>
//     <h1>Say My Name {myName}</h1>
//     <p>We can also perform calculations inside -- {2 * 4}</p>
//   </>,
//   document.getElementById("root")
// );


/**
 *  O/P-->  Say My Name Heisenberg
 *          We can also perform calculations inside -- 8
 */



/**------------------Template Literals In JSX------------------ */

/**
 *    Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, for string interpolation with embedded expressions, and for special constructs called tagged templates.
      It concat 2 or more string
 */

// const fName = "Walter";
// const lName = "White";
// ReactDOM.render(
//   <h3>{`My First Name Is ${fName} And Last Name Is ${lName}`}</h3>
//   , document.getElementById("root")
// )

/*
O/P---> My First Name Is Walter And Last Name Is White
*/


/**-------------Display Current Date and Current Time In JSX---------- */

// let curDate = new Date().toLocaleDateString();
// let curTime = new Date().toLocaleTimeString();
// ReactDOM.render(
//   <>
//     <h2>Hello, My name is Zahid</h2>
//     <p>Current Date is {curDate} </p>
//     <p>And Time is {curTime} </p>
//   </>,
//   document.getElementById("root")

// );

/**-------------JSX Attribute In ReactJS HTML Attribute Vs JSX Attribute---------- */

/**
 *    Like in html element we have tags attributes
 * Eg -->
 *      <a href="" target=""></a>
 * So this href and target are attributes.
 * As we are using this JS in HTML its called as JSX and its attributes are
 * called as JSX Attributes
 *
 * To checkout more attributes just search HTML Global Attributes and
 * you will get all attributes.
 *
 */

// const myName = "Breaking Bad"
// ReactDOM.render(
//   <>
//     <h1 contentEditable="true">{myName}</h1>
//     <img src='data:image/jpeg;base64,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' />
//     <img src='data:image/jpeg;base64,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' alt='JessyPinkmanImg' /> 
//   </>,
//   document.getElementById("root")
// )


/**------------------Greeting Website In ReactJS--------------------------- */
/**
 *    Create Greeting Application And Change Color Of That Greeting
 *
 * NOTE --> uncomment import css (line 3)
 */


// let greeting = '';
// let curDate = new Date()
// let curHour = curDate.getHours()
// const cssStyle = {};

// if (curHour >= 1 && curHour < 12) {
//   greeting = "Good Morning";
//   cssStyle.color = "green";
// }
// else if (curHour >= 12 && curHour < 20) {
//   greeting = "Good Afternoon";
//   cssStyle.color = "orange";
// }
// else {
//   greeting = "Good Night"
//   cssStyle.color = "black";
// }

// ReactDOM.render(
//   <>
//     <div>
//       <h1>Hey.. <span style={cssStyle}>{greeting}</span></h1>
//     </div>
//   </>,
//   document.getElementById("root")

// );

/**---------------------Components In ReactJS----------------------------- */

/**
 *    Components are like functions that return HTML elements.

      Components are independent and reusable bits of code.

      They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

      Components come in two types, Class components and Function components,


    ***Class Component:--->
          A class component must include the extends React.Component statement.
          This statement creates an inheritance to React.Component,
          and gives your component access to React.Component's functions.
          The component also requires a render() method, this method returns HTML.


    Eg --->
              Create a Class component called Car

              class Car extends React.Component {
                render() {
                  return <h2>Hi, I am a Car!</h2>;
                }
              }

    ***Function Component:--->
          A Function component also returns HTML, and behaves
          much the same way as a Class component, but Function components
          can be written using much less code, are easier to understand,


    Eg -->
        Create a Function component called Car

        function Car() {
          return <h2>Hi, I am a Car!</h2>;
        }

      NOTE--> We will mainly focus on Function Component
 */

/**
     * ReactDOM.render(
<>
  <h1>UFC</h1>
  <p>List Of Some UFC Champions</p>
  <ol>
    <li>khabib nurmagomedov</li>
    <li>Jon Jones</li>
    <li>Daniel Cormier</li>
    <li>GSP</li>
    <li>Francis Ngannou</li>
  </ol>
</>
, document.getElementById("root")
);
    Till now we have wrote using hard code without creating Components.
    Now we will learn how to create components.

    NOTE --> Component Name Should Start With First Letter Capital.
*/
// ReactDOM.render(
//   <>
//     <Heading />
//     <Para />
//     <OrderedList />
//   </>
//   , document.getElementById("root")
// );


/**------------------Greeting Website In ReactJS Using Component--------------------------- */

// ReactDOM.render(
//   <Greeting />,
//   document.getElementById("root")

// );


/**--------------------------Import And Export--------------------------- */

/**
 *    JavaScript modules allow you to break up your code into separate files.

      This makes it easier to maintain the code-base.

      ES Modules rely on the import and export statements.
 *
 */

// ReactDOM.render(
//   <>
//     <h2>List Of Fighters</h2>
//     <ol>
//       <li>Khabib</li>
//       <li>{fighter1}</li>
//       <li>{fighter2}</li>
//       <li>{fighter3()} </li>
//       <li>{fighter4()} </li>
//     </ol>

//   </>,
//   document.getElementById("root")
// );

/** Fighter3 and Fighter4 are methods so we need to give () sign then
 * only it will get displayed.
 */

/**-------------Simple Operations Using Import And Export----------------- */

// import add, { sub, mul, div } from './calculations/Calc'
// ReactDOM.render(
//   <ol>
//     <li>Addition Of 2 No Is --- {add(2, 5)} </li>
//     <li>Subtraction Of 2 No Is --- {sub(10, 6)} </li>
//     <li>Multiplication Of 2 No Is --- {mul(5.71, 4.76)}</li>
//     <li>Division Of 2 No Is --- {div(100, 5)} </li>
//   </ol>,
//   document.getElementById("root")
// );


/**--------------------------------Map In ReactJs------------------------ */

/**
      The map() create a new array with the results of calling a  function
 *    for every array element.
 *
 *    The map() calls the provided function once for each element in an array,
 * in order.
 *
 *  Syntax -->
 *      array.map(function(currentValue,index,arr),thisValue)
 *
 *         Argument          Description
 *
 *        CurrenValue       ----> Required , The Value of the current element.
 *        index (Optional)  ----> The array index of the current element.
 *        arr (Optional)    ----> The array Object the current element belong to
 *
 * Eg -->
 *
 *      const studentData = [
 * { id :1, name : "Walter" , degree : "PHD"};
 * { id :2, name : "Jessy" , degree : "BCA"};
 * { id :3, name : "Skyler" , degree : "MBA"};
 * ];
 * const newStudentData = studentData.map((currentValue) =>{
 *    return `My Name Is ${currentValue.name}`;
 * });
 * console.log(newStudentData);
 *
 *
 */


/**----------------------------Props In ReactJS--------------------------- */
/**
 *   Props are arguments passed into React components.

     Props are passed to components via HTML attributes.

     props stands for properties.

     React Props are like function arguments in JavaScript and attributes in HTML.

     To send props into a component, use the same syntax as HTML attributes:


 *
 */


/** Lets consider an example If we want to greet more than one person
 *
 *
 */
// import Greets from './Greets'
// ReactDOM.render(
//      <>
//           <Greets />
//           <Greets />
//           <Greets />

//      </>,
//      document.getElementById("root")
// );

/** As we saw components are reuseable so we can use them whenever and wherever
 * we want  and how many times we want.
 *
 * If we use <Greets /> 3 times then it will give us the same output
 *
 * Eg -->
 *        import Greets from './Greets'
ReactDOM.render(
     <>
          <Greets />
          <Greets />
          <Greets />

     </>,
     document.getElementById("root")
     );

     Output    -->

               Hello Zahid
               Hello Zahid
               Hello Zahid
 *
     So we are greeting the same person 3 times, but what if we
     want to greet 3 different people

     In that case we have Props
 *
 *
 */

// import Greets from './Greets'
// ReactDOM.render(
//      <>
//           <Greets name="Zahid">
//                <p>
//                     Hello This Is Child Paragraph Of Zahid
//                </p>
//           </Greets>
//           <Greets name="Praveen" >
//                <button>Click Me I'm Inside Praveen</button>
//           </Greets>
//           <Greets name="Clayton" />

//      </>,
//      document.getElementById("root")
// );




/**----------------------------Hooks In ReactJS--------------------------- */

/**
 *   Hooks was introduced in v16.8
 *
 *   It allows you to use state and other features without writing a class.
 *   Hooks are the functions which "hook into" react state and lifecycle
 *   features and function component.
 *
 *   It does not work inside class
 *
 *   Hooks should always be used at the top of  the React functions.
 *
 *   Node v6 or above and  NPM v5,2 or above.
 *
 *
 */
// import Hooks from "./Hooks"

// ReactDOM.render(
//      <>
//           <h1 style={{ textAlign: "center" }}>React Hooks</h1>
//           < Hooks />
//      </>,
//      document.getElementById("root")
// )


/**----------------------------Hooks Challenges In ReactJS--------------------------- */
/**
 *     ***Get Time On Refreshing And Clicking Button
 *
 */
// import GetTimeHook from "./GetTImeHook"
// ReactDOM.render(
//      <>
//           <h1 style={{ textAlign: "center" }}>Get Time On Refreshing And Clicking Button</h1>
//           <GetTimeHook />
//      </>,
//      document.getElementById("root")
// )



/**----------------------------Digital Clock In ReactJS--------------------------- */

// import Time from "./DigitalClock"
// ReactDOM.render(
//      <Time />,
//      document.getElementById("root")

// )


/**----------------------------Forms In ReactJS--------------------------- */


// import Form from "././FirstForm"
// ReactDOM.render(
//      <>
//           <Form />
//      </>,
//      document.getElementById("root")

// )


/**----------------------------Login Forms In ReactJS--------------------------- */

// import LoginForm from "./LoginForm"
// ReactDOM.render(
//      <>
//           <LoginForm />
//      </>,
//      document.getElementById("root")
// )


/**---------------------Spread Operator In ReactJS-----------------------*/


/**
 *  The JavaScript spread operator (...) allows us to quickly copy
 *  all or part of an existing array or object into another array or object.
 *
 */

//1st Way
// const fullName = ["Zahid", "Chand"]

// const myBioData = [101, ...fullName, 25, "Male"]
// console.log(fullName);
// console.log(myBioData);


// //2nd Way
// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...numbersTwo];

// console.log(numbersCombined);

// // The spread operator is often used in combination with destructuring.
// //3nd Way

// const numbers = [1, 2, 3, 4, 5, 6];

// const [one, two, ...rest] = numbers;
// console.log(one);
// console.log(two);
// console.log(...rest);


// //We can use the spread operator with objects too:

// const myVehicle = {
//      brand: 'Ford',
//      model: 'Mustang',
//      color: 'red'
// }

// const updateMyVehicle = {
//      type: 'car',
//      year: 2021,
//      color: 'yellow'
// }

// const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle }

// console.log(myUpdatedVehicle);



/**-------Handling Complex Multiple Input  Forms In ReactJS---------*/


// import HandleComplexForm from "./HandleComplexForm"
// ReactDOM.render(
//      <>
//           <HandleComplexForm />
//      </>, document.getElementById("root")
// )


/**----------------------------Context API In ReactJS--------------------------*/

/**
 *
 *
                                        Parent Component
                                             |
                                             |
                                             |
                                        Child Component A
                                             |
                                             |
                                             |
                                        Child Component B
                                             |
                                             |
                                             |
                                        Child Component C
 *
 * If parent want to send some data to child Component C then it should be pass to Child Component A.
 * Then A will pass to B and B will pass to C.
 *
 * So data is been passing from different component.
 *
 * But , When Context came into picture we can do it. We can directly pass from parent component A to
 * Child Component C directly.
 *
 *
 *        So , React hooks provides a concept call Context.
 *
 *        React Context API allows you to easily access data at different levels of the
 * component tree , without passing prop to every level.
 *
 *
 */

/**
 *        There are only 3 steps and in that steps we can easily understand Context
 *
 * 1. Creating A Context              --> CreateContext() so we can pass data
 * 2. Provider                        --> We need provider so we can use it further
 * 3. Consumer                        --> After providing data we need to consume that data so we need Consumer
 *
 *
 *
 *
 */

// import ParentComponent from './ContextAPI/ParentComponent'
// ReactDOM.render(
//      <ParentComponent />
//      , document.getElementById("root")
// )


/**------------------useEffect In ReactJS---------------------*/

/**
    The useEffect Hook allows you to perform side effects in your components.

    useEffect accepts two arguments. The second argument is optional.

     useEffect(<function>, <dependency>)



 */
import UseEffect from "./UseEffect"
ReactDOM.render(
     <>
          <UseEffect />
     </>,
     document.getElementById("root")
)


/**------------------React Router In ReactJS---------------------*/

/**
 *   Create React App doesn't include page routing.

     React Router is the most popular solution.

     In react we create single page application.

     Single Page Application means we change the oage without reloading it.

     In react we don't get any predefined router .

     We need to add that library in our application.


     To add React Router in your application, run this in the terminal from the root directory of the application:

     yarn add react-router-dom

     In our application we are using yarn 
     from npm 

     npm install --save react-router-dom




 */
// import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
// import Home from './ReactRoute/Home'
// import About from './ReactRoute/About'
// import Contact from './ReactRoute/Contact'

// ReactDOM.render(
//      <Router>
//           <>
//                <Routes>
//                     <Route path="/home" element={<Home />} />
//                     <Route path="/about" element={<About />} />
//                     <Route path="/contact" element={<Contact />} />

//                </Routes>
//                {/* <Home />
//                <About />
//                <Contact /> */}
//           </>
//      </Router>,

//      document.getElementById("root")
// )










