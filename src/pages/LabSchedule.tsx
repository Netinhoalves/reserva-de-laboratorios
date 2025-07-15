import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format, addMonths, subMonths, startOfMonth, getDay, getDaysInMonth } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const mockEvents: Record<string, { title: string }[]> = {
  '2025-07-02': [{ title: 'Manutenção' }], '2025-07-12': [{ title: 'Test' }],
  '2025-07-16': [{ title: 'Test' }, { title: 'Test' }, { title: 'Test' }],
  '2025-07-18': [{ title: 'Test' }], '2025-07-29': [{ title: 'Test' }],
  '2025-07-31': [{ title: 'Test' }, { title: 'Test' }],
  '2025-08-05': [{ title: 'Agendado' }],
};

const LabSchedule = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date('2025-07-10T12:00:00'));

  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  const firstDayOfMonth = startOfMonth(currentDate);
  const startingDayOfWeek = getDay(firstDayOfMonth);
  const totalDaysInMonth = getDaysInMonth(currentDate);

  const emptyDays = Array(startingDayOfWeek).fill(null);
  const daysInMonth = Array.from({ length: totalDaysInMonth }, (_, i) => i + 1);
  const calendarDays = [...emptyDays, ...daysInMonth];

  const handlePrevMonth = () => setCurrentDate(prev => subMonths(prev, 1));
  const handleNextMonth = () => setCurrentDate(prev => addMonths(prev, 1));

  const handleDayClick = (day: number) => {
    const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    navigate('/agendar', { state: { selectedDate: selectedDate.toISOString() } });
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <button onClick={() => navigate(-1)} className="mr-4 text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Agenda do Laboratório {id}</h1>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <button onClick={handlePrevMonth} className="text-xl font-bold text-[#2f9e40]">‹</button>
          <h2 className="text-lg font-bold capitalize">{format(currentDate, 'MMMM yyyy', { locale: ptBR })}</h2>
          <button onClick={handleNextMonth} className="text-xl font-bold text-[#2f9e40]">›</button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center">
          {weekDays.map((day, index) => (
            <div key={index} className="text-sm font-semibold text-gray-500 pb-2">{day}</div>
          ))}

          {calendarDays.map((day, index) => {
            if (!day) return <div key={index} className="aspect-square border border-gray-100 rounded-md bg-gray-50" />;
            
            const dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            const dayKey = format(dayDate, 'yyyy-MM-dd');
            const eventsForDay = mockEvents[dayKey] || [];
            
            return (
              <button key={index} onClick={() => handleDayClick(day)} className={`aspect-square border border-gray-200 rounded-md p-1 text-left flex flex-col hover:bg-gray-100`}>
                <span className={`text-sm ${dayDate.getDay() === 0 ? 'text-red-500' : ''}`}>{day}</span>
                <div className="flex-grow mt-1 space-y-0.5 overflow-hidden">
                  {eventsForDay.map((event, i) => (
                    <div key={i} className="bg-[#2f9e40] text-white text-[9px] rounded-sm px-1 w-full truncate">{event.title}</div>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LabSchedule;