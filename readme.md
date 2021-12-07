# Milestone-2 Project / Pair the animals /
## Interactive Frontend Develpment Project

![page mockup](/docs/Mockup/mockup.png)

View the live project [here](https://syler11.github.io/MS2-Matching-Game/).

## Table of Content

1. [Project Goals](#project-goals)
2. [UX](#user-experience)
3. [Features](#features)
4. [Technologies Used](#technologies-used)
5. [Testing](#testing)
6. [Bugs](#Bugs-found-and-resolved-during-development)
7. [Deployment](#deployment)
8. [Credits](#credits)


## **1. Project Goals**

### Website owner goals
* Create an easy game what can be played for kids
* The goal is too create an intuitive game what can be understand even without able to read the rules
* To engage users to send feedback for future development

### User goals
* Enjoy the game while playing
* To try all levels
* Learn the rules before the game (age permitted)
* Receive interactive feedback from the game

## **2. UX - User Experience**

### User stories

#### First-time users
1. As first-time user, I want to play and enjoy the game.
2. As first-time user, I want to understand the objective of the game.
3. As first-time user, I want to try all different level.
4. As first-time user, I want to able to play on any devices reagrdless the screen size. 
5. As first-time user, I want to see able to follow my progress with steps and score count. 
6. As first-time user, I want to see how long does it take to complete the game. 
7. As first-time user, I want to navigate the website easily. 

##### Regular visitor
1. As a regular visitor, I want to mesaure my time to see my progress.
2. As a regular visitor, I want to select different level to challenge myself.
3. As a regular visitor, I want to send feedback of the game. 

#### Site owner
1. As a site owner, I want to receive feedback from the users easily. 

### Scope

The project scope was outlined as followed:
* Easily understood navigation whent he user arrives to the main page.
* How-to section explains the rules of the game.
* Level selector so the user can launch the game.
* How-to section disappers and game board loading after game level selected. 
* Timer starting when the game is selected.
* Steps count as user turning the cards.
* Score count as user matching he cars.
* Reload button to to reset the game.
* Need help? button if the user needs help. 
* Feedback once the game is completed. 
* Contact page to leave feedback to the website owner.
* 404 page with return home button if the user tries to navigate to page which doesn't exist. 

Future improvements:
* Website to memorize user previous score and times and provide with personal best time. 
* Website to challenger users against each other time as per their age. 
* Audio animation when cards a clicked and matched and game completed. 

### Design
The goal of the design was to create a visually appealing game which attractive for younger kids. 

#### Colours:
**Background colour:** #000 with a canvas image covering the body area.  
**Font colour:** default #fff and rgb(129, 58, 8); for Nav elements, Horizontal line and Level Selector

#### Fonts:
My fontfamily choice is "Fuzzy Bubbles" with Sans Serif fall back. Credit to Google Font. 
#### Imagery:
I used a canvas background picture what give an atractive landing page for users to arrive.   
Credit to Rawpixel for imagery.     
All Aninal cards were selected to create a fun and appealing experince for users. 

#### Structure:
The website consist of the 2 separated pages namely index.html and contact.html and a 404.html to guide people back to the main website.   
Having small kids myself (4yrs, 8 yrs)I have taken their opining on board when selecting the design to make sure they would be happy to play the game. 

#### Wireframes:
Wireframes are uploaded in pdf form for Desktop, Tablet and Mobile screensizes. 
Click on link below.  
[Desktop wireframe](https://syler11.github.io/MS2-Matching-Game/docs/wireframes/MS2MatchingGameDesktop.pdf)  
[Tablet wireframe](https://syler11.github.io/MS2-Matching-Game/docs/wireframes/MS2MatchingGameTablet.pdf)  
[Mobile wireframe](https://syler11.github.io/MS2-Matching-Game/docs/wireframes/MS2MatchingGameMobile.pdf)  

## **3. Features**

### Home page (index.html)
#### Header
* Contains the navigation bar 
* Main title
* Description of the website
 
![feature 1](/docs/features/feature1.png)

#### Main section
* Contains the how to section which outline the rules of the game

![feature 2](/docs/features/feature2.png)

* Contains the Level Selector what will launch the games by clicking either on the Easy, Medium or Hard level.

![feature 3](/docs/features/feature3.png)

#### Footer 
* Contains the Social Media icons what would navigate the users to the website media page. 

![feature 4](/docs/features/feature4.png)

#### Game Board
* Contains the in-game level selector.
* Contains the timer to measure completion time
* Contains the playing cards as per the level the user selected. 6 cards for easy, 12 cards for medium and 18 cards for hard level.
* Contains a reload button what resets the selected game.
* Contains a Need Help button what navigates to the contact.html page. See further below. 

![feature 5](/docs/features/feature5.png)

#### Game result feedback
* Contains the game result to the user and also some teasing to try another Levels. 

![feature 6](/docs/features/feature6.png)

### Contact page (contact.html)
* Contains the email form what needs to be completed and submitted to send feedback to the website owner.  
Validation is added to the input fields so empty message cannot be sent without valid Name, Email address and Message fields. 

![feature 7](/docs/features/feature7.png)

### 404 Page (404.html)
* Contains feedback to teh user and something didn't go according to the plan.
* Contains a Return to Game button what makes it easy for the user to navigate back to the main page. 

![feature 8](/docs/features/feature8.png)

## **4. Technologies used:**
The following languages and framework were used to create this project.  
* HTML5 – provided the main structure of the website.
* CSS3 – provided the styling of the website and the overall content.
* Javascript - Vanilla Javascript was used throughout the whole project
* Email.js provided the framework for the email function 
* Bootstrap 5.0.0 – provided the responsive structure and some other component such as responsive layout, dropdown menu, and form. 
* Balsamiq - development tool was used to create the wireframe for the website. 
* VS Code - VS Code was used for version control to commit and Push to GitHub.
* GitHub - GitHub is used to store the projects code after being pushed from VS Code.

## **5. Testing:**

Games was developed on Windows OS in Goggle Chrome and it was tested in Miscrosoft Edge.  
It was also tested on Apple iPad and iPhone 12.   
All fully functioning and fully responsive.
My kids aged 4 and 8 were appropiate testing subjects and both of them managed to complete the game and navigate on the website. 

### HTML Validation

![index.html Validation](/docs/validation/index.html%20validation.png)  
![contact.html Validation](/docs/validation/contact.html%20validation.png)  
![404.html Validation](/docs/validation/404.html%20validation.png)

### CSS Validation 

![style.css Validation](/docs/validation/style.css%20validation.png)

### Accessibility 

![index.html Accessibility Certificate](/docs/validation/index.html%20accessibility.png)
![contact.html Accessibility Certificate](/docs/validation/contact.html%20accessibility.png)
![404.html Accessibility Certificate](/docs/validation/404.html%20accessibility.png)

### Chrome Lighthouse Test

1. Opened up my deployed webpage in a new incognito tab in Google Chrome.  
2. I used CTRL+SHIFT+I key command to prompt the Developer Tool.
3. I navigated to the Lighthouse menu option (usually the option is not visible but clicking on the  >> sign will reveal it)
4. I generated a report for the index.html page 

![Google Lighthouse report](/docs/validation/index.html%20Google%20Lighthouse%20Performace.png)

### JS Hint Validation
#### Main Js Validation
![main.js Validation](/docs/validation/main.js-validation.png) 

#### Easygame.js Validation 
![easygame.js Validation](/docs/validation/easygame.js-validation.png) 
#### Mediumgame.js Validation
![mediumgame.js Validation](/docs/validation/mediumgame.js-validation.png) 

#### Hardgame.js Validation
![hardgame.js Validation](/docs/validation/hardgame.js-validation.png) 

### User stories testing

#### First-time users
1. As first-time user, I want to play and enjoy the game.  
User can start the game by selecting any level to play.
2. As first-time user, I want to understand the objective of the game.  
User can find the game rules in the how-to section on the main page.
3. As first-time user, I want to try all different level.  
User can select any level when arrives to the main page or after in-game.
4. As first-time user, I want to able to play on any devices reagrdless the screen size.  
User can play the game onany screen sizes as the website is fully responsive.  
5. As first-time user, I want to see able to follow my progress with steps and score count.  
User can follow their progress via the steps and score count right below the cards. 
6. As first-time user, I want to see how long does it take to complete the game.
User can monitor their time via the timer which also stops when the game is completed. 
7. As first-time user, I want to navigate the website easily. 
The navigation bar allows the user to intuitively and easily move between the various pages.

##### Regular visitor
1. As a regular visitor, I want to mesaure my time to see my progress.  
User can measure his time everytime when competes the game. Timer will pause. 
2. As a regular visitor, I want to select different level to challenge myself.  
User can select any level when arrives to the main page or after in-game. 
3. As a regular visitor, I want to send feedback of the game.  
User can easily send emails via the contact.html page email form. 


#### Site owner
1. As a site owner, I want to receive feedback from the users easily.    
Site woner can easily receive emails via the contact.html page email form. 

## **6. Bugs:**

* Animal cards didn't display all 6 cards in a lime but pushed one card below.  
Solution: once class="row" was applied to the div all 6 cards displayed in a row.

* The social icons and Main Nav werent displaying correctly especially at smaller screen sizes.  
Solution: Media queries were applied to adjust sizing and margin to fit everything in the same row.

* The original question mark card didn't look good with the rest of the page design so I changed halfway through the project.   
Solution: higher contast question mark card was used.

 ![Old / New Question Mark](/assets/images/question-markold-new.png) 

* Font color for nav and Level Selector was changed as it didn't pass the Accessibility contrast test.  
Solution: #chocolate was used originally but was changed to rgb(129, 58, 8); for higher contrast.  

* Javascript was used index.html page at the Need Help button to makes sure < ahref wouldn't used as a redundant link.  
Solution: /* Function added to avoid two a href link on the same page - Credit to www.stackoverflow.com */  
document.getElementById("contactPage").addEventListener("click", gotoContactPage);  

function gotoContactPage() {  
    window.location.assign("https://syler11.github.io/MS2-Matching-Game/contact.html");  
}

* Towards the second half of the project the main.js was becoming too big so the file was separated into few smaller files what handles the game functionalities.  
 Solution: easygame.js, mediumgame.js and hardgame.js added to asset folder.

* User was able to open 3 cards in the game.   
 Solution:  Math.min was used to only allow two cards at the time. 

* JS Hint flagged up a redundant semi colon at validation so it was removed in easygame.js / mediumgame.js and hardgame.js.  
Solution: semi colon was deleted

* After duplicating the the hardgame.js to create mediumgame.js and easygame.js there were lot of issues preventing the code run.  
Solutions: All name changes were added correctly so the game would function properly. 

* In game selector wasn't functioning as the exisitng fnction couldn't load the game and giving error in console.
Many function was tested e.g. reload page and reset board game but after page reload the code wasn't executing anymore.     
Soltuion: Clearing the gameboard div only and relaunching the gameboard solved the issue.





## **7. Deployment:**

### GitHub Pages  
The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the GitHub Repository  
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.  
3. Alternatively Click Here for a GIF demonstrating the process starting from Step 2.
4. Scroll down the Settings page until you locate the "GitHub Pages" Section.
5. Under "Source", click the dropdown called "None" and select "Master Branch".
The page will automatically refresh.
6. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

### Clone a Repository* 
1. On GitHub, navigate to the main page of the repository.
2. Above the list of files, click  Code.
3. To clone the repository using HTTPS, under "Clone with HTTPS", click . To clone the repository using an SSH key,   
including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click.   
To clone a repository using GitHub CLI, click Use GitHub CLI, then click.
4. Open Git Bash.
5. Change the current working directory to the location where you want the cloned directory.  
6. Type git clone, and then paste the URL you copied earlier.  
7. Press Enter to create your local clone.

### Browser Preview
Browser preview was used between commits using the following steps...

1. Open terminal in GitPod. 
2. With Ctrl+C the cursor was prompt.
3. python3 -m http.server command line was used to open up a private port.
4. Once the port 8000 was serving the page was opened by clicking on the Open Browser tab.

### VS Code
My personal preference is Code. What was used during this project opposed to MS1 when Gitpod was used.
Once I have connected to my Github account all commit were pushed using VS Code.


### Email JS
1. Create an account at emailjs.com 
2. In the integration screen in the emailjs dashboard, note your userid
3. Create a 
 email service in the Email Services section and note the id
4. Create a email template in the Email templates section and note the id
5. Update the script sendEmail.js, method sendMail with your user id, email service id and email template id

## **8. Credits:**
### Media Credits
Credit to https://codeinstitute.net/ for the lesson on email.js  
Credit to https://favicon.io/favicon-converter/ for the Favicon    
Credit to https://websitemockupgenerator.com/ for the Website mockup picture    
Credit to https://fontawesome.com/ for the Icona displayed on the website    
Credit to https://validator.w3.org/ for the html and css validation  
Credit to https://wave.webaim.org/ for accessibility check for the website  
Credit to https://www.emailjs.com/ for email sending functionality for the website   
Credit to https://www.google.com/ for the Lighthouse report  
Credit to https://stackoverflow.com/ for being a valuabe source for various function e.g. in-game selector buttons /Clearing div content/  
Credit to https://www.youtube.com/watch?v=tjyDOHzKN0w for Ania Kubow for the base of the card game  
Credit to https://www.youtube.com/watch?v=dtKciwk_si4 for Florin Pop for various function (Step & Score count among many other things)  
### Image credits
https://www.rawpixel.com/ - background.jpg  
https://www.rawpixel.com/ - question-mark.png  
https://www.rawpixel.com/nunny - dog.png  
https://www.rawpixel.com/nunny - cat.png  
https://www.rawpixel.com/ - turtle.png  
https://www.rawpixel.com/ - lion.png  
https://www.rawpixel.com/ - elephant.png  
https://www.rawpixel.com/ - kangaroo.png  
https://www.rawpixel.com/ - monkey.png  
https://www.rawpixel.com/ - giraffe.png  
https://www.rawpixel.com/ - frog.png  
https://www.rawpixel.com/ - monkey.png  


### Acknowledgment

I would like to thank my kids who provided me feedback during the projects to make sure they would have fun while they play. They had. :)  
I would like to thank my wife to put up with me when I basically disappeared for a week to finish the project on time after the tight time frame between my course reactivation and MS2 assessment deadline.   
I would like to thank my mentor Mo Shami for the guidance. 

