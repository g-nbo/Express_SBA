
const messages = [
  {
    "id": 1,
    "userId": 1,
    "sender": "Alice",
    "receiver": "Bob",
    "timestamp": "2024-05-25T14:35:00Z",
    "message": "Hey Bob, are you coming to the meeting today?"
  },
  {
    "id": 2,
    "userId": 2,
    "sender": "Bob",
    "receiver": "Alice",
    "timestamp": "2024-05-25T14:40:00Z",
    "message": "Hi Alice, yes I'll be there. What time is it again?"
  },
  {
    "id": 3,
    "userId": 1,
    "sender": "Alice",
    "receiver": "Bob",
    "timestamp": "2024-05-25T14:45:00Z",
    "message": "It's at 3 PM in the main conference room. See you then!"
  },
  {
    "id": 4,
    "userId": 3,
    "sender": "Charlie",
    "receiver": "Alice",
    "timestamp": "2024-05-25T14:50:00Z",
    "message": "Hey Alice, can you send me the report before the meeting?"
  },
  {
    "id": 5,
    "userId": 1,
    "sender": "Alice",
    "receiver": "Charlie",
    "timestamp": "2024-05-25T14:55:00Z",
    "message": "Sure thing, Charlie. I'll email it to you in a few minutes."
  }
]

module.exports = { messages };
