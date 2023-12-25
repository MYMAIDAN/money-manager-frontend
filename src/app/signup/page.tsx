'use client'

import { useState, FormEvent, ChangeEvent } from 'react'

import styles from './signup.module.css'

interface FormData{
    userName: string;
    userSurname: string;
    email: string;
    password: string;
}

export default function SignUp(){

    const [formData, setFormData] = useState<FormData>({
        userName: '',
        userSurname: '',
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
                    name='username'
                    placeholder='Username'
                    value={formData.userName}
                    onChange={handleChange}
                    className={styles.inputField}
                    required
                    />
                </div>
            </form>
        </div>
      )

}