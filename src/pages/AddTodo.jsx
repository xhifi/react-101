import MainLayout from "../components/layouts/Main";
import Input from "../components/Input";

function About() {
  const somefunction = (e) => {
    e.preventDefault();
  };

  return (
    <MainLayout>
      <main className="container-fluid px-5 py-4">
        <h4>Add a new Todo: </h4>
        <form onSubmit={somefunction}>
          <Input
            label="Title of your Task"
            placeholder="For example, what you wanna do..."
          />
          <Input
            label="Description of your task"
            type="textarea"
            rows="5"
            placeholder="The detailed description of what you wanna do..."
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
