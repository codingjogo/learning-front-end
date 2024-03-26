import { useReducer } from "react";
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
    // selects a placeholder for input
    const message = state.messages[state.selectedId];
    // finds the default contact ID that's === state.selectedId from reducer
    const contact = contacts.find((c) => c.id === state.selectedId);
    return (
        <main className="h-screen flex flex-row items-center justify-center gap-4">
            <ContactList
                // gets the default contacts
                contacts={contacts}
                // gets the current ID from initialState of reducer
                selectedId={state.selectedId}
                // gets the functions from reducer
                dispatch={dispatch}
            />
            <Chat
                key={contact.id}
                message={message}
                contact={contact}
                dispatch={dispatch}
            />
        </main>
    );
}

export default App;
