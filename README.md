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
