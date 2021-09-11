import Sidebar from "./components/sidebar";
import Main from "./components/main";

function App() {

  return (
    <div className="body">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <Main />
      </div>
    </div>
  );
}

export default App;
