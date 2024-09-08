import { useState } from "react";
import SelectComponent from "./SelectComponent";
import { CURRENCIES, POPULAR_LANGUAGES, SUBREGIONS } from "../lib/constant";
type ParamsType = {
  lang: string | null;
  currency: string | null;
  subregion: string | null;
};
const Filters = ({ params }: { params: ParamsType }) => {
  const [selectedValues, setSelectedValues] = useState({
    lang: params.lang || "",
    currency: params.currency || "",
    subregion: params.subregion || "",
  });

  const handleValueChange = (key: string, newValue: string) => {
    setSelectedValues({
      lang: key === "lang" ? newValue : "",
      currency: key === "currency" ? newValue : "",
      subregion: key === "subregion" ? newValue : "",
    });
  };

  return (
    <section className="w-full flex gap-4 px-6 md:px-12 items-center">
      <div className="flex gap-3 items-center">
        <SelectComponent
          items={POPULAR_LANGUAGES}
          placeholderOption="Filter by language"
          selectfor="lang"
          value={selectedValues.lang}
          setValue={(newValue) => handleValueChange("lang", newValue)}
        />
        <SelectComponent
          items={CURRENCIES}
          placeholderOption="Filter by currencies"
          selectfor="currency"
          value={selectedValues.currency}
          setValue={(newValue) => handleValueChange("currency", newValue)}
        />
        <SelectComponent
          items={SUBREGIONS}
          placeholderOption="Filter by subregion"
          selectfor="subregion"
          value={selectedValues.subregion}
          setValue={(newValue) => handleValueChange("subregion", newValue)}
        />
      </div>
    </section>
  );
};

export default Filters;
