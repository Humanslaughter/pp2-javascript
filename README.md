# PP2 JavaScript: Rock Paper Scissors

![smartmockups_lohuqutx](https://github.com/Humanslaughter/pp2-javascript/assets/122393963/0bbd744e-eb97-4cd1-8903-80f784ee0f6f)

A rock, paper, scissors game in which the player goes against the computer.<br>
The player chooses between three options on the screen while the computer then selects its option at random as soon as the player has made their move. The first to reach 10 points wins and the winner gets a point added to the scoreboard. After reaching 10 points, the game and scores will then restart, and a new game starts when the player makes a new move.

[Play Rock Paper Scissors](https://humanslaughter.github.io/pp2-javascript/)

Game Rules:
- Rock beats Scissors.
- Scissors beat Paper.
- Paper beats Rock.

---

## Contents

* [User Stories](#user-stories)

* [Features](#features)
  * [Header](#header)
  * [Instructions](#instructions)
  * [Scoreboard](#scoreboard)
  * [Game Area](#game-area)
  * [Text Display](#text-display)
  * [Player Choices](#player-choices)

* [Design](#design)
  * [Color Scheme](#color-scheme)
  * [Typography](#typography)

* [Technologies Used](#technologies-used)
  * [Languages](#languages)
  * [Frameworks, Programs & Libraries](#frameworks-programs--libraries)

* [Testing](#testing)
  * [Lighthouse Results](#lighthouse-results)
  * [Validator Testing](#validator-testing)
  * [Known Bugs & Issues](#known-bugs--issues)

* [Deployment & Local Development](#deployment--local-development)
 	* [Local Development](#local-development)
  		* [How To Fork](#how-to-fork)
  		* [How To Clone](#how-to-clone)

* [Credits](#credits)
  * [Code](#code)
  * [Media](#media)

---

## User Stories
- As a player - I want to play a game of rock, paper, and scissors against an automated opponent.
- As a player - I'm able to read the rules of the game.
- As a player - I can make a choice by clicking a button that signifies rock, paper, or scissors.
- As a player - I can expect the computer to return with a choice of rock, paper, or scissors.
- As a player - I want to be able to see how many points I have so far.
- As a player - I want to be able to see who won or if it's a tie after each choice.
- As a player - I want to be able to see the total score of my winnings after each round.
- As a player - I want to be able to play again when I win or lose.

## Features

### Header
- Includes the name "Rock-Paper-Scissors".

![Header](https://github.com/Humanslaughter/pp2-javascript/assets/122393963/b5f57b17-638d-48b2-96cb-5af246278907)

### Instructions
- Displays the rules of the game with icons.

![Instructions](https://github.com/Humanslaughter/pp2-javascript/assets/122393963/6461817e-631a-4d07-9653-3b96767eeef5)

### Scoreboard
- Displays how many games the player and computer have won.

![Scoreboard](https://github.com/Humanslaughter/pp2-javascript/assets/122393963/6f01939c-4245-476f-b526-6731e7136562)<br>
![Scoreboard 2](https://github.com/Humanslaughter/pp2-javascript/assets/122393963/59dceee8-6608-4f09-ae45-15de7dac5a94)

### Game Area
- Displays the score and choices for the player and computer.

![Game Area](https://github.com/Humanslaughter/pp2-javascript/assets/122393963/c77e23a5-b631-412f-88ed-13c1896483a8)
![Game Area 2](https://github.com/Humanslaughter/pp2-javascript/assets/122393963/c7f0bf74-b81a-40cb-952a-944ec8b163e6)

### Text Display
- Displays how many points are needed to win at the beginning. When the game starts, it changes to display the winner of each round or if it's a tie, and at the end of each game, it displays the winner.

![Display Text - First To 10](https://github.com/Humanslaughter/pp2-javascript/assets/122393963/2493af89-0e90-4882-b210-debd74428792)<br>
![Display Text - Computer Won](https://github.com/Humanslaughter/pp2-javascript/assets/122393963/8d23e723-99d6-4373-8b56-d2674172f182)<br>
![Display Text - Computer Won The Game](https://github.com/Humanslaughter/pp2-javascript/assets/122393963/0335abaf-a4af-4f0b-a783-80d5bac6c612)<br>
![Display Text - Player Won](https://github.com/Humanslaughter/pp2-javascript/assets/122393963/52bb26a9-d8fb-464c-9e64-023d04396296)<br>
![Display Text - Player Won The Game](https://github.com/Humanslaughter/pp2-javascript/assets/122393963/8f2cb211-f1ac-4180-a95d-9b2a1895fe45)<br>
![Display Text - Tie](https://github.com/Humanslaughter/pp2-javascript/assets/122393963/92324182-e67c-4996-bb64-5a6d28e9f699)

### Player Choices
- Displays three buttons with icons for "rock", "paper", and "scissors" that the player can click on to make a move.

![Player Choices](https://github.com/Humanslaughter/pp2-javascript/assets/122393963/cbae2e73-f9d5-4f64-b03c-b5e95b755e54)

## Design

### Color Scheme
I used colors that would have a good contrast for easy readability but also make it a bit more fun to look at than just having everything be white, gray, and black.<br>
  - Background color - WhiteSmoke #F5F5F5, RGB(245,245,245).<br>
  - Text color - #3A3A3A, RGB(58,58,58).

![Skärmbild 2023-11-03 035334](https://github.com/Humanslaughter/pp2-javascript/assets/122393963/64930e43-28c9-48b1-b3eb-6ce684a310ff)

### Typography
Imported from Google Fonts.
- Londrina Sketch - used for the heading.

![Skärmbild 2023-11-03 033708](https://github.com/Humanslaughter/pp2-javascript/assets/122393963/0ffa2ac4-4630-4cec-a418-73c351c7033e)

- Bebas Neue - used for all other text.

![Skärmbild 2023-11-03 033726](https://github.com/Humanslaughter/pp2-javascript/assets/122393963/8e93e899-1036-4fbd-960f-8f2d36e27dc5)

## Technologies Used

### Languages
- HTML, CSS, and JavaScript.

### Frameworks, Programs & Libraries
- GitHub/GitHub Pages.
- Git.
- Gitpod.
- Google Fonts.
- Font Awesome.

## Testing

Testing was done throughout the development. Chrome Dev Tools is used to make sure that the responsiveness, design, layout, and score system are working for different screen sizes and browsers. The deployed website is tested on Chrome, Opera GX, and Microsoft Edge on both desktop and mobile. It looks and works as intended for the most part (see known issues and bugs for more details), a friend of mine also tested the website and said that it looks good and works well.

- Player Buttons<br>
  Each button works as expected when clicked on.<br>
  - Rock button - displays the rock icon as the player's choice when clicked.
  - Paper button - displays the paper icon as the player's choice when clicked.
  - Scissors button - displays the scissors icon as the player's choice when clicked.

- Computer Random Choice<br>
  Is working as intended. The computer picks between "rock", "paper", and "scissors" icons at random when the player makes their move.

- Score System, Scoreboard, Winner Display & Game Restart<br>
  Is working as intended. When both the player and computer have made their move, a text displays correctly according to who won or if a tie. If the player wins, the player score gets increased by one, if the computer wins, the computer score gets increased by one.
  Whenever the player or computer reaches a score of 10, a text is displayed according to who won the game. The scores then reset back to 0, and a point is added to the scoreboard for the winner. A new round starts when the player clicks any of the three buttons.

### Lighthouse Results
![Lighthouse Desktop](https://github.com/Humanslaughter/pp2-javascript/assets/122393963/76451f4d-d276-4792-af76-afeea65366b8)<br>
Desktop

![Lighthouse Mobile](https://github.com/Humanslaughter/pp2-javascript/assets/122393963/ab5c8ffc-1013-4df0-8563-d08074f4a389)<br>
Mobile

### Validator Testing
- HTML [W3C](https://validator.w3.org/nu/)<br>
  No errors.<br>
  [Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fhumanslaughter.github.io%2Fpp2-javascript%2F)

- CSS [Jigsaw](https://jigsaw.w3.org/css-validator/)<br>
  No errors.<br>
  [Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fhumanslaughter.github.io%2Fpp2-javascript%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)

- JS [JSHint](https://jshint.com/)<br>
  No errors.

### Known Bugs & Issues
- On mobile (Galaxy S22 Ultra)
  - Opera GX Browser:<br>
    Instruction text (at the top of the screen under the heading) becomes a little bigger every time the text "Player/Computer won the game!" comes up when a winner is announced (that text also becomes a little bigger), which makes everything else jump down a little on the screen. It goes back to normal again when you click on one of the buttons to start a new round, and the text "Player won/Computer won/Tie!" comes up again.
  - Microsoft Edge Browser:<br>
    The text "Player/Computer won the game!" is a little bigger than the text for "Player won/Computer won/Tie!" which makes the text "What's your move?" and buttons under it jump down a little. It goes back to normal when you click on one of the buttons to start a new round, and the text "Player won/Computer won/Tie!" comes up again.

    Not sure what's the cause for these issues, it doesn't show up while using Chrome Dev Tools on desktop or while using the Chrome browser on mobile.

- Rock Button<br>
  - On some screen sizes, the button is a little bigger/smaller due to the size of the icon itself. I tried to fix the padding for it on as many screen sizes as possible via media queries.

## Deployment & Local Development

Deployed via GitHub Pages:
  1. Navigate to the settings for the GitHub repository.
  2. On the menu to the left, click on "Pages".
  3. From the "Source" section drop-down menu under "Build and deployment", select "Deploy from a branch".
  4. From the section "Branch", select the options "main" and "/(root)" then click save.
  5. After you click save, the page will automatically refresh and a statement will be displayed stating the deployment was successful.

### Local Development

#### How To Fork

Fork the repository:<br>
  1. Log in/sign up to GitHub.
  2. Go to the repository for this project [pp2-javascript](https://github.com/Humanslaughter/pp2-javascript).
  3. Click the 'Fork' button in the top right corner.

#### How To Clone

Clone the repository:<br>
  1. Log in/sign up to GitHub.
  2. Go to the repository for this project [pp2-javascript](https://github.com/Humanslaughter/pp2-javascript).
  3. Click the code button, select which one you want to clone with (HTTPS, SSH, or GitHub CLI), and copy the link shown.
  4. Open the terminal in a code editor and change the current working directory to a location of your choice to use for the cloned directory.
  5. Type 'git clone' in the terminal, paste the link that you copied in step 3 and then press enter.

## Credits

### Code
- [ChatSonic](https://writesonic.com/chat) - Used to get some tips on how I could get my score- and scoreboard system to work as it should after days of trying and not being able to make it function properly.
- Used this [tutorial](https://javascript.plainenglish.io/building-a-rock-paper-scissors-game-with-javascript-bce23d39509d) as a base/starting structure for the script to make the player and computer choices work while using Font Awesome icons as options.

### Media
- Icons - [Font Awesome](https://fontawesome.com)
- Favicon - [Gauger.io](https://gauger.io/fonticon/)
