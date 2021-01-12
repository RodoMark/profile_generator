"use strict";

// survey.js

/*
To help out our fellow users, let's create a quick survey app which asks the user a 
bunch of questions like their favourite music, activity, food, sport, etc. 
It will then generate a profile description for them to use online, 
like the example demonstrated above.
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = `What's your name? Nicknames are also acceptable :)
What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at!`.split(
  "\n"
);

const profile = {};

let i = 0;

rl.question(`${questions[i++]} `, (answer) => {
  profile.name = answer;
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question(`${questions[i++]} `, (answer) => {
    profile.activity = answer.toLowerCase();
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.question(`${questions[i++]} `, (answer) => {
      profile.music = answer;
      console.log(`Thank you for your valuable feedback: ${answer}`);

      rl.question(`${questions[i++]} `, (answer) => {
        profile.favouriteMeal = answer;
        console.log(`Thank you for your valuable feedback: ${answer}`);

        rl.question(`${questions[i++]} `, (answer) => {
          profile.favouriteFood = answer;
          console.log(`Thank you for your valuable feedback: ${answer}`);

          rl.question(`${questions[i++]} `, (answer) => {
            profile.sport = answer;
            console.log(`Thank you for your valuable feedback: ${answer}`);

            rl.question(`${questions[i++]} `, (answer) => {
              profile.superpower = answer.toLowerCase();
              console.log(`Thank you for your valuable feedback: ${answer}`);

              console.log(`${profile.name} loves listening to ${profile.music} while ${profile.activity}, devouring ${profile.favouriteFood} for brunch, prefers ${profile.sport} over any other sport, and is amazing at ${profile.superpower}.
  `);

              rl.close();
            });
          });
        });
      });
    });
  });
});
