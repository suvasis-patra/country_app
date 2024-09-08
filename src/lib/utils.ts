import { SearchParamsType } from "./types";

export function createUrl(params: SearchParamsType) {
  if (params.region) {
    return `/region/${params.region}`;
  } else if (params.currency) {
    return `/currency/${params.currency}`;
  } else if (params.lang) {
    return `/lang/${params.lang}`;
  } else if (params.subregion) {
    return `subregion/${params.subregion}`;
  } else {
    return `/all`;
  }
}
