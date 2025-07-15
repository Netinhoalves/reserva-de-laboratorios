interface FormInputProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}

const FormInput = ({ label, id, type = 'text', placeholder }: FormInputProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2f9e40]"
      />
    </div>
  );
};

export default FormInput;