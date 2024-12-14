let contacts = [
        {
            id      : 1,
            name    : 'Chris Evans',
            tag     : 'cevans',
            imageUrl: '/images/cevans.jpg',
        },
        {
            id      : 2,
            name    : 'Chris Hemsworth',
            tag     : 'hems',
            imageUrl: '/images/hems.webp',
        },
        {
            id      : 3,
            name    : 'Tom Ellish',
            tag     : 'tom',
            imageUrl: '/images/tom.webp',
        },
        {
            id      : 4,
            name    : 'Michael Morrone',
            tag     : 'morrone',
            imageUrl: '/images/morrone.jpg',
        },
    ]

// new
function getContacts() {
    return contacts;
  }
   
  function addContact(contact) {
    contacts = [...contacts, { id: +new Date(), imageUrl: '/images/default.jpg', ...contact }];
  }
   
  function deleteContact(id) {
    contacts = contacts.filter((contact) => contact.id !== id);
  }
   
  export { getContacts, addContact, deleteContact };