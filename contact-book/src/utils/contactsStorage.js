const STORAGE_KEY = "contact-book-contacts";

const defaultContacts = [
  {
    id: crypto.randomUUID(),
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    phone: "613-555-1234",
    address: "Ottawa, ON",
  },
  {
    id: crypto.randomUUID(),
    firstName: "Alice",
    lastName: "Brown",
    email: "alice.brown@email.com",
    phone: "343-555-5678",
    address: "Toronto, ON",
  },
  {
    id: crypto.randomUUID(),
    firstName: "Mark",
    lastName: "Smith",
    email: "mark.smith@email.com",
    phone: "819-555-9999",
    address: "Montreal, QC",
  },
];

export function getContacts() {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultContacts));
    return defaultContacts;
  }

  return JSON.parse(stored);
}

export function saveContacts(contacts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
}

export function getContactById(id) {
  const contacts = getContacts();
  return contacts.find((contact) => contact.id === id);
}

export function addContact(newContact) {
  const contacts = getContacts();
  contacts.push(newContact);
  saveContacts(contacts);
}

export function updateContact(updatedContact) {
  const contacts = getContacts().map((contact) =>
    contact.id === updatedContact.id ? updatedContact : contact
  );
  saveContacts(contacts);
}

export function deleteContact(id) {
  const contacts = getContacts().filter((contact) => contact.id !== id);
  saveContacts(contacts);
}