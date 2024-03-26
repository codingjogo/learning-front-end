import { useReducer } from "react";
import { initialState, messengerReducer } from "./reducers/messengerReducer.js";
import ContactList from "./components/ContactList.jsx";
import Chat from "./components/Chat.jsx";

const contacts = [
    { id: 0, name: "Taylor", email: "taylor@mail.com" },
    { id: 1, name: "Alice", email: "alice@mail.com" },
    { id: 2, name: "Bob", email: "bob@mail.com" },
];

function App() {
    const [state, dispatch] = useReducer(messengerReducer, initialState);
    const message = state.message;
    const contact = contacts.find((c) => c.id === state.selectedId);
    return (
        <div>
            <ContactList
                contacts={contacts}
                selectedId={state.selectedId}
                dispatch={dispatch}
            />
            <Chat
                key={contact.id}
                message={message}
                contact={contact}
                dispatch={dispatch}
            />
        </div>
    );
}

export default App;
