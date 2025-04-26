import React, { useRef } from 'react';

function Chatform({ setChatHistory }) {
  const inputRef = useRef();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const message = inputRef.current.value.trim();
    if (!message) return;
    inputRef.current.value = '';

    // Add user's message and "Thinking..." placeholder
    setChatHistory((prev) => [
      ...prev,
      { role: 'user', text: message },
      { role: 'model', text: 'Thinking...' },
    ]);

    try {
      const res = await fetch('http://127.0.0.1:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: message }),
      });

      if (!res.ok) throw new Error('API error');

      const data = await res.json();
      const reply = typeof data === 'string' ? data : data.reply || data.message || 'No reply';

      // Replace "Thinking..." with actual response
      setChatHistory((prev) => [
        ...prev.slice(0, -1),
        { role: 'model', text: reply },
      ]);
    } catch (error) {
      console.error('Error:', error);
      setChatHistory((prev) => [
        ...prev.slice(0, -1),
        { role: 'model', text: 'Error: Could not reach the server.' },
      ]);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex items-center px-5 py-3 rounded-full border border-gray-600">
      <input
        ref={inputRef}
        type="text"
        placeholder="messages..."
        required
        spellCheck="false"
        className="outline-none text-sm placeholder-gray-500 text-gray-900 w-full"
      />
      <button type="submit" className="material-symbols-rounded bg-[#2f05a1] text-white p-1 rounded-full">
        keyboard_arrow_right
      </button>
    </form>
  );
}

export default Chatform;
