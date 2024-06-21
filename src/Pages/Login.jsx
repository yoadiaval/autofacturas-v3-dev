import { useContext, useState } from "react";
import { authContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login } = useContext(authContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      navigate("/home");
    } catch (error) {
      alert(error.message); // Manejar el error si el inicio de sesión falla
    }
    // Independientemente de si hay un error o no, restablecer el estado del usuario
    setUser({
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <h1 className="absolute left-[50%] font-bold translate-x-[-50%] top-20 text-center">
        SISTEMA AUTOMATIZADO DE FACTURAS
      </h1>
      <div className="border bg-[#373a5a] rounded text-white w-fit px-16 py-10 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label>Inserte Email:</label>
            <input
              type="email"
              name="email"
              value={user.email}
              placeholder="Inserte Email"
              onChange={handleChange}
              className="p-1 w-[100%] text-black"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Inserte contraseña:</label>
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="Inserte contraseña"
              onChange={handleChange}
              className="p-1 w-[100%] text-black"
              required
            />
          </div>
          <button type="submit" className="bg-black py-1 mt-4 rounded">
            Log in
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
