import { useEffect, useState } from "react";

function Navbar() {
  const [theme, setTheme] = useState("")

  const changeTheme = () => {
    if(theme === ""){
      setTheme("dark")
      document.body.classList.toggle("dark")
      localStorage.setItem("theme", "dark");
    }
    else {
      setTheme("");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "");
    }
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setTheme("dark");
      document.body.classList.add("dark");
    }
  }, []);

  return (
    <nav class="topnav">
        <a href="#home">Home</a>
        <a href="#experiences">Experiences</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onChange={() => changeTheme()}
          checked={theme === "dark"}
        />
        <label htmlFor="checkbox" className="checkbox-label">
          <i className="fas fa-sun"></i>
          <i className="fas fa-moon"></i>
          <span className="ball"></span>
      </label>
    </nav>
  );
}

export default Navbar;