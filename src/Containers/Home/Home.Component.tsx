import React from "react";
import { useRouter } from "next/router";

import AppAxios from "@/Axios/Axios.interceptor";
import Constants from "@/Constants/Constants";
import LoadingComponent from "@/Components/Loading/Loading.Component";

const CardComponent = React.lazy(
  () => import("@/Components/Card/Card.Component")
);
const DropDownComponent = React.lazy(
  () => import("@/Components/DropDown/Dropdown.Component")
);
const Pagination = React.lazy(
  () => import("@/Components/Paginations/Pagination.component")
);

import {
  Details,
  FetchHandler,
  Filter,
  HooksFilter,
  HooksPage,
  Price,
  Products,
} from "./Home.Types";

const dataPrice: string[] = ["asc", "dsc"];

const sortHandler = (data: Products[], order: Price): Products[] =>
  data.sort((a, b) =>
    order === "asc" ? a.price - b.price : b.price - a.price
  );

const _fetchHandler = (filter: Filter, page: number): FetchHandler => {
  const [data, setData] = React.useState([]);
  const [category, setCategory] = React.useState<string[]>([]);
  const { URI } = Constants;
  const limitPerPage = 6;
  const skip = (page - 1) * limitPerPage;

  const generateUrl = filter.category
    ? URI + `/category/${filter.category}`
    : URI + `?limit=${limitPerPage}&skip=${skip}`;
  const getCategory = URI + "/categories";

  React.useEffect(() => {
    AppAxios.get(getCategory)
      .then(({ data }) => {
        setCategory(data);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    AppAxios.get(generateUrl)
      .then(({ data }) => {
        setData(data.products);
      })
      .catch((err) => console.log(err));
  }, [filter.category, page]);

  const finalData = React.useMemo(() => {
    return sortHandler(data, filter.price);
  }, [data, filter.category, filter.price]);

  return { data: finalData, category };
};

const _renderProduct = (
  data: Products[],
  onClick: Details,
  isLoading: boolean
): React.ReactNode => (
  <div className=" flex gap-4 flex-wrap w-full justify-center ">
    {isLoading ? (
      <LoadingComponent />
    ) : (
      data.map(({ title, price, id, stock, thumbnail, description }) => (
        <CardComponent
          onClick={() => onClick(id)}
          key={id}
          id={id}
          name={title}
          description={description}
          stock={stock}
          price={"$ " + price}
          image={thumbnail}
        />
      ))
    )}
  </div>
);

const _renderFilter = (
  category: string[],
  price: string[],
  filterHooks: HooksFilter
): React.ReactNode => (
  <div className=" w-full flex items-center justify-center gap-4">
    <h1>Filter: </h1>
    <DropDownComponent
      side="left"
      data={category}
      label="Category"
      selected={filterHooks.filter.category}
      onClick={(data) => filterHooks.setCategory(data)}
    />
    <DropDownComponent
      side="right"
      data={price}
      label="Sort Price"
      selected={filterHooks.filter.price}
      onClick={(data) => filterHooks.setPrice(data)}
    />
  </div>
);

const _renderPagination = (hooks: HooksPage): React.ReactNode => (
  <div>
    <Pagination
      currentPage={hooks.currentPage}
      inc={hooks.incPage}
      dec={hooks.decPage}
    />
  </div>
);

const UseFilter = (): HooksFilter => {
  const [filter, setFilter] = React.useState<Filter>({
    category: "",
    price: "asc",
  });

  const setCategory = React.useCallback(
    (params: string) =>
      setFilter((prev: Filter) => ({ ...prev, category: params })),
    []
  );
  const setPrice = React.useCallback(
    (params: Price) =>
      setFilter((prev: Filter) => ({ ...prev, price: params })),
    []
  );

  return { filter, setCategory, setPrice };
};

const UsePaginate = (): HooksPage => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const incPage = React.useCallback(() => {
    setCurrentPage((prev) => prev + 1);
  }, []);
  const decPage = React.useCallback(() => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  }, []);

  return { currentPage, incPage, decPage };
};

const HomeComponent = (): React.ReactNode => {
  const filterHooks = UseFilter();
  const hooksPage = UsePaginate();
  const { data, category } = _fetchHandler(
    filterHooks.filter,
    hooksPage.currentPage
  );
  const router = useRouter();
  const _detailsHandler = (params: string | number) =>
    router.push(`/details/${params}`);
  const isLoading = data.length === 0;

  return (
    <div className="flex flex-col w-full items-center justify-between min-h-screen gap-6 py-20 p-12">
      <React.Suspense fallback={<LoadingComponent />}>
        {_renderFilter(category, dataPrice, filterHooks)}
        {_renderProduct(data, _detailsHandler, isLoading)}
        {_renderPagination(hooksPage)}
      </React.Suspense>
    </div>
  );
};

export default HomeComponent;
