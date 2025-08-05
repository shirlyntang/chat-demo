'use client';

import { useState } from 'react';

// TODO: This file is incomplete. Please implement and build on functionality here.

export default function Home() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    const res = await fetch('http://localhost:8000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">AI Chat</h1>
      <input
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        placeholder="Type a message"
      />
      <button
        onClick={sendMessage}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Send
      </button>
      {response && (
        <div className="mt-4 p-2 bg-gray-100 rounded">Response: {response}</div>
      )}
    </main>
  );
}
