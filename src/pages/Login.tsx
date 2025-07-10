import ifmsLogo from '../assets/ifms-logo.svg';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6">

      <div className="w-full max-w-xs">
        <img src={ifmsLogo} alt="Logo do IFMS" className="w-20 h-auto mx-auto mb-10" />

        <form>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-[#e5e6e8] text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f9e40]"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="password"
              placeholder="Senha"
              className="w-full px-4 py-3 bg-[#e5e6e8] text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f9e40]"
            />
          </div>

          <div className="text-right mb-6">
            <a href="#" className="text-sm text-[#2f9e40] hover:underline">
              Esqueci minha senha
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2f9e40] text-white font-bold py-3 px-4 rounded-md hover:bg-[#278236] transition-colors duration-200"
          >
            Entrar
          </button>
        </form>
      </div>
      
      <div className="absolute bottom-10">
          <p className="text-sm text-gray-600">
            Não tem uma conta? <a href="#" className="text-[#2f9e40] font-bold hover:underline">Cadastre-se</a>
          </p>
      </div>
    </div>
  );
};

export default Login;