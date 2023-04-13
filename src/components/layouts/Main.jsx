import Navigation from "../Navigation";

function MainLayout(props) {
  return (
    <div>
      <Navigation />
      {props.children}
    </div>
  );
}

export default MainLayout;
