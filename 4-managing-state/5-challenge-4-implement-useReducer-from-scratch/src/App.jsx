import { useReducer, useState } from "react";
import { initialState, messengerReducer } from "./reducers/messengerReducer.js";
import ContactList from "./components/ContactList.jsx";
import Chat from "./components/Chat.jsx";

// default contacts
const contacts = [
    { id: 0, name: "Taylor", email: "taylor@mail.com" },
    { id: 1, name: "Alice", email: "alice@mail.com" },
    { id: 2, name: "Bob", email: "bob@mail.com" },
];

function App() {
    const [state, dispatch] = useReducer(messengerReducer, initialState);
    const message = state.messages[state.selectedId];
    const contact = contacts.find((c) => c.id === state.selectedId);
    console.log('message:',message)
    console.log('name:', contact.name)

    return (
        <main className="h-screen flex flex-row items-center justify-center gap-4">
            <ContactList
                contacts={contacts}
                selectedId={state.selectedId}
                dispatch={dispatch}
            />

            <Chat 
                key={contact.id}
                contact={contact}
                message={message}
                dispatch={dispatch}
            />
        </main>
    );
}

export default App;
