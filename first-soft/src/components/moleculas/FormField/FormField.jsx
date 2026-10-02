import Label from '../atoms/Label';
import Input from '../atoms/Input';
import './FormField.css';

export default function FormField({ label, id, ...inputProps }) {
  return (
    <div className="form-field">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...inputProps} />
    </div>
  );
}
