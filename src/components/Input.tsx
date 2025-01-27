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
      <label
        htmlFor={id}
        className="
          absolute 
          text-md
          text-white
          duration-150 
          transform 
          -translate-y-3 
          scale-75 
          top-4 
          left-6
          z-10 
          origin-[0]
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-3
        "
      >
        {label}
      </label>
      <input
        id={id}
        value={value}
        type={type}
        onChange={onChange}
        className="
          block 
          rounded-md 
          w-full 
          text-md
          text-zing-700
          appearance-none 
          focus:outline-none 
          focus:ring-0 
          peer
        "
        style={{ padding: '0.5rem', backgroundColor: '#999' }}
        placeholder=""
      />
    </div>
  );
}
