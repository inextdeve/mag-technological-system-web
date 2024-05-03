const GlassCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`h-full w-full bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-400 shadow-sm shadow-purple-200 ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
