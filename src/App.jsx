// Code by Abdullah Hilal***********

import { useState } from "react";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
//
import instagramLogo from "./assets/output-onlinepngtools.png";
import twitterLogo from "./assets/output-twitter.png";
//
// The main App
let App = () => {
  let allQuotes = [
    {
      id: 1,
      author: "Socrates",
      quote: "The more you know, the more you realize you know nothing.",
    },
    {
      id: 2,
      author: "Babe Ruth",
      quote: "Every strike brings me closer to the next home run.",
    },
    {
      id: 3,
      author: "Arthur Ashe",
      quote: "Start Where You Are. Use what you have. Do what you can.",
    },
    {
      id: 4,
      author: "Dorothy Parker",
      quote: "Creativity is a wild mind and a disciplined eye.",
    },
    {
      id: 5,
      author: "Zig Ziglar",
      quote:
        "You don`t have to be great to start, but you have to start to be great.",
    },
    {
      id: 6,
      author: "Will Rogers",
      quote: "Don`t let yesterday take up too much of today",
    },
    {
      id: 7,
      author: "L. Peter Deutsch",
      quote: "To iterate is human, to recurse divine.",
    },
    {
      id: 8,
      author: "Carol Burnett",
      quote: "When you have a dream, you`ve got to grab it and never let go",
    },
    {
      id: 9,
      author: "Tim Berners-Lee",
      quote:
        "The web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.",
    },
    {
      id: 10,
      author: "C.S. Lewis",
      quote:
        "You are never too old to set another goal, or to dream a new dream.",
    },
    {
      id: 11,
      author: "Albert Einstein",
      quote: "Play is the highest form of research.",
    },
    {
      id: 12,
      author: "Albert Einstein",
      quote: "Make everything as simple as possible, but not simpler",
    },
    {
      id: 13,
      author: "Kahlil Gibran",
      quote:
        "If you reveal your secrets to the wind, you should not blame the wind for revealing them to the trees",
    },
    {
      id: 14,
      author: "Mark Twain",
      quote: "The secret of getting ahead is getting started",
    },
    {
      id: 15,
      author: "Gordon B. Hinckley",
      quote: "Without hard work, nothing grows but weeds",
    },
    {
      id: 16,
      author: "Albert Einstein",
      quote:
        "We cannot solve our problems with the same thinking we used when we created them",
    },
    {
      id: 17,
      author: "Robert H. Schuller",
      quote: "Today`s accomplishments were yesterday`s impossibilities",
    },
    {
      id: 18,
      author: "Babe Ruth",
      quote: "Every strike brings me closer to the next home run",
    },
    {
      id: 19,
      author: "Erica Jong",
      quote: "If you don`t risk anything, you risk even more",
    },
    {
      id: 20,
      author: "Jalal ad-Din Muhammad Rumi",
      quote: "Sell your cleverness and buy bewilderment.",
    },
  ];
  //
  var colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];
  //

  var colorShuffles = colors[Math.floor(Math.random() * colors.length)];

  const [quotes, setQuotes] = useState(0);
  const [color, setColor] = useState(colorShuffles);

  const randomQuote = () => {
    const len = allQuotes.length;
    document.body.style.backgroundColor = colorShuffles;

    setColor(colorShuffles);
    setQuotes(Math.floor(Math.random() * len));

    console.log(`the current background color is ${color}`);
  };

  return (
    <main
      id="quote-box"
      className="flex justify-center flex-col max-w-[450px] min-w-[300px] p-7 rounded-lg bg-white"
    >
      <section>
        <FontAwesomeIcon className="opacity-95" icon={faQuoteLeft} size="4x" />
        <h1 style={{ color: color }} id="text" className="text-2xl">
          {allQuotes[quotes].quote}
        </h1>
        <p style={{ color: color }} className="text-right" id="author">
          - {allQuotes[quotes].author}
        </p>
      </section>
      <section className="w-full h-full flex flex-row-reverse justify-between items-center">
        <button
          style={{ background: color }}
          id="new-quote"
          className="w-[50%] p-2  rounded-lg text-white"
          onClick={randomQuote}
        >
          New quote
        </button>
        <div className="w-full flex justify-start items-start">
          <a id="instagram-quote" target="_top" href="">
            <img
              className="w-full w-full aspect-[3/2] object-contain"
              src={instagramLogo}
            />
          </a>
          <a
            id="tweet-quote"
            target="_top"
            href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Nothing%20is%20impossible%2C%20the%20word%20itself%20says%2C%20%E2%80%9CI%E2%80%99m%20possible!%E2%80%9D%22%20%E2%80%93Audrey%20Hepburn"
          >
            <img
              className="w-full w-full aspect-[3/2] object-contain"
              src={twitterLogo}
            />
          </a>
        </div>
      </section>
    </main>
  );
};
export default App;
