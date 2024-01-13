export interface HomeComponentInterface {
  notification: {
    value: number;
  };
}

export interface Products {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number | string;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

export type Price = "asc" | "dsc";

export interface Filter {
  category: string;
  price: Price;
}

export interface HooksFilter {
  filter: Filter;
  setCategory: (params: string) => void;
  setPrice: (params: Price) => void;
}

export type Details = (id: string | number) => Promise<boolean>;

export interface HooksPage {
  currentPage: number;
  incPage: () => void;
  decPage: () => void;
}
