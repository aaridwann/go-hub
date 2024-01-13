import React from "react";

import AppAxios from "@/Axios/Axios.interceptor";
import ButtonComponent from "@/Components/Button/Button.Component";

interface HomeComponent {
  notification: {
    value: number;
  };
}

const _renderButton = (onPress: Promise<VoidFunction>) => (
  <ButtonComponent onPress={onPress} title="this is a button" />
);

const pressHandler = () => console.log("press");

const _fetchHandler = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    AppAxios.get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return { data };
};

const HomeComponent = (props: HomeComponent) => {
  return (
    <div className="flex flex-col">
      <h1>HomeComponent</h1>
      {_renderButton(_fetchHandler)}
    </div>
  );
};

export default HomeComponent;
