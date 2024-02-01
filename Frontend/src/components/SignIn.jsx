/*import React, { useState } from 'react';

function SignIn() {
  // State für E-Mail und Passwort
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Funktion zum Verarbeiten des Formulars beim Einreichen
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Hier solltest du den Login-Request an deinen Server senden, z.B. mit fetch
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login erfolgreich, handle den Erfolgsfall hier, z.B. Weiterleitung zur MyAccount-Seite
        console.log('Login erfolgreich', data);
        // Hier könntest du den Benutzer weiterleiten oder andere Aktionen durchführen
      } else {
        // Login fehlgeschlagen, handle den Fehlerfall hier
        console.error('Login fehlgeschlagen', data.error);
        // Hier könntest du den Benutzer informieren oder andere Aktionen durchführen
      }
    } catch (error) {
      console.error('Fehler beim Login', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          E-Mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Passwort:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Anmelden</button>
      </form>
    </div>
  );
}

export default SignIn;*/

