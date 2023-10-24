import React from "react";

const Navbar = () => {
  return (
      <nav>
          <aside>
              <button><i class="fa-solid fa-angle-left"></i></button>
              <button><i class="fa-solid fa-angle-right"></i></button>
          </aside>
          <aside>
              <button>Sign up</button>
              <button>Login</button>
          </aside>
    </nav>
  );
};

export default Navbar;
