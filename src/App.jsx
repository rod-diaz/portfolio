import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Particles
        params={{
          particles: {
            color: "#f1c27d",
            number: {
              value: 160,
              density: {
                enable: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out"
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              },
              onclick: {
                enable: true,
                mode: "repulse"
              }
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0.4
              },
              repulse: {
                distance: 400,
                duration: 4
              }
            }
          }
        }} />
      <Navbar />
      <Header />
      <div>
        <h1>dcsdffd</h1>
      </div>
      <div>
        <h1>dcsdffd</h1>
      </div>
      <div>
        <h1>dcsdffd</h1>
      </div>
      <div>
        <h1>dcsdffd</h1>
      </div><div>
        <h1>dcsdffd</h1>
      </div><div>
        <h1>dcsdffd</h1>
      </div><div>
        <h1>dcsdffd</h1>
      </div>
    </>
  );
}

export default App;
