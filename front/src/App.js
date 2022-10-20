import { useState } from "react";
import rosa from "./assets/pink.png";
import ghost from "./assets/green.png";
import yellow from "./assets/Vector.png";
import world from "./assets/print.png";
import {
  FaLinkedinIn,
  FaPinterestP,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

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

  // function handleSubmit(e) {
  //   e.preventDefault(); //Sempre usar o preventDefault
  //   //console.log(info);
  // }

  function handleChange({ target }) {
    console.log(target.value);
    setDataForm({ ...dataForm, [target.name]: target.value });
  }

  return (
    <div className="App">
      <div className="dad-card">
        <div className="child-1">
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
          </div>
        </div>

        <div className="child-2">
          <img src={world} alt="Ghost" className="world" />
        </div>
      </div>

      <div className="footer">
        <img src={rosa} />
        <div className="socialMedia">
          <FaLinkedinIn size="1rem" color="#696969" />
          <FaTwitter size="1rem" color="#696969" />
          <FaFacebookF size="1rem" color="#696969" />
          <FaPinterestP size="1rem" color="#696969" />
        </div>
        <div className="little-ghost">
          <img src={ghost} />
        </div>
        <div className="little-ghost">
          <img src={yellow} />
        </div>
      </div>
    </div>
  );
}

export default App;
