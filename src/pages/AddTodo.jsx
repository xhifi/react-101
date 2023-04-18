import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../components/layouts/Main";
import Input from "../components/Input";

function About() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const data = { name: title, description: description, status: false };

  const somefunction = async (event) => {
    event.preventDefault();
    const response = await fetch("https://tame-jade-frog-veil.cyclic.app/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const { err } = await response.json();
    if (err) {
      console.warn(err);
      return;
    }
    navigate("/");
  };

  console.log("Component re-rendered");
  console.log(data);

  return (
    <MainLayout>
      <main className="container-fluid px-5 py-4">
        <h4>Add a new Todo: </h4>
        <form onSubmit={somefunction}>
          <Input
            label="Title of your Task"
            placeholder="For example, what you wanna do..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <Input
            label="Description of your task"
            type="textarea"
            rows="5"
            placeholder="The detailed description of what you wanna do..."
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <button type="submit" className="btn btn-primary">
            Submit Todo
          </button>
        </form>
      </main>
    </MainLayout>
  );
}

export default About;
