"use client";

import useAuth from "@/app/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChatMessage = ({ name, date, time, message, avatar, isAdmin }) => (
  <div className="flex items-start space-x-4 p-4 border-b border-gray-200">
    <div
      className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
        isAdmin ? "bg-blue-500" : "bg-green-500"
      } text-white`}
    >
      {avatar}
    </div>
    <div className="flex-grow">
      <div className="flex justify-between items-center">
        <span className="font-bold">{name}</span>
        <span className="text-xs text-gray-500">
          {date} {time}
        </span>
      </div>
      <div className="text-sm text-gray-500">{message}</div>
      <div className="flex items-center space-x-2 mt-2">
        <button className="text-gray-500 hover:text-gray-700">
          <i className="fas fa-reply"></i>
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  </div>
);

const ChatInput = () => (
  <div className="flex items-center p-4 border-t border-gray-200">
    <input
      type="text"
      placeholder="Type a message"
      className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
    />
    <button className="ml-4 text-gray-500 hover:text-gray-700">
      <i className="fas fa-smile"></i>
    </button>
    <button className="ml-2 bg-green-500 text-white rounded-lg p-2">
      <i className="fas fa-paper-plane"></i>
    </button>
  </div>
);

const ChatApp = () => {
  const messages = [
    {
      name: "User",
      date: "08/24/2022",
      time: "05:35 pm",
      message: "Hi I am a chat Participant",
      avatar: "U",
      isAdmin: false,
    },
    {
      name: "Admin",
      date: "10/13/2022",
      time: "05:59 pm",
      message: "Hello",
      avatar: "A",
      isAdmin: true,
    },
    {
      name: "James Bond",
      date: "10/20/2022",
      time: "10:10 am",
      message: "Hi this is Johnm",
      avatar: "JB",
      isAdmin: false,
    },
    {
      name: "Alice",
      date: "11/11/2022",
      time: "02:20 pm",
      message: "How is everyone doing?",
      avatar: "A",
      isAdmin: false,
    },
    {
      name: "Bob",
      date: "11/12/2022",
      time: "03:45 pm",
      message: "I am doing great, thanks!",
      avatar: "B",
      isAdmin: false,
    },
    {
      name: "Charlie",
      date: "11/13/2022",
      time: "04:15 pm",
      message: "Can we discuss the upcoming event?",
      avatar: "C",
      isAdmin: false,
    },
    {
      name: "David",
      date: "11/14/2022",
      time: "05:30 pm",
      message: "Sure, what do you need?",
      avatar: "D",
      isAdmin: false,
    },
    {
      name: "Eva",
      date: "11/15/2022",
      time: "06:00 pm",
      message: "Just some details about the venue.",
      avatar: "E",
      isAdmin: false,
    },
  ];

  useAuth();

  return (
    <main className="bg-[#26313c] h-screen flex items-center justify-center p-10">
      <div className="grid w-full h-full grid-cols-1 bg-white box-anim md:grid-cols-2">
        <div className="bg-[#16202a] text-white flex items-center justify-center flex-col p-10">
          <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div className="h-400 overflow-y-auto">
              {messages.map((msg, index) => (
                <ChatMessage key={index} {...msg} />
              ))}
            </div>
            <ChatInput />
          </div>
        </div>
        <div className="relative hidden md:block">
          <Link href="/">
            <Image
              className="object-cover"
              fill={true}
              src="/Gamesphere.png"
              alt="bg-image"
            />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ChatApp;
