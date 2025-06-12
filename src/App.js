import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import "animate.css"
import './App.css';
import Header from "./CarRental/Header";
import Footer from "./CarRental/Footer";
import Routing from "./CarRental/Routing";
import { createContext, useState } from "react";
import MemoEx from "./Components/MemoEx";
import MobileContainer from "./redux/MobileContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export const loginStatus = createContext()

function App() {
  const [token, setToken] = useState("")
  return (
    <div className="App container-fluid p-0">
      <loginStatus.Provider value={[token, setToken]}>
        <Header />
        <Routing />
        <Footer />
      </loginStatus.Provider>
      {/* <Provider store={store}>
        <MobileContainer />
      </Provider> */}

    </div>
  );
}

export default App;
