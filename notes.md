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
