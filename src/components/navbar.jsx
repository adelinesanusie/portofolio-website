import { useEffect, useState } from "react";

function Navbar() {
  const [theme, setTheme] = useState("")

  const changeTheme = () => {
    if(theme === ""){
      setTheme("dark")
      document.body.classList.toggle("dark")
    }
    else {
      document.body.classList.remove("dark")
      setTheme("")
    }
  }

  return (
    <nav class="topnav">
        <a href="#home">HOME</a>
        <a href="#experiences">EXPERIENCES</a>
        <a href="#gallery">GALLERY</a>
        <a href="#contact">CONTACT</a>
        <input type="checkbox" class="checkbox" id="checkbox" onChange={() => changeTheme()}/>
        <label for="checkbox" className="checkbox-label">
            <i class="fas fa-sun"></i>
            <i class="fas fa-moon"></i>
            <span class="ball"></span>
        </label>
    </nav>
  );
}

export default Navbar;