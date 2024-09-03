export type flagprops = {
  alt: string;
  svg: string;
  png: string;
};

const CountryFlag = ({ flag }: { flag: flagprops }) => {
  return (
    <section className="w-full flex justify-center items-center overflow-hidden">
      <div className="w-full h-full flex justify-center items-center">
        <img
          src={flag.svg}
          alt={flag.alt}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default CountryFlag;
