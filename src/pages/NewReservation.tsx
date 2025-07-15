import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { format, addHours } from 'date-fns';
import FormInput from '../components/FormInput';
import FormTextarea from '../components/FormTextarea';

const formatForInput = (date: Date): string => {
  return format(date, "yyyy-MM-dd'T'HH:mm");
};

const NewReservation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const selectedDateISO = location.state?.selectedDate;
    
    if (selectedDateISO) {
      const date = new Date(selectedDateISO);
      
      date.setHours(8, 0, 0, 0);
      const formattedStart = formatForInput(date);
      setStartDate(formattedStart);

      const end = addHours(date, 1);
      const formattedEnd = formatForInput(end);
      setEndDate(formattedEnd);
    }
  }, [location.state]);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center mb-8">
        <button onClick={() => navigate(-1)} className="mr-4 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
        <h1 className="text-2xl font-bold text-gray-800">Novo Agendamento</h1>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
        <FormInput label="Título do Agendamento" id="title" placeholder="Ex: Aula de Redes" />
        <div>
          <label htmlFor="lab" className="block text-sm font-medium text-gray-700 mb-1">Laboratório</label>
          <select id="lab" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2f9e40]"><option>Selecione um laboratório</option><option>Laboratório de Informática 3</option><option>IF Maker Lab</option></select>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <div className="flex-1">
            <label htmlFor="start-date" className="block text-sm font-medium text-gray-700 mb-1">Início</label>
            <input type="datetime-local" id="start-date" value={startDate} onChange={e => setStartDate(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2f9e40]" />
          </div>
          <div className="flex-1">
            <label htmlFor="end-date" className="block text-sm font-medium text-gray-700 mb-1">Fim</label>
            <input type="datetime-local" id="end-date" value={endDate} onChange={e => setEndDate(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2f9e40]" />
          </div>
        </div>

        <FormInput label="Responsável" id="owner" placeholder="Nome do professor" />
        <FormInput label="Estudantes" id="students" placeholder="Ex: Turma 3A de Informática" />
        <FormTextarea label="Anotações" id="notes" />

        <div className="pt-4">
          <button className="w-full bg-[#2f9e40] text-white font-bold py-3 px-4 rounded-md hover:bg-[#278236] transition-colors duration-200">Agendar</button>
        </div>
      </div>
    </div>
  );
};

export default NewReservation;