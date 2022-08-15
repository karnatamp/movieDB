import { useState } from "react";
import axios from "axios";
import { Link,} from "react-router-dom";
import styles from "./styles.module.css";
import { RiMovie2Fill } from "react-icons/ri";	

const  Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};


	return (
	    <div> 
           <div class="main-sign-up-container">
                <div class="music-icon-box">
                        <Link to="/">
                            <span className="homepage">
                                <RiMovie2Fill className='BrandLogo' />
                            </span>
                        </Link>
                        <h5 class="teal-head">welcome to MovieDB</h5>
                    </div>
              <div class="create-acount-box">
                  <h3>Sign In</h3>    <span className="homepage">
                                <RiMovie2Fill className='BrandLogo' />
                            </span>
              </div>
              <div class="user-form-container">
                  <form onSubmit={handleSubmit} >
                      <div class="email">
                          <label for="email">email</label>
                          {/* Add inpute field */}
                          <input type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							

						  />
                            
                      </div>
                      <div class="password">
                          <label for="password">password</label>
                          <input type="password"
								placeholder="Password"
								name="password"
								onChange={handleChange}
								value={data.password}
								required
								
						   />
                      </div>
                      <div class="create-account-btn">
                          {/* If error message is internnal server error redirect to homepage */}
                        
					     {(error === "Internal Server Error")? window.location = "/Home" : ""}
                          <button type="submit" class="btn btn-primary">Sign In</button>
                      </div>        
                  </form>

                  <div class="already-have-account">
                      <p>Create an Account? 
					  <Link to="/signup">
						<span className="signbtn" >Sign Up</span>
						</Link>
						</p>
              </div>
          </div>
      </div>
    </div>
		
	);
};

export default Login;
