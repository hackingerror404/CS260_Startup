# The Movie Shelf

## Description Deliverable

### Elevator Pitch  
Have you ever accidentally rented a movie online when it turns out you already owned it on DVD, or forgot about a digital purchase or two, and now you have five copies of *Inception* floating around your accounts? For anyone who enjoys watching film, keeping track of the ones you own can be tough. With **The Movie Shelf**, users will be able to store the names of everything in their collection - physical and digital - in one convenient location. Each user will have an individual "shelf" to track their collection, and users can view other people's shelves as well!  

### Design
The top window shows the login screen. The middle window shows the home screen, accessible when a user is logged in. The final window shows a user's shelf, which is visible by clicking on the hyperlink notifications that appear on the home screen whenever something has been added / removed from a shelf.
![Design model for the login and home pages of The Movie Shelf application](/DesignImages/DesignImage_LoginHome.jpg)

The top window shows the template for a user's personal shelf, which is the same page as any other shelf, but with the addition of the "edit" button near the top right. The bottom windows shows the edit screen for a user's personal shelf.
![Design model for the Your Shelf page of The Movie Shelf application](/DesignImages/DesignImage_YourShelf.jpg)

### Key Features
- Secure login over HTTPS.
- Ability to add or remove films on your personal shelf that are saved to your account.
- Ability to decide format of films added to your shelf (physical, digital, or both).
- For physical films, ability to decide which specific format the film is.
- For digital films, ability to decide the specific digital marketplace it is attached to.
- View other users' additions / removals in real time.
- View other users' shelves by clicking on the notification link showing their update/removal.

### Technologies
I am going to use the required technologies in the following ways:
- **HTML** - Uses correct HTML structure for application. Four HTML pages: login, home, user shelf, and edit shelf. Hyperlinks on the 'add', 'remove', and 'edit' buttons, as well as on the notification lines of text on the home page.
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice, and contrast.
- **JavaScript** - Provides login, home notifications display, displaying shelf items and characteristics, and applying edits to shelf content.
- **Service** - Backend service with endpoints for:
  - login
  - retrieving add/removal notifications
  - retrieving shelf items and characteristics
  - submitting shelf items and characteristics
- **DB** - Store users, choices, and votes in database. 
- **Login** - Register and login users. Credentials securely stored in database. Can't view the home page or users' shelves unless authenticated.
- **WebSocket** - As each user adds or removes items from their shelves, a notification about this update is broadcasted to all users on the home page.
- **React** - Application ported to use the React web framework.

### HTML Deliverable
For this deliverable I built out the structure of my application using HTML.
- **HTML pages** - Four HTML pages that represent the ability to log in, view other users' activity, view a "shelf," and edit entries on your shelf.
- **Links** - The login page links automatically to the home page. The home page, shelf, and edit shelf pages all contain links all pages on the site.
- **Text** - Other users' activity, shelf content, and search results are represented by text.
- **Images** - A simple image of a movie shelf is placed on the login screen.
- **Login** - Input box for username and password, and a submit button for "log in" and "sign up."
- **Database** - The search results on edit-shelf.html represent generated search data from The Movie Database (TMDB).
- **WebSocket** - Other users' activity on the home page represents realtime additions and removals from other users' shelves.

### CSS Deliverable
For this deliverable I properly styled the application into its final appearance.
- **Header, footer, and main content body**. Uniquely patterned consistent header design!
- **Navigation elements** - No more oddly colored links or underlines. The links become underlined only when the mouse hovers over them.
- **Responsive to window resizing** - My app looks great on all window sizes and devices. Items naturally scale, rearrange, or are removed based on the screen size.
- **Application elements** - Used good contrast and whitespace. I especially tried to use bordered windows and buttons when possible to clearly mark different parts of the app. Good balance of self-made and Bootstrap integration.
- **Application text content** - Consistent fonts, good spacing, and proper styling. Occasionally, different colors are used for emphasis.
- **Application images** - Images scale in response to screen size.
- **Animations** - On most pages of my website, various elements are animated in to give the website more *pizzaz*.

### JavaScript Deliverable
For this deliverable I implemented by JavaScript so that the application works for a single user. I also added placeholders for future technology.
- **Login** - When you press the login button after entering your username and password, it takes you to the voting page. This only works if the user has registered an account using the 'register' button, which requires you to enter a username that hasn't been used before (*as well as entering a password*). The register button takes you to the home page and stores your username and password in localStorage. *This will be replaced with a proper server in the future.* To successfully login, your username and password must match one included in localStorage.
- **Database** - On the edit-shelf page, the search box's results are updated based on your search. This uses a dummy set of movies, and will be replaced with TMDB.com's movie database in the future. Only movies directly from this list can be added/removed from your collection, so the dummy webSocket information on the home page will also utilize the database, since this applies for all users.
- **WebSocket** - I used the setInterval function, along with dummy sets of movieTitles, usernames, and decisions, to periodically post messages of users adding or removing movies on a certain format. This will be replaced with WebSocket messages later. This is viewable on the home page.
- **Application Logic** - On the home and shelf pages, your number of movies is updated based on information from the server. On the home page, the dummy WebSocket data only lists the ten most recent notifications, and automatically removes the oldest one if it runs out of room. On the Shelf page, it lists all movies stored on your personal Shelf. These movie titles, as well other characteristics (*Physical and/or Digital? What formats?*) are all stored in localStorage (*mentions of "the server" use localStorage and will be replaced with a real server in the future*). They are pulled from the server each time the site is loaded, meaning it updates properly based on your additions and removals. These will be replaced with the server later. Your shelf is edited on the edit-shelf page, which adds or removes a selected movie from your Shelf, and pushes changes to the server. The buttons on edit-shelf are responsive and are only selectable when certain conditions have been met (*a result from the search results has been clicked, and for the add button specifically, at least one checkbox has been clicked*). The login/register functionality will also use a server.

### Service Deliverable
For this deliverable I added backend endpoints that receives changes made to users' shelves & shelfStats and returns the data when it's requested.
- **Node.js/Express HTTP service** - done!
- **Static middleware for frontend** - done!
- **Calls to third party endpoints** - the search results on my *edit-shelf* page come from TMDB: The Movie DataBase. This allows you to add any movie on the database into your shelf.
- **Backend service endpoints** - Placeholders for a user's shelf and shelfStats objects being stored in the database. Endpoints for receiving the shelf & shelfStats data, and endpoints for updating this data.
- **Frontend calls service endpoints** - what the fetch broski (I used fetch to call my backend services).

### DB deliverable
For this deliverable I stored each user's individual shelfStats and shelfContent objects in the database.
- **MongoDB Atlas database created** - done!
- **Endpoints for data** - My stubbed out endpoints now process the data and send it to Mongo.
- **Stores data in MongoDB** - done!

### Login Deliverable
For this deliverable I associate the shelfContents and shelfStats objects with the logged in user.
- **User registration** - Creates a new account in the database.
- **Existing user** - Stores the shelfContents and shelfStats under the same user if the user already exists.
- **Use MongoDB to store credentials** - Stores user, their shelfContents, and their shelfStats.
- **Restricts functionality** - You cannot edit a shelf until you have logged in.

### WebSocket Deliverable
For this deliverable I used webSocket to update users' additions and removals to their shelf in real time, viewable on the home page.  
- **Backend listens for WebSocket connection** - done!
- **Frontend makes WebSocket connection** - done!
- **Data sent over WebSocket connection** - done!
- **WebSocket data displayed** - User additions and removals to their shelf display in real time, viewable on the home page.  
