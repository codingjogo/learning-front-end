import { useState } from "react";

export default function Chat({ contact, message, dispatch }) {
    return (
        <section className="chat">
            <textarea
                className="w-full h-28 border-2 border-black py-2 px-4 rounded-md shadow-md"
                value={message}
                placeholder={"Chat to " + contact.name}
                onChange={(e) => {
                    dispatch({
                        type: "edited_message",
                        message: e.target.value,
                    });
                }}
            />
            <br />
            <button
            className="w-full py-2 px-8 text-white bg-slate-500 hover:bg-slate-400 rounded-md"
                onClick={() => {
                    alert(`Sending "${message}" to ${contact.email}`);
                    dispatch({
                        type: "sent_message",
                    });
                }}
            >
                Send to {contact.email}
            </button>
        </section>
    );
}
