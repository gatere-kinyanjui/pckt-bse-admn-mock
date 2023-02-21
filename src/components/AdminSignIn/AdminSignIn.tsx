import "./style.module.css";

const AdminSignIn = () => {
  return (
    <div className="wrapper">
      <div className="logo">
        <img src="#" alt="" />
        <span className="text">
          Pocket<strong>Base</strong>
        </span>
      </div>

      <form action="" className="formContainer">
        <h4>Admin Sign In</h4>

        <div className="inputRequired">
          <label htmlFor="">
            <input type="text" className="email" placeholder="EMAIL" />
          </label>
        </div>

        <div className="inputRequired">
          <label htmlFor="">
            <input type="text" className="password" placeholder="Password" />
          </label>
        </div>

        <div className="help">
          <a href="#">Forgotten Password?</a>
        </div>

        <button className="login" type="submit">
          <span>Login &#8594;</span>
        </button>
      </form>
    </div>
  );
};

export default AdminSignIn;
