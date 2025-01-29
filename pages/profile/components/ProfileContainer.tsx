interface ProfileContainerProps {
  children: React.ReactNode;
}

export default function ProfileContainer({ children }: ProfileContainerProps) {
  return (
    <div className="flex items-center justify-center gap-8 mt-10">
      <div onClick={() => {}} className="cursor-pointer">
        <div className="group flex-row w-44 mx-auto">{children}</div>
      </div>
    </div>
  );
}
