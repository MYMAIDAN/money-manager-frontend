'use client'

import { useState, FormEvent, ChangeEvent } from 'react'

import styles from './signup.module.css'

interface FormData{
    name: string;
    surname: string;
    email: string;
    password: string;
}

export default function SignUp(){

    const [formData, setFormData] = useState<FormData>({
        name: '',
        surname: '',
        email: '',
        password: '',

    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      // Handle form submission
      const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const result = fetch("http://localhost:4000/register",{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify(formData)
        })
        .then(response => console.log(response))
        .catch(err => console.log(err))      
        // Handle your form submission logic here, e.g., send data to an API
        console.log(formData);
      };

      return (
        <div className={styles.formContainer}>
            <h1 className={styles.formTitle}>SignUp</h1>
            <form onSubmit={handleSubmit}>
                <div>
                  <input
                  type='text'
                  name='name'
                  placeholder='Username'
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.inputField}
                  required
                  />
                </div>
                <div>
                  <input
                  type='text'
                  name='surname'
                  placeholder='Surname'
                  value={formData.surname}
                  onChange={handleChange}
                  className={styles.inputField}
                  required
                  />
                </div>
                <div>
                  <input
                  type='text'
                  name='email'
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.inputField}
                  required
                  />
                </div>
                 <div>
                  <input
                  type='text'
                  name='password'
                  placeholder='Password'
                  value={formData.password}
                  onChange={handleChange}
                  className={styles.inputField}
                  required
                  />
                </div>
                <div>
                  <button
                  type='submit'
                  className={styles.submitButton}
                  >
                    SignUp
                  </button>
                </div>
            </form>
        </div>
      )

}