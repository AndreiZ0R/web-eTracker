import React, {useRef, useState} from 'react';
import "./SignUp.css";
import "./Background.css"
import "./Second_background_sign_up.css";
import FormInput from "./FormInput";


const NewEmployee = () => {
    // const [username,setUsername] = userState("")
    // const usernameRef = useRef()

    const [values, setValues] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        email: "",
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage:
                "Username should be 3-16 characters and shouldn't include any special character!",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },

        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },

        {
            id: 3,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match!",
            pattern: values.password,
            required: true,
        },

        {
            id: 4,
            name: "firstName",
            type: "text",
            placeholder: "First name",
            required: true,
        },

        {
            id: 5,
            name: "lastName",
            type: "text",
            placeholder: "Last name",
            required: true,
        },

        {
            id: 6,
            name: "Employee email",
            type: "email",
            placeholder: "Employee Email",
            errorMessage: "It should be a valid email addres!",
            required: true,
        },

    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    };


    console.log("re-rendered");
    return (
        <div className="background">
            <div className="second_background_sign_up">
                <form onSubmit={handleSubmit}>
                    <h1>Sign up a new employee</h1>
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default NewEmployee;