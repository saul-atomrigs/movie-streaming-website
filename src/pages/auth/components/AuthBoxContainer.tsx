interface AuthBoxContainerProps {
  children: React.ReactNode;
}

export default function AuthBoxContainer({ children }: AuthBoxContainerProps) {
  return (
    <div className="flex justify-center">
      <div className="bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
        {children}
      </div>
    </div>
  );
}
