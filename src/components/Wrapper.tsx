const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 md:px-12 mt-6 md:mt-8 gap-4">
      {children}
    </div>
  );
};

export default Wrapper;
