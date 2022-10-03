import styles from '../styles/RegistrationInput.module.css'

export default function RegistrationInput({label, name, type, value, onChange, required}) {
  return (
    <div className={styles.row}>
      <div className={styles.labelDiv}>
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      </div>
      <input
        className={styles.input}
        type={type}
        name={name}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
      />
     </div>
  );
}