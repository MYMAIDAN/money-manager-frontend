'use client'

import { useState, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link'
import styles from './signin.module.css'
import { useRouter } from 'next/navigation'
// Handle form submission

// Define the shape of your form data using an interface
interface FormData {
  email: string;
  password: string;
}

export default function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
  
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      // Add your login logic here
      router.replace('/test');
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
            <div className={styles.formTitle}>
              <Link href={'/signup'}>SignUp</Link>
            </div>
          </form>
        </div>
      );
    }