import './Input.css';

export default function Input({ id, type = 'text', placeholder, value, onChange, required = false }) {
  return (
    <input
      id={id}
      type={type}
      className="form-input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}
