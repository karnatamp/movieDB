import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { RiMovie2Fill } from "react-icons/ri";

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
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
    // Get the values of the input fields


	// Create local storeage of user with email and password
	const handleLocalStorage = () => {
		let email = data.email;
		let password = data.password;
		localStorage.setItem("user", JSON.stringify({ data, password }));
	}

	return (
			<div>
            <div className="main-sign-up-container">
              <div className="music-icon-box">
                   <span className="homepage">
                      <RiMovie2Fill className='BrandLogo'/>
                   </span>
                  <h5 className="teal-head">welcome to MovieDB</h5>
              </div>
              <div className="create-acount-box">
                  <h3>create your account</h3>
              </div>
              <div className="user-form-container">
                  <form  onSubmit={handleSubmit}>
                    <div className="name first-name">
                          <label for="name">First name</label>
						  <input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
                    </div>
                    <div className="name second-name">
                          <label for="name">Second name</label>
                          <input type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className={styles.input}  
								 />
                    </div>
                    <div className="name phone-number">
                          <label for="name">Phone number</label>
                          <input type="phone"
						         name="phone-number" 
								 id="phone-number"  
								 
                                placeholder="+10 209 289 276 "/>
                    </div>
                    <div className="email">
                          <label for="email">email</label>
                          <input type="email"
								placeholder="Email"
								name="email"
								onChange={handleChange}
								value={data.email}
								required
								className={styles.input}
								/>
                                
                    </div>
                    <div className="name country">
                          <label for="name">Country</label>
                          <input type="text" 
						         name="country" 
								 id="country" 
								 
                                 placeholder="USA"/>
                    </div>
                    <div className="name Area">
                          <label for="name">Area</label>
                          <input type="text" 
						         name="Area" 
								 id="Area"  
								 placeholder="Illinois"  
								 />
                    </div>
                    <div className="name city">
                          <label for="name">City</label>
                          <input type="text" 
						         name="city" 
								 id="city" 
								 placeholder="Chicago"  
								/>
                    </div>
                    <div className="name street">
                          <label for="name">Street</label>
                          <input type="text" 
						         name="street" 
								 id="street"  
								 placeholder="...." 
								/>
                    </div>
                    <div className="name street-number">
                          <label for="name">Street number</label>
                          <input type="text" 
						         name="street-number" 
								 id="street-number" 
								 placeholder="....." 
								  />
                    </div>
                      
                    <div className="password">
                          <label for="password">password</label>
                          <input 
								type="password"
								placeholder="Password"
								name="password"
								onChange={handleChange}
								value={data.password}
								required
								className={styles.input}
								/>
                    </div>  
					{error && <div className={styles.error_msg}>{error}</div>}
                    <div className="create-account-btn">
                          <button type="submit" id="submit" className="btn btn-primary" onClick={() =>  handleLocalStorage() }>Create Account</button>
                    </div>  
                    <div id="message-pop" className="message"></div>      
                  </form>

                  <div className="already-have-account">
                      <p>Already have an account? 
                         <Link to="/login">
							 <span className="signbtn" >Sign In</span>
					     </Link>		 
                      </p>
              </div>
          </div>
      </div>
      </div>
	);
};

export default Signup;
