import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import ifmsLogo from '../assets/ifms-logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header className="relative bg-white shadow-sm p-4 flex justify-between items-center">
      <Link to="/">
        <img src={ifmsLogo} alt="Logo IFMS" className="h-8 w-auto" />
      </Link>

      <div className="relative" ref={menuRef}>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaRegUserCircle size={28} className="text-gray-600" />
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Perfil
            </a>
            {/* A alteração está aqui: trocamos o <button> por um <Link> */}
            <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Calendário
            </Link>
            <a href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Sair
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;