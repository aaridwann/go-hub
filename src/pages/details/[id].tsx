import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import AppAxios from "@/Axios/Axios.interceptor";
import Constants from "@/Constants/Constants";

// Component
const Badge = React.lazy(() => import("@/Components/Badge/Badge.Components"));
const Carousel = React.lazy(() => import("@/Components/Carousel/Carousel"));

// Types
import { Products } from "@/Containers/Home/Home.Types";
import LoadingComponent from "@/Components/Loading/Loading.Component";

const _renderCarousel = (
  data: string[],
  isLoading: boolean
): React.ReactNode => (
  <React.Suspense fallback={<LoadingComponent />}>
    {isLoading ? <LoadingComponent /> : <Carousel data={data} />}
  </React.Suspense>
);

const _renderImage = (image: string, title: string): React.ReactNode => (
  <div className=" w-[700px] h-[700px] overflow-hidden flex items-center justify-center">
    <React.Suspense fallback={<LoadingComponent />}>
      <Image
        className=" w-full"
        src={image}
        alt={title}
        width={500}
        height={500}
      />
    </React.Suspense>
  </div>
);

const _renderDescription = (data: Products): React.ReactNode => (
  <div className=" flex flex-col gap-2 items-center justify-start">
    <h1 className=" text-4xl font-bold">{data.title}</h1>
    <h2>{data.description}</h2>
    <div className="self-start">
      <Badge
        title="Price"
        price={data.price}
        discount={data.discountPercentage}
      />
    </div>
  </div>
);

const _renderDetails = (data: Products): React.ReactNode => (
  <div className=" w-full py-20 flex items-center justify-center gap-10 px-4">
    {_renderImage(data.thumbnail, data.title)}
    {_renderDescription(data)}
  </div>
);

const GetData = (id: any) => {
  const [data, setData] = React.useState<Products>({
    brand: "",
    category: "",
    description: "",
    discountPercentage: 0,
    id: "",
    images: [""],
    price: 0,
    rating: 0,
    stock: 0,
    thumbnail: "",
    title: "",
  });

  const fetchData = () =>
    AppAxios.get(Constants.URI + `/${id}`)
      .then(({ data }) => setData(data))
      .catch((err) => console.log(err));

  React.useEffect(() => {
    if (!id) return;
    fetchData();
  }, [id]);

  return { data };
};

const DetailsScreen = (): React.ReactNode => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  const { data } = GetData(id);
  const isLoading = !data.brand;

  return (
    <div className="flex w-full min-h-screen gap-4 items-center flex-col p-12 px-36">
      {_renderCarousel(data?.images, isLoading)}
      <React.Suspense fallback={<LoadingComponent />}>
        {isLoading ? <LoadingComponent /> : _renderDetails(data)}
      </React.Suspense>
    </div>
  );
};

export default DetailsScreen;
