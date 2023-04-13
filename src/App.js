import AddTodo from "./pages/AddTodo";
import AllTodos from "./pages/AllTodos";
import Contact from "./pages/Contact";
import FourOhFour from "./pages/FourOhFour";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllTodos />} />
        <Route path="/add-todo" element={<AddTodo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
