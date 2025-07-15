interface FormTextareaProps {
  label: string;
  id: string;
  rows?: number;
}

const FormTextarea = ({ label, id, rows = 3 }: FormTextareaProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <textarea
        id={id}
        rows={rows}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2f9e40]"
      ></textarea>
    </div>
  );
};

export default FormTextarea;