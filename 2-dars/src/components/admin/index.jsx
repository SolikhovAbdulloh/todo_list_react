import "./style.css";
const Admin = () => {
  return (
    <section>
      <h1>Admin</h1>
      <h1>Name Olim</h1>
      <h2>Age 28</h2>
      <button onClick={() => localStorage.clear()}>Exit</button>
    </section>
  );
};

export default Admin;
