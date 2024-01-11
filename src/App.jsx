import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer.jsx"
import Header from "./components/common/Header.jsx"
import routes from "./routes.jsx";


function App() {

  return (
      <BrowserRouter>
          <div>
            <Header />
            <Routes>
              {routes.map((route) => (
                <Route key={route.path} exact path={route.path} element={route.element} />
              ))}
              </Routes>
            <Footer />
          </div>
      </BrowserRouter>
  )
}

export default App
