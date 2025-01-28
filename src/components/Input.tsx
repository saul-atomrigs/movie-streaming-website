interface InputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export default function Input({ id, label, value, onChange, type }: InputProps) {
  return (
    <div className="relative">
      <label htmlFor={id} className="text-white">
        {label}
      </label>
      <input
        id={id}
        value={value}
        type={type}
        onChange={onChange}
        className="
          block 
          p-3
          rounded-md 
          w-full 
          text-md
          text-neutral-100
          bg-neutral-600
          appearance-none 
          focus:outline-none 
          focus:ring-0 
        "
        placeholder=""
      />
    </div>
  );
}
