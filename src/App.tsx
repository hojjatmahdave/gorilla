import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://reqres.in/api/users?page=1");
        const data = await res.json();
        console.log(data.data);
        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {data.map((item: any) => {
        return (
          <div>
            <p>{item.first_name + " " + item.last_name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
