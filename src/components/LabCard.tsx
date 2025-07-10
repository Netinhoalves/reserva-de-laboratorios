import { Link } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';

interface LabCardProps {
  id: number;
  name: string;
  category: string;
}

const LabCard = ({ id, name, category }: LabCardProps) => {
  return (
    <Link 
      to={`/lab/${id}`} 
      className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
    >
      <div>
        <h3 className="font-bold text-md text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 mt-1">{category}</p>
      </div>
      <FaCalendarAlt className="text-gray-500" />
    </Link>
  );
};

export default LabCard;