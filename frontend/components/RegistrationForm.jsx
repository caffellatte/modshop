import axios from 'axios';
import { useState } from 'react';
import styles from '../styles/RegistrationForm.module.css';
import RegistrationInput from './RegistrationInput';

export default function RegistrationForm({ strapiURL }) {
  const [firstName, setFirstName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(firstName, phoneNumber, email, password);
    if ((firstName && firstName.length > 0) && 
      (phoneNumber && phoneNumber.length > 0) &&
      (email && email.length > 0) &&
      (password && password.length > 0)) {
      const result = await axios.post(`${strapiURL}/clients`, {
        firstName: firstName,
        phoneNumber: phoneNumber,
        email: email,
        password: password
      });
      if(result?.status === 200 && result?.data.id > 0) {
        alert(`Register new client: ${result.data.firstName}`);
        setFirstName('');
        setPhoneNumber('');
        setEmail('');
        setPassword('');
      } else {
        alert(`Error!`);
        setFirstName('');
        setPhoneNumber('');
        setEmail('');
        setPassword('');
      }
      console.log(result);
    }
  }

  return (
    <div className={styles.form}>
      <div className={styles.title}>Register</div>
      <div>
        <form onSubmit={onSubmit}>
          <div className={styles.inputs}>
            <RegistrationInput
              name="firstName"
              label="First Name"
              type="text"
              value={firstName}
              onChange={setFirstName}
              required={true}
            />
            <RegistrationInput
              name="phoneNumber"
              label="Phone number"
              type="text"
              value={phoneNumber}
              onChange={setPhoneNumber}
              required={true}
            />
            <RegistrationInput
              name="email"
              label="Email"
              type="email"
              value={email}
              onChange={setEmail}
              required={true}
            />
            <RegistrationInput
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={setPassword}
              required={true}
            />
          </div>
          <div className={styles.buttonDiv}>
            <button className={styles.button} htmlFor="submit">REGISTER</button>
          </div>
          <div className={styles.footer}></div>
        </form>
      </div>
    </div>
  );
}