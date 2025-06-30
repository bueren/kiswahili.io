import React, { useState } from 'react';

function MwalimuChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });
    const data = await res.json();
    setMessages([...messages, { role: "student", content: input }, { role: "mwalimu", content: data.reply }]);
    setInput("");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Mwalimu Chat</h1>
      <div className="mb-4 space-y-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.role === "student" ? "text-right" : "text-left"}>
            <p>{msg.content}</p>
          </div>
        ))}
      </div>
      <input
        className="border p-2 w-full"
        placeholder="Uliza swali kwa Kiswahili..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="mt-2 bg-blue-500 text-white px-4 py-2" onClick={sendMessage}>
        Tuma
      </button>
    </div>
  );
}

export default MwalimuChat;