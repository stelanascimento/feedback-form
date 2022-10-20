import { useState } from "react";
import Footer from "./components/footer";
import yellow from "./assets/Vector.png";
import cloud from "./assets/cloud.png";



//import axios from "axios";
function App() {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [response, setResponse] = useState({
    type: "",
    mensagem: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(dataForm.email);

    try {
      const res = await fetch("http://localhost:8888/show", {
        method: "POST",
        body: JSON.stringify(dataForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
      });

      const responseEnv = await res.json();

      if (responseEnv.erro) {
        setResponse({
          type: "error",
          mensagem: responseEnv.mensagem,
        });
      } else {
        setResponse({
          type: "success",
          mensagem: responseEnv.mensagem,
        });

        setDataForm({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (err) {
      setResponse({
        type: "error",
        mensagem: "Error: Try later !",
      });
    }
  };

  function handleChange({ target }) {
    console.log(target.value);
    setDataForm({ ...dataForm, [target.name]: target.value });
  }

  return (
    <div className="App">
      {/* <div className="dad-card">
        <div className="child-1"> */}
          <div className="world-img"></div>
          <img src={yellow} alt='yellow-circle'/>
          <img src={cloud} className="cloud-1" alt="cloud-1"/>
          <img src={cloud} className="cloud-2" alt="cloud-2"/>
          <div className="feedback ">
            <h1>Reach out us!</h1>
            <form onSubmit={handleRegister}>
              <div>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={dataForm.name}
                  onChange={handleChange}
                  placeholder="Your name*"
                />
              </div>
              {/* O conceito do input controlado eh quando o input vai ser controlado por um estado. */}
              <div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={dataForm.email}
                  placeholder="Your e-mail*"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  id="message"
                  type="text"
                  name="message"
                  value={dataForm.message}
                  placeholder="Your message*"
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Send message</button>
            </form>
          {/* </div>
        </div> */}

        {/* <div className="child-2">
          <div className="dad-element">
            <img className="circle" src={world} alt="Ghost" />
            
          </div>
          
        </div> */}
      </div>

      <Footer/>
    </div>
  );
}

export default App;
