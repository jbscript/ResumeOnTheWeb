"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Command = {
  command: string;
  output: string | React.ReactNode;
};

export default function HackerMode() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Command[]>([
    {
      command: "whoami",
      output: "{'>'} Jabir Jaleel – Full-Stack Developer",
    },
  ]);
  const [showCursor, setShowCursor] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      processCommand();
    }
  };

  const processCommand = () => {
    const command = input.trim().toLowerCase();
    let output: string | React.ReactNode =
      "{'>'} Command not found. Type 'help' for available commands.";

    if (command === "help") {
      output = (
        <div className="space-y-1 text-green-400">
          <p>{">"} Available commands:</p>
          <p className="pl-4">whoami - Display basic information</p>
          <p className="pl-4">ls - List sections</p>
          <p className="pl-4">cat projects - View projects</p>
          <p className="pl-4">cat about - View about me</p>
          <p className="pl-4">cat contact - View contact information</p>
          <p className="pl-4">clear - Clear the terminal</p>
          <p className="pl-4">help - Show this help message</p>
        </div>
      );
    } else if (command === "whoami") {
      output = (
        <div className="space-y-1 text-green-400">
          <p>{">"} Jabir Jaleel – Full-Stack Developer</p>
          <p>{">"} Specializing in React, Next.js, and Node.js</p>
          <p>{">"} Type 'help' for available commands</p>
        </div>
      );
    } else if (command === "ls") {
      output = (
        <div className="space-y-1 text-green-400">
          <p>{">"} Contents:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 pl-4">
            <span className="text-blue-400">projects/</span>
            <span>about.md</span>
            <span>contact.md</span>
          </div>
        </div>
      );
    } else if (command === "cat projects") {
      output = (
        <div className="space-y-3 text-green-400">
          <p>{">"} Projects:</p>
          <div className="space-y-2 pl-4">
            <div>
              <p className="text-yellow-400 font-bold">E-Commerce Platform</p>
              <p>
                A full-stack e-commerce solution with Next.js and Stripe
                integration.
              </p>
              <p className="text-blue-400">
                Technologies: Next.js, Stripe, TypeScript
              </p>
            </div>
            <div>
              <p className="text-yellow-400 font-bold">AI Content Generator</p>
              <p>
                An AI-powered application that generates marketing content using
                OpenAI's GPT-4.
              </p>
              <p className="text-blue-400">
                Technologies: React, OpenAI, Node.js
              </p>
            </div>
            <div>
              <p className="text-yellow-400 font-bold">Portfolio Website</p>
              <p>
                A creative portfolio with three switchable modes, showcasing my
                work and skills.
              </p>
              <p className="text-blue-400">
                Technologies: Next.js, Tailwind CSS, Framer Motion
              </p>
            </div>
          </div>
        </div>
      );
    } else if (command === "cat about") {
      output = (
        <div className="space-y-2 text-green-400">
          <p>{">"} About Me:</p>
          <div className="pl-4 space-y-2">
            <p>
              I'm Jabir Jaleel, a Full-Stack Developer with a passion for
              creating elegant, efficient, and user-friendly web applications.
            </p>
            <p>
              With over 5 years of experience in web development, I specialize
              in React, Next.js, and Node.js.
            </p>
            <p className="text-yellow-400 font-bold">Skills:</p>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-blue-400">Frontend:</p>
                <ul className="list-disc list-inside">
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Framer Motion</li>
                </ul>
              </div>
              <div>
                <p className="text-blue-400">Backend:</p>
                <ul className="list-disc list-inside">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (command === "cat contact") {
      output = (
        <div className="space-y-2 text-green-400">
          <p>{">"} Contact Information:</p>
          <div className="pl-4 space-y-1">
            <p>
              I'm always open to new opportunities and collaborations. Feel free
              to reach out!
            </p>
            <p>
              Email: <span className="text-blue-400">jabir@example.com</span>
            </p>
            <p>
              LinkedIn:{" "}
              <span className="text-blue-400">linkedin.com/in/jabirjaleel</span>
            </p>
            <p>
              GitHub:{" "}
              <span className="text-blue-400">github.com/jabirjaleel</span>
            </p>
          </div>
        </div>
      );
    } else if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    setHistory([...history, { command, output }]);
    setInput("");
  };

  return (
    <div
      className="min-h-screen bg-black text-green-500 font-mono p-4 pt-20"
      onClick={handleTerminalClick}
    >
      <div
        ref={terminalRef}
        className="max-w-4xl mx-auto h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-green-800 scrollbar-track-black"
      >
        {/* Terminal Header */}
        <div className="mb-6">
          <pre className="text-green-500">
            {`
 _____     _     _        _       _         _ 
|  _  |___| |___| |_ ___|_|___ _| |___ ___| |
|     |  _| | .'| '_|  _| | . | . | -_| -_| |
|__|__|_| |_|__,|_,_|_| |_|___|___|___|___|_|
                                             
`}
          </pre>
          <p className="mb-2">
            Welcome to my terminal portfolio. Type 'help' for available
            commands.
          </p>
          <div className="h-px bg-green-800 w-full my-2"></div>
        </div>

        {/* Command History */}
        <div className="space-y-4">
          <AnimatePresence>
            {history.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-1"
              >
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">$</span>
                  <span>{item.command}</span>
                </div>
                <div className="pl-4">{item.output}</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Input Line */}
        <div className="flex items-center mt-4">
          <span className="text-green-400 mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            className="bg-transparent border-none outline-none text-green-500 w-full"
            aria-label="Terminal input"
          />
          <span
            className={`h-5 w-2 bg-green-500 ${
              showCursor ? "opacity-100" : "opacity-0"
            } transition-opacity duration-100`}
          ></span>
        </div>
      </div>
    </div>
  );
}
