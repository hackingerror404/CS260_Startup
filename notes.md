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
