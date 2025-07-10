import { FaRegUserCircle } from 'react-icons/fa';
import ifmsLogo from '../assets/ifms-logo.svg';

const Header = () => {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <img src={ifmsLogo} alt="Logo IFMS" className="h-8 w-auto" />
      <FaRegUserCircle size={28} className="text-gray-600" />
    </header>
  );
};

export default Header;