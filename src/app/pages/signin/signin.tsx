'use client'



import { useState, FormEvent, ChangeEvent } from 'react';
import styles from './signin.module.css'
// Handle form submission

// Define the shape of your form data using an interface
interface FormData {
  email: string;
  password: string;
}

export default function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      // Add your login logic here
      console.log('Logging in with:', username, password);
    };

  // Render the form

    return (
        <div className={styles.formContainer}>
          <h1 className={styles.formTitle}>Login</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.inputField}
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.inputField}
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className={styles.submitButton}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      );
    }