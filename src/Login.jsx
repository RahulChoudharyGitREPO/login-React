import { useState } from "react";
import axios from "axios";
const Login = () => {
    const payload = { email: "", password: "" };
    const [detail, setDetail] = useState(payload);
    const [key, setKey] = useState("e");
    const change = (e) => {
        // console.log(e.target)
        setDetail({ ...detail, [e.target.name]: e.target.value });
        // console.log(detail);
    };
    const handle = (e) => {
        e.preventDefault();
        console.log(detail)
        axios
            .post("https://reqres.in/api/login", detail)
            .then((res) => setKey(res.data));

    };

    return (
        <>
            <form onSubmit={handle}>
                <h3>Email</h3>
                <input
                    value={detail.email}
                    type="email"
                    onChange={change}
                    name="email"
                    placeholder="email"
                />
                <br />
                <h3>Password</h3>
                <input
                    value={detail.password}
                    onChange={change}
                    name="password"
                    placeholder="password"
                    type="paasword"
                />
                <input type="submit" />
            </form>
            <h1>{key.error}</h1>
        </>
    );
};

export default Login;
