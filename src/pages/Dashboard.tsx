import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LabCard from '../components/LabCard';

const mockLabs = [
  { id: 1, name: 'Nome do Lab', category: 'Hotel Tecnológico' },
  { id: 2, name: 'Laboratório de Eletrotécnica A', category: 'Eletrotécnica' },
  { id: 3, name: 'IF Maker Lab', category: 'Hotel Tecnológico IF Maker' },
  { id: 4, name: 'Laboratório de Informática 3', category: 'Hotel Tecnológico' },
  { id: 5, name: 'Nome do Lab', category: 'Eletrotécnica' },
  { id: 6, name: 'Nome do Lab', category: 'Hotel Tecnológico' },
];

const Dashboard = () => {
  return (
    <div className="relative h-full">
      <div className="flex space-x-2 overflow-x-auto pb-2 mb-6">
        <button className="py-2 px-5 rounded-full text-sm font-semibold bg-[#2f9e40] text-white">Tudo</button>
        <button className="py-2 px-5 rounded-full text-sm font-semibold bg-gray-200 text-gray-700 whitespace-nowrap">Hotel Tecnológico</button>
        <button className="py-2 px-5 rounded-full text-sm font-semibold bg-gray-200 text-gray-700">IF Maker</button>
        <button className="py-2 px-5 rounded-full text-sm font-semibold bg-gray-200 text-gray-700">Eletrotécnica</button>
      </div>

      <div className="flex flex-col space-y-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 lg:grid-cols-3">
        {mockLabs.map(lab => (
          <LabCard key={lab.id} id={lab.id} name={lab.name} category={lab.category} />
        ))}
      </div>

      <Link
        to="/agendar"
        className="fixed bottom-10 right-10 bg-[#2f9e40] text-white p-4 rounded-full shadow-lg hover:bg-[#278236] transition-colors duration-200"
        title="Agendar novo horário"
      >
        <FaPlus size={24} />
      </Link>
    </div>
  );
};

export default Dashboard;