export default function ContactList({ contacts, selectedId, dispatch }) {
    return (
        <section className="contact-list w-[150px]">
            <ul className="flex flex-col gap-2">
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        <button
                            className="w-full py-2 px-8 text-white bg-slate-500 hover:bg-slate-400 rounded-md"
                            onClick={() => {
                                // this changes the recipient
                                // click button Alice then it will be Alice index of 1
                                dispatch({
                                    type: "changed_selection",
                                    contactId: contact.id,
                                });
                            }}
                        >
                            {selectedId === contact.id ? (
                                <b>{contact.name}</b>
                            ) : (
                                contact.name
                            )}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}
