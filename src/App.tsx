import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("https://reqres.in/api/users?page=1").then(
          async (response) => {
            console.log(response);

            // const result = await response.json();
            // setData(result);
          }
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return <div>{/* {data.map((item:any)=>{})} */}</div>;
};

export default App;
