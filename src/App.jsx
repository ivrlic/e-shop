import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer.jsx"
import Header from "./components/common/Header.jsx"
import routes from "./routes.jsx";


function App() {

  // u css-u komentar "za premjestit" i "OVO PREBACITI NEGDJE" je osta
  // klik na user otvara novu stranicu??
  // klik na send message - dobiješ neku poruku?
  // css
  // CHECKOUT IZ KOŠARICE JAVLJA PORUKU
  // provjeri funkcionalnosti sve
// prođi sve datoteke, napiši komentare i izbriši višak
// backend: user, sendmessage, stanje košarice ...

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
