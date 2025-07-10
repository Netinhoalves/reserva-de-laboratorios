import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Espaço para a futura Barra Lateral */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">ReservaLab</h2>
        <p>(Barra Lateral)</p>
      </aside>

      {/* Área de Conteúdo Principal */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet /> {/* As páginas (Dashboard, etc.) serão renderizadas aqui */}
      </main>
    </div>
  );
};

export default MainLayout;