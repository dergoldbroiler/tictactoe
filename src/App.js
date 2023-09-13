// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";

import { Canvas } from "./components/canvas/canvas";

function App() {
  return (
    <>
    <span className="headline shadow-lg">Tic Tac Toe</span>
    <header></header>
    <section id="playground" className="p-0 p-lg-5">
      <Canvas />
    </section>
    </>
  );
}

export default App;
