# CS 260 2023 Fall Semester Notes

How to properly format my notes: [LINK](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links)

I can use **anything** I write in here on the midterm and the final.

## Important Info

My IP Address: 54.145.191.41  
How to SSH in: `ssh -i [key pair file] ubuntu@[ip address]`

## Startup GitHub Setup

Important Git Commands:
* git add, git commit (-a to track, -m to write a "_" message), git push, git pull
* git fetch - get the latest information about the changes on GitHub without actually changing your local repository.
* to solve a merging crisis, edit the necessary file manually until it's happy.

A GitHub fork provides the ability to create a copy of a GitHub repository. Fork a repo on GitHub, then pull / clone it onto your machine.

## Server information

`dig [domain name]` returns the IP Address of the server you're connected to.  
The Caddy file routes HTTPS requests for your domain.

## HTML

*The head sections contains important information, like the meta charset, meta name, and website title.*

The two major purposes of HTML is to provide structure and content to your web application. Some of the common HTML structural elements include *body, header, footer, main, section, aside, p, table, ol/ul, div, and span*. We demonstrate the use of each element with the following HTML document. It starts with the top level content body. The body has three children, a header, main, and footer. Each of the body children then contains other structural content.  

These tags require more text:  
- img: `<img src="_" alt="_" width="_" ...>`
- a(link): `<a href="_"> [clicky link text here] </a>`
- comments: `<!--_______-->`

There is a distinction between structure elements that are block vs inline. A block element is meant to be a distinct block in the flow of the content structure. An inline element is meant to be inline with the content flow of a block element. In other words, inline elements do not disrupt the flow of a block element's content. *Examples of inline elements: bold text, span elements.*  

Deploy simon to production: `./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s simon`  

### Test questions

- In the following code, what does the link element do?

In HTML, the <link> element is used to define relationships between the current document and external resources. It is commonly used to link to stylesheets, but it can also be used to establish other relationships like linking to icons, alternate versions of the document, or even RSS feeds.  
The type attribute defines the MIME type of the linked resource. In this case, it's "text/css", which is the standard MIME type for CSS files.
The href attribute specifies the URL or path to the external resource.

- In the following code,  what does a div tag do?

The <div> tag in HTML is a container or a division that is used to group other HTML elements together and apply styles or manipulate them as a single unit using CSS or JavaScript.

- In the following code, what is the difference between the #title and .grid selector?

`#title` is an ID selector, generally for a single element. `.grid` is a class selector. Classes are used to apply styles to multiple elements that share the same class name.   
- In the following code, what is the difference between padding and margin?

The padding is the space between the content of an element and its border. It defines the inner space within an element.  (not transparent)
The margin is the space outside an element, which creates space between the element and its neighboring elements. (is transparent)  

- Given this HTML and this CSS how will the images be displayed using flex?
- What does the following padding CSS do?
- What does the following code using arrow syntax function declaration do?

The arrow function syntax in JavaScript is a concise way to declare anonymous functions. It provides a more compact and cleaner way to write function expressions compared to traditional function declarations. They have no "this" context and inherit it from their enclosing scope. 

- What does the following code using map with an array output?
- What does the following code output using getElementByID and addEventListener?
- What does the following line of Javascript do using a # selector?
- Which of the following are true? (mark all that are true about the DOM)?\

The DOM, or Document Object Model, is a programming interface for web documents. It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document, such as an element (e.g., <div>), an attribute (e.g., src), or a text content.  
getElementById(''), createElement(''), appendChild(newElement)

- By default, the HTML span element has a default CSS display property value of:

By default, the HTML <span> element has a default CSS display property value of inline.
An inline element does not start on a new line and only takes up as much width as necessary. In the case of a <span>, it will only take up as much width as its content allows. 

- How would you use CSS to change all the div elements to have a background color of red?

`div {
  background-color: red;
}`

- How would you display an image with a hyperlink in HTML?

`<a href="https://example.com">
  <img src="image.jpg" alt="Description of the image">
</a>`

- In the CSS box model, what is the ordering of the box layers starting at the inside and working out?

Content, Padding, Border, Margin

- Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?
- What will the following code output when executed using a for loop and console.log?
- How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?

`const byuElement = document.getElementById('byu');

if (byuElement) {
  byuElement.style.color = 'green';
} else {
  console.error('Element with id "byu" not found.');
}`

- What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?

Paragraph: `<p>`, Ordered List: `<ol>`, Unordered List: `<ul>`, second level heading: `<h2>`, first level heading: `<h1>`, third: `<h3>`

- How do you declare the document type to be html?

`<!DOCTYPE html>` at the start of the document

- What is valid javascript syntax for if, else, for, while, switch statements?

`if (condition) {
  // Code to execute if the condition is true
} else if (anotherCondition) {
  // Code to execute if the first condition is false, but this condition is true
} else {
  // Code to execute if all conditions are false
}`

`switch (expression) {
  case value1:
    // Code to be executed if expression matches value1
    break;
  case value2:
    // Code to be executed if expression matches value2
    break;
  // Add more cases as needed
  default:
    // Code to be executed if expression doesn't match any cases
}`

- What is the correct syntax for creating a javascript object?

`const myObject = {
  property1: value1,
  property2: value2,
  // Add more properties as needed
};`

`function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
const person = new Person("John", "Doe", 30);`

- Is is possible to add new properties to javascript objects? YES. do `person.email = "john.doe@example.com";`
- If you want to include JavaScript on an HTML page, which tag do you use?
`<script src="script.js"></script>`
- Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
- Which of the following correctly describes JSON?

JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is widely used for transmitting data between a server and a web application as an alternative to XML.  

- What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
chmod is a command in Unix and Unix-like operating systems that is used to change the access permissions of files and directories.  
pwd stands for "print working directory". It is used to display the current working directory in the command line interface.  
cd stands for "change directory". It is used to change the current working directory to a different directory.  
ls is used to list the files and directories in the current directory.  
vim is a text editor for Unix-like operating systems. It is a powerful and customizable text editor with a wide range of features.  
nano is a simple and user-friendly text editor often included with Unix-like operating systems.  
mkdir is used to create a new directory.  
mv is used to move or rename files and directories.  
rm is used to remove files and directories.  
man is used to display the manual page for a given command. It provides detailed information about how to use a command.  
ssh stands for "secure shell" and is used to securely connect to remote servers over a network.  
ps is used to display information about the currently running processes.  
wget is a command-line utility for downloading files from the web.  
sudo stands for "superuser do" and is used to run commands with administrative privileges. It allows users to perform tasks that require elevated permissions.  
- Which of the following console command creates a remote shell session? -- SSH
- Which of the following is true when the -la parameter is specified for the ls console command?
`ls`: This is the command to list files and directories.  
`-l`: This is an option (or flag) that tells ls to provide detailed information about each file or directory. It includes information like permissions, number of links, owner, group, size, and modification time.  
`-a`: This is another option that instructs ls to show hidden files and directories (those whose names start with a dot .). By default, hidden files are not displayed.

- Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
Top-Level Domain (TLD): click
The top-level domain is the highest level in the hierarchical domain naming system. It is the part of the domain name that comes after the last dot. Examples of TLDs include .com, .org, .net, .edu, and in this case, .click.  

Subdomain: banana.fruit.bozo
A subdomain is a domain that is part of a larger domain. In this case, banana.fruit.bozo is a subdomain of the domain click.  

Root Domain: click
The root domain is the highest level of the domain hierarchy. It is the main domain name without any subdomains. In this case, click is the root domain.  
- Is a web certificate is necessary to use HTTPS: YES
- Can a DNS A record can point to an IP address or another A record.
Yes, a DNS A record can point to an IP address or to another A record. This allows for more flexible and dynamic DNS configurations.
A record example: `subdomain.example.com   IN   A   anotherdomain.com`  
- Port 443, 80, 22 is reserved for which protocol?
443: HTTPS Protocol. It's the default port for websites that use HTTPS, which encrypts data transmission to provide a secure and private connection.
80: HTTP Protocol.  Port 80 is used for standard, non-secure HTTP communication. It's the default port for most web servers.
22: SSH Protocol. Port 22 is used for secure remote access and file transfer via SSH. It provides an encrypted connection for secure access to a remote system's command-line interface.  
- What will the following code using Promises output when executed?
resolve called if successful, reject called if fails. .then handles resolved case, .catch handles the fai case.

# FINAL EXAM QUESTIONS

### What ports are used for HTTP, HTTPS, SSH?
HTTP (Hypertext Transfer Protocol): Default Port: 80
HTTPS (Hypertext Transfer Protocol Secure): Default Port: 443
SSH (Secure Shell): Default Port: 22

### What do HTTP status codes in the 300, 400, 500 range indicate?
HTTP status codes are three-digit numbers returned by a server in response to a request made by a client (e.g., a web browser or an API client). The first digit of the status code defines the class of response, while the last two digits do not have any categorization role.  
3xx (Redirection): Status codes in the 300 range indicate redirection. For example:
        300 Multiple Choices
        301 Moved Permanently
        302 Found
        304 Not Modified (commonly used in caching)
4xx (Client Error): Status codes in the 400 range indicate client errors. These codes are typically returned when the client has made an error in the request. For example:
        400 Bad Request
        401 Unauthorized
        403 Forbidden
        404 Not Found
5xx (Server Error): Status codes in the 500 range indicate server errors. These codes are returned when the server encounters an error while trying to fulfill the request. For example:
        500 Internal Server Error
        502 Bad Gateway
        503 Service Unavailable
        504 Gateway Timeout      

### What does the HTTP header content-type allows you to do?
The Content-Type HTTP header is used to indicate the media type or MIME (Multipurpose Internet Mail Extensions) type of the resource sent in the HTTP message body. It specifies the type of data contained in the body of the request or response, allowing the recipient to properly interpret and process the content. SPECIFY TYPE OF DATA. `text/plain`, `application/json`, `multipart/form-data`.

### What do the following attributes of a cookie do? (Domain, Path, SameSite, HTTPOnly)
- **Domain**: specifies the domain for which the cookie is valid. The browser will include the cookie in the request headers only if the domain of the request matches the specified domain.
- **Path**: indicates the URL path for which the cookie is valid.
- **SameSite**: used to control whether a cookie should be sent with cross-site requests. It helps prevent cross-site request forgery attacks. Strict, Lax, and None are the possible values.
- **HTTPOnly**: a security measure that, when set, prevents JavaScript from accessing the cookie. If a cookie is marked as HttpOnly, it can only be accessed and modified by the server, not by client-side scripts.

### Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /foo/bar?
GET Requests usually have a response formatted like this:
```
{
  content: 'Never put off till tomorrow what you can do today.',
  author: 'Thomas Jefferson',
};
```
`res.send({ stuff here })` is where these will live in an Express middlware solution.  
Example of middleware code:
```
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({cookie: `${req.params.name}:${req.params.value}`});
});

app.get('/cookie', (req, res, next) => {
  res.send({cookie: req.cookies});
});
```

### Given the following Express service code: What does the following JavaScript fetch return?
Here is an example of fetch code. Don't know what else to put here lol. 
```
fetch('https://api.quotable.io/random')
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
```

### Given the following MongoDB query `{ cost: { $gt: 10 }, name: /fran.*/}`  select all of the matching documents.
The MongoDB query provided is filtering documents based on two conditions: cost field must be greater than 10, and name field must match the regular expression `/fran.*/`.  
This query will retrieve all documents in the collection where the cost is greater than 10 and the name matches the regular expression /fran.*/.  

### How should you store user passwords in a database?
So instead of storing the password directly, we want to cryptographically hash the password so that we never store the actual password. When we want to validate a password during login, we can hash the login password and compare it to our stored hash of the password.

### Assuming the following Node.js service code is executing with websockets, what will be logged to the console of the web browser?

### What is the WebSocket protocol used for?
The WebSocket protocol is a communication protocol that provides full-duplex communication channels over a single, long-lived connection.  
The core feature of WebSocket is that it is fully duplexed. This means that after the initial connection is made from a client, using vanilla HTTP, and then upgraded by the server to a WebSocket connection, the relationship changes to a peer-to-peer connection where either party can efficiently send data at any time.

### What is JSX and how are the curly braces rendered?
JSX (JavaScript XML) is a syntax extension for JavaScript recommended by React for describing what the UI should look like. It looks similar to XML or HTML but is designed to work with JavaScript.  
Example:
```
const name = "John";
const element = <p>Hello, {name}!</p>;
```
"name" is inserted in. Any Java expression can be inserted in without issues.

### Assuming a HTML document with a `<div id="root"></div>` element, what content will the following React component generate?
Content:
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

Answer:
```
<div>
  <h1>Hello, Sara</h1>
  <h1>Hello, Cahal</h1>
  <h1>Hello, Edite</h1>
</div>
```

### Assuming a HTML document with a `<div id="root"></div>` element, element, what content will the following React component generate?
Content:
```
function Numbers() { 
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return(<ul>{listItems}</ul>)
}
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Numbers/>);
```
Answer:
```
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
</ul>
```

### What does the following React component do? 
Component:
```
function Example() {
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
**State Declaration**: `const [count, setCount] = useState(0);`
This line declares a state variable named count using the useState hook. The initial value of count is set to 0, and setCount is a function that can be used to update the value of count.  

**Rendered Output**: 
- The component renders a <div> containing a <p> element and a <button> element.
- The <p> element displays the current value of the count state variable using curly braces {count}.
- The <button> element has an onClick event handler that calls the setCount function to increment the count state by 1 whenever the button is clicked.

**Behavior**:
When the button is clicked, the setCount function is invoked with the current value of count plus 1, updating the state. This triggers a re-render of the component with the updated state value.  
As a result, the displayed count in the paragraph (<p>) element will increase by 1 each time the button is clicked.  

### What are React Hooks used for?
React Hooks are functions that enable functional components to use state, lifecycle methods, and other React features that were traditionally only available in class components. useState, useEffect, etc.  
React Hooks simplify the development of React components by allowing functional components to manage state and side effects more easily.  

### What is the useEffect hook used for?
The useEffect hook in React is used to perform side effects in functional components. Side effects may include data fetching, subscriptions, manual DOM manipulations, and other tasks that need to be performed after the component has rendered. The useEffect hook helps manage these side effects in a way that aligns with the component lifecycle. REPRESENTS LIFECYCLE EVENTS.
```
useEffect(() => {
  // Side effect code here
  // This code runs after the component renders

  return () => {
    // Cleanup code (optional)
    // This code runs before the component is unmounted or before the effect is re-run
  };
}, [dependencies]);
```

### What does this code do? 
Code:
```
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```
The provided code is a React component using the React Router library for navigation.  
- **BrowserRouter**: This component from react-router-dom provides the routing infrastructure for the application.  
- **Routes**: The Routes component is used to declare the routes for your application. It is the container for individual Route components.  
- The outermost Route has a path="/", meaning it will match the root path. It renders a Layout component.  
- Index Route (<Route index>): `<Route index element={<Home />} />`. This matches the root path ("/") and renders the Home component inside the Layout.  
- `<Route path="blogs" element={<Blogs />} /> <Route path="contact" element={<Contact />} />`. These routes match specific paths ("/blogs" and "/contact") and render corresponding components (Blogs and Contact) inside the Layout.
- **Wildcard Route**: This is a catch-all route that matches any path not covered by the previous routes. It renders the NoPage component inside the Layout.

In summary, this React component sets up a basic navigation structure using React Router. It defines routes for different paths, and based on the matched route, it renders different components inside a common Layout component.  

### What role does npm play in web development?
Package management, dependency management, installation of packages, command-line tools, and project automation.

### What does package.json do in a npm project?
Declare the project's dependencies, includes version information for the project itself, define custom scripts for certain tasks, specify the 'main' entry point, author / license info and metadata, other config info.

### What does the fetch function do?
The fetch function in JavaScript is used to make HTTP requests, typically to retrieve data from a server.  
The basic usage of fetch takes a URL and returns a promise. The promise then function takes a callback function that is asynchronously called when the requested URL content is obtained. If the returned content is of type application/json you can use the json function on the response object to convert it to a JavaScript object.  

### What does node.js do?
Node.js is a JavaScript runtime built on the V8 JavaScript engine. It allows developers to run JavaScript code on the server side, outside of a web browser. 

### What does Vite do?
Vite is a full web framework toolchain that allows us to use JSX, minification, polyfills, and bundling for our Simon and startup applications.  
Vite bundles your code quickly, has great debugging support, and allows you to easily support JSX, TypeScript, and different CSS flavors. 
