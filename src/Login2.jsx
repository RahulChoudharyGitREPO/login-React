import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login2 = () => {
    const initialDetails = { email: "", password: "" };
    const [details, setDetails] = useState(initialDetails);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("https://reqres.in/api/login", details)
            .then((res) => {
                // Assuming the token is returned in the response
                const token = res.data.token;

                // Check for successful login (replace 'success' with your condition)
                if (token) {
                    // Redirect to the dashboard page
                    navigate('/Product');
                }
            })
            .catch((error) => {

                setError("Invalid email or password");
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>Email</h3>
                <input
                    value={details.email}
                    type="email"
                    onChange={handleChange}
                    name="email"
                    placeholder="email"
                />
                <br />
                <h3>Password</h3>
                <input
                    value={details.password}
                    onChange={handleChange}
                    name="password"
                    placeholder="password"
                    type="password"
                />
                <br />
                <input type="submit" />
            </form>
            {error && <h1>{error}</h1>}
        </>
    );
};

export default Login2;
