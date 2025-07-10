import { useParams, useNavigate } from 'react-router-dom';

const LabSchedule = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  const emptyDays = Array(2).fill(null); 
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const calendarDays = [...emptyDays, ...daysInMonth];

  const events = {
    2: [{ title: 'Manutenção' }],
    12: [{ title: 'Test' }],
    16: [{ title: 'Test' }, { title: 'Test' }, { title: 'Test' }],
    18: [{ title: 'Test' }],
    29: [{ title: 'Test' }],
    31: [{ title: 'Test' }, { title: 'Test' }],
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <button onClick={() => navigate(-1)} className="mr-4 text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Agenda do Laboratório {id}</h1>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <button className="text-xl font-bold text-[#2f9e40]">‹</button>
          <h2 className="text-lg font-bold">Julho 2025</h2>
          <button className="text-xl font-bold text-[#2f9e40]">›</button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center">
          {weekDays.map(day => (
            <div key={day} className="text-sm font-semibold text-gray-500 pb-2">{day}</div>
          ))}

          {calendarDays.map((day, index) => (
            <div key={index} className={`aspect-square border border-gray-200 rounded-md p-1 text-left ${!day ? 'bg-gray-50' : ''}`}>
              {day && (
                <>
                  <span className={`text-sm ${[7, 14, 21, 28].includes(day) ? 'text-red-500' : ''}`}>{day}</span>
                  <div className="mt-1 space-y-0.5">
                    {events[day]?.map((event, i) => (
                      <div key={i} className="bg-[#2f9e40] text-white text-[9px] rounded-sm px-1 w-full truncate">
                        {event.title}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabSchedule;