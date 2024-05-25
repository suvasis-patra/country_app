export type flagprops = {
  alt: string;
  svg: string;
  png: string;
};

const CountryFlag = ({ flag }: { flag: flagprops }) => {
  return (
    <section className=" w-full md:w-1/2">
      <div className="w-full h-full md:min-h-[400px] flex justify-center items-center">
        <img src={flag.svg} alt={flag.alt} className="w-full h-full" />
      </div>
    </section>
  );
};

export default CountryFlag;
