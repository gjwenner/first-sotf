import { useNavigate } from 'react-router-dom';
import Button from '../atomos/Button';
import './Card.css';
export default function Card({ title, description, buttonText, linkTo }) {
  const navigate = useNavigate();
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <Button onClick={() => navigate(linkTo)} variant="primary">
        {buttonText}
      </Button>
    </div>
  );
}
