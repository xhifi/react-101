import { useState, useEffect } from "react";

import MainLayout from "../components/layouts/Main";
import TodoCard from "../components/todo/TodoCard";

function Home() {
  const [todos, setTodos] = useState([]);
  const apiPath = "https://tame-jade-frog-veil.cyclic.app/";

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(apiPath);
      const data = await res.json();
      if (data.err) {
        console.warn(data.msg);
      }

      setTodos([...todos, ...data.data]);
    };

    fetchData();
  }, []);

  return (
    <MainLayout>
      <main className="container-fluid px-5 py-0 mt-3">
        <h3>All Todos List (Home Page)</h3>
        {todos.map((item, index) => {
          return (
            <TodoCard
              key={index}
              title={item.name}
              description={item.description}
            />
          );
        })}
      </main>
    </MainLayout>
  );
}

export default Home;
