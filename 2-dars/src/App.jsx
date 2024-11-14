import Admin from "./components/admin";
import About from "./components/about/about";
import Authorization from "./components/authorization";
import ModuleCss from "./components/module";
import Ref from "./components/ref";
import Section from "./components/section";
import Forms from "./components/forms";
import Uncontrolled from "./components/forms/uncontrolled";

const App = () => {
  let user = localStorage.getItem("user");

  const loggidIn = (param) => (param ? <Admin /> : <h1>Please LogiIn</h1>);
  // if (param) return <Admin />;
  // if (!param) return <h1>Pleas logiin</h1>;\

  return (
    <div>
      {loggidIn(user)}
      <About />
      <Authorization />
      <ModuleCss />
      <Ref />
      <Section />
      <Forms />
      <Uncontrolled />
    </div>
  );
};

export default App;
