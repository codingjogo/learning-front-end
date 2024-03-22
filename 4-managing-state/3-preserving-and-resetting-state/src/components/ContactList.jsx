import React from "react";

const ContactList = ({ contacts, selectedContacts, onSelect }) => {
    return (
        <section className="contact-list">
            <ul className="flex flex-col gap-2">
                {contacts.map((contact) => (
                    <li key={contact.email}>
                        <button
                            className="w-full py-2 px-12 bg-slate-500 text-white hover:bg-slate-400 rounded-md"
                            onClick={() => {
                                onSelect(contact);
                            }}
                        >
                            {contact.name}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ContactList;
