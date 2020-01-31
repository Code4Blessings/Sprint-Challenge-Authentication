- [ ] What is the purpose of using _sessions_?

    --Sessions are a simple way to store data for individual users against a   unique session ID.  Session IDs are normally sent to the browser via session cookies and the ID is used to retrieve existing session data.

- [ ] What does bcrypt do to help us store passwords in a secure manner.

    -- bcrypt uses a modified key setup algorithm which is timely quite expensive. This is called key strengthening. This makes the password more secure against attacks, since the attacker now needs a lot more time to test each possible key.

- [ ] What does bcrypt do to slow down attackers?

    --Bcrypt uses a modified key setup called key strengthening.  This makes the password more secure against attacks, since the attacker now needs a lot more time to test each possible key

- [ ] What are the three parts of the JSON Web Token?

    A header, payload, and a signature
