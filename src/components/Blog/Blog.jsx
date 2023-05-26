import React from 'react';
import { Button } from 'react-bootstrap';
import Pdf from "react-to-pdf";
import { FaDownload } from 'react-icons/fa';

const Blog = () => {
    const ref = React.createRef();
    return (
        <div>
            <div ref={ref}>
                <div className='text-center mb-5'>
                    <h2>Blog page</h2>
                </div>
                <div className='m-3'>
                    <div className="border border-2 rounded rounded-lg p-3 bg-light my-3">
                        <h3>a. The differences between uncontrolled and controlled components.</h3>
                        <hr />
                        <p><b><u>Answer:</u></b>In React, Controlled component doesn't maintain its internal state and data is controlled by the parent component. It accepts its current value as a prop and also allows validation control as well as better control over the form elements and data.<br></br>
                            On the other-hand, Uncontrolled component maintains its internal state and data is controlled by DOM itself. It uses a ref for their current values and doesn't allow validation control as well as limited control over the form elements and data
                        </p>
                    </div>
                    <div className="border border-2 rounded rounded-lg p-3 bg-light my-3">
                        <h3>b. How to validate React props using PropTypes?</h3>
                        <hr />
                        <p><b><u>Answer:</u></b>
                            Props are an important mechanism for passing the read-only attributes to React components.Props validation is a tool that will help the developers to avoid future bugs and problems. When developing a React application, we will need to structure and define your props to avoid bugs and errors. Just like a function might have mandatory arguments, a React component might require a prop to be defined, otherwise, it will not render properly. Forgetting to pass a required prop into a component that needs it could cause your app to behave unexpectedly. React components used special property PropTypes that help we to catch bugs by validating data types of values passed through props, although it is not necessary to define components with propTypes.App.propTypes is used for props validation in react component.<br></br><br />
                            <h5>React PropTypes validators:</h5>
                            <ul>
                                <li>PropTypes.any : The prop can be of any data type.</li>
                                <li> PropTypes.bool : The prop should be a Boolean.</li>
                                <li> PropTypes.number : The prop should be a number.</li>
                                <li>PropTypes.string : The prop should be a string.</li>
                                <li> PropTypes.func : The prop should be a function.</li>
                                <li>PropTypes.array : The prop should be an array.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="border border-2 rounded rounded-lg p-3 bg-light my-3">
                        <h3>c. The difference between nodejs and express js</h3>
                        <hr />
                        <p><b><u>Answer:</u></b>
                            The main difference between nodejs and express js is Node.js is a platform for building server-side event-driven i/o application. Node.js inherits many JavaScript features. Basically nodejs includes Versatility, Zero buffering, Network, Occasion-driven input and output, Better performance, Scalability and so on features. Express.js is a framework based on node.js for building web-application using principles and approaches of node.js. Basically express js includes Server-side programming, Page state retention,Error-fixing, Dynamic content and so on features.
                        </p>
                    </div>
                    <div className="border border-2 rounded rounded-lg p-3 bg-light my-3">
                        <h3>a. What is a custom hook, and why will you create a custom hook??</h3>
                        <hr />
                        <p><b><u>Answer:</u></b>
                            A custom hook is a one kind of JavaScript function. It's name starts with 'use' and can be used to call other hooks. The major differences between a custom React JS hook and React JS components is a custom hook does not require a specific signature. We will create a custom hook because it can be reused easily, which makes the code cleaner and reduces the time to write the code. It increases reusability of the code as well as the rendering speed.
                        </p>
                    </div>


                </div>
            </div>
            <div className='text-center'>
                <Pdf targetRef={ref} filename="Blog.pdf" x={.5} y={.5} scale={0.6}>
                    {({ toPdf }) => <Button className='btn-danger' onClick={toPdf}>Download Pdf <FaDownload></FaDownload></Button>}
                </Pdf>
            </div>


        </div>
    );
};

export default Blog;