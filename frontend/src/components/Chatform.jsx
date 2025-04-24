import React, { useRef } from 'react';

function Chatform({ setChatHistory }) {
  const inputRef = useRef();

  // To handle POST request
  const sendMessageToAPI = async (query) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }), // Send the message as JSON with the "query" key
      });

      if (!response.ok) {
        throw new Error('Failed to send message to the API');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error.message);
      return { reply: 'Error: Unable to reach API' }; // Fallback response
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = '';

   
    setChatHistory((history) => [
      ...history,
      { role: 'user', text: userMessage },
    ]);

    // Add placeholder for bot response
    setChatHistory((history) => [
      ...history,
      { role: 'model', text: 'Thinking.....' },
    ]);

    const botResponse = await sendMessageToAPI(userMessage);
    console.log(botResponse);
    

    // Update thinking... to actual message
    setChatHistory((history) => [
      ...history.slice(0, -1),
      { role: 'model', text: botResponse },
    ]);
  };

  return (
    <form
      className="flex items-center justify-between px-5 py-3 rounded-full border-1 border-gray-600"
      onSubmit={handleFormSubmit}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="messages..."
        required
        spellCheck='false'
        className="outline-none text-xs placeholder-gray-500 text-gray-900 w-full"
      />
      <button className="material-symbols-rounded bg-gray rounded-full text-white p-1 bg-[#2f05a1]">
        keyboard_arrow_right
      </button>
    </form>
  );
}

export default Chatform;































// import React, {useRef} from 'react'

// function Chatform({setChatHistory}) {
//   const inputRef = useRef();

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const userMessage = inputRef.current.value.trim();
//     if(!userMessage) return;
//     inputRef.current.value = '';
//     // console.log(userMessage)

//     setChatHistory((history) => [...history, {role: 'user', text: userMessage}])
//     setTimeout(() => setChatHistory((history) => [...history, {role: 'model', text: 'Thinking.....'}]), 600)
//   }

//   return (
//     <form action="#" className="flex items-center justify-between px-5 py-3 rounded-full border-1 border-gray-600" onSubmit={handleFormSubmit}>
//     <input ref={inputRef} type="text" placeholder="messages..." required  className="outline-none placeholder-gray-500 text-gray-900 w-full valid:not-[button]:block"/>
//     <button className="material-symbols-rounded bg-gray rounded-full text-white p-1 bg-[#6D4FC2]">keyboard_arrow_right</button>
//   </form>
//   )
// }

// export default Chatform