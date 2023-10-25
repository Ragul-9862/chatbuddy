import React, { useRef, useState } from "react";
import Header from "../Header/Header";
import Messages from "../Messages/Messages";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../Firebase/Firebase";
import {
  addDoc,
  collection,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import FlipMove from "react-flip-move";

export default function HomePage() {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);
  const  lastMessageDiv = useRef(null)

  const sendMessage = (e) => {
    e.preventDefault()
    addDoc(collection(db, "chats"), {
      sender: user?.displayName,
      message: input,
      time: serverTimestamp(),
    })
      .then(() => {
        setInput("");
        scrollToBottom();
  
      })
      .catch((err) => alert(err.message));
  };

  console.log(input);

  const [messages] = useCollection(
    query(collection(db, "chats"), orderBy("time", "asc"))
  );
  console.log(messages);
  


  const scrollToBottom = ()=>{
    lastMessageDiv.current.scrollIntoView({
      behaviour:"smooth",
    });
   
  };

  return (
    <div>
      <Header />
      <div className="max-w-2xl mx-auto mt-5 ">
        <div className="p-5">
          <FlipMove> 
          {messages?.docs?.map((message) => (
            <Messages
              key={message.id}
              sender={message.data().sender}
              message={message.data().message}
              time={message?.data()?.time?.toDate().getTime()}
            />
          ))}
          </FlipMove>
          <div ref={lastMessageDiv} className="mb-10"/>
        </div>
        <form className="flex justify-center fixed bottom-2 w-96 md:justify-center md:w-1/3 space-x-2">
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Enter a Message"
    className="lg:flex-1 outline-none bg-gray-200 p-3 rounded-lg"
  />
  <button
    onClick={sendMessage}
    disabled={!input}
    className="bg-green-400 text-sm text-white font-bold p-3 rounded-lg hover:scale-95 
     transition-all duration-200 ease-in-out disabled:bg-gray-200
      disabled:cursor-not-allowed"
  >
    Send
  </button>
</form>

      </div>
    </div>
  );
}
