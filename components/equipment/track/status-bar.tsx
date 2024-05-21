const StatusBar = () => {
  const buttonClass =
    "z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none px-4 min-w-20 h-10 text-small gap-2 rounded-medium shadow-lg dark:shadow-yellow-600/20 dark:bg-slate-950 bg-gray-400/50 text-primary-foreground";

  return (
    <div className="flex gap-3 absolute w-fit right-14 top-2 z-20 flex-row-reverse">
      <div className={buttonClass}>
        <div className="text-white bg-emerald-500 rounded-full aspect-square min-w-5 text-center text-sm flex items-center justify-center">
          12
        </div>
        <span>Success</span>
      </div>
      <div className={buttonClass}>
        <div className="text-white bg-yellow-500 rounded-full aspect-square min-w-5 text-center text-sm flex items-center justify-center">
          12
        </div>
        <span>On the way</span>
      </div>
      <div className={buttonClass}>
        <div className="text-white bg-yellow-500 rounded-full aspect-square min-w-5 text-center text-sm flex items-center justify-center">
          12
        </div>
        <span>Loaded</span>
      </div>
      <div className={buttonClass}>
        <div className="text-white bg-yellow-500 rounded-full aspect-square min-w-5 text-center text-sm flex items-center justify-center">
          12
        </div>
        <span>Ready</span>
      </div>
      <div className={buttonClass}>
        <div className="text-white bg-red-500 rounded-full aspect-square min-w-5 text-center text-sm flex items-center justify-center">
          2
        </div>
        <span>Stopped</span>
      </div>
    </div>
  );
};

export default StatusBar;
