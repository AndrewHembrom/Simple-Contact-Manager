const { list } = require("firebase/storage");

document.addEventListener('DOMContentLoaded', () => { 
    const addContactButton = document.getElementById('addContactButton');
    const contactList = document.getElementById('contactList');

    const fetchContacts = async () => {
        const response = await fetch('/');
        const contacts = await response.json();

        contactList.innerHTML = "";
        contacts.forEach(contact => {
            const listItem = document.createElement('li');
            listItem.textContent = `Name: ${contact.name} | Num: ${contact.number}`;
            contactList.appendChild(listItem);
        });
    };

    addContactButton.addEventListener('click', async () => {
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;

        await fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, phone })
        });

        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        fetchContacts();
    });
    fetchContacts();
});
