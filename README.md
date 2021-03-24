# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Kordell M. Schrock**

Time spent: **5** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](your-link-here)
**Title Hover Styled Differently and 5 Buttons**
![](https://i.imgur.com/rf1oYo7.gif)

**3 Guesses and Your Out**
![](https://i.imgur.com/JpuJEXt.gif)

**Randomized Array Pattern**
![](https://i.imgur.com/0TFbuBa.gif)

**Beginning Speed**
![](https://i.imgur.com/keexhcl.gif)

**Ending Speed**
![](https://i.imgur.com/0y3ToNo.gif)

**Winning Game**
![](https://i.imgur.com/0beKKiP.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

*  [w3schools](https://www.w3schools.com/)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

When I got into implementing the optional features, it got complicated because you have to understand how the code works and how it calls the other functions. Whenever I got into a problem, I usually went to w3 schools to learn how to add the needed JavaScript code in order to implement the new features. 

Since I had a little background in JavaScript, I was able to get through the tutorial very quickly. For me, the most challenging feature that I implemented was giving the player three strikes. This was difficult because we had to keep track of the number of guesses the user had and reset them correctly when the user wins or losses. Then I took it a step further by adding a button to display the number of wrong guesses. Constantly updating the button to show the number of wrong guesses was hard because you have to update the button each time the user submitted an answer by calling the HTML element and replacing the guess variable. 

I thought this Memory Game was very fun and made it easy to understand the coding concepts built into the game. Also, exploring other resources like w3 schools was helpful to learn more about JavaScript.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

After completing this Memory game, I wondered how to make the static website more modular when changing the window’s dimensions (e.g., phone, tablet, and desktop). I think this would be helpful to understand because we live in a world of many technologies that have different screen sizes.

After running through this project, another question that got to me was how long does web development take from start to finish typically? Also, how does the industry spilt up the project in web development? By this I mean, front end vs. backend, and in general, how do they make their “sprints” for getting agile tasks done on time. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours, I would finish implementing the rest of the optional features. I would definitely try to implement the ticking clock! This would be very fun to code because it would be nice to have a challenge in the Game. Also, it makes the Game more fun to play. Then I would learn how to make the Game more modular when it comes to dimensions since people could play on tablets, phones, and desktops. After implementing the features into the Game, I would then change the static site to a dynamic site, so then we would build a backend to the main site. Then we could make a player leaderboard by showing the players who finished the fastest. Also, allow players to create memory card games. After having the backend set up, I would deploy the app on Heroku! Finally, after having the site live, I would add google analytics to track useful information on the site's traffic!



## License

    Copyright [Kordell M. Schrock]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

\ ゜o゜)ノ
