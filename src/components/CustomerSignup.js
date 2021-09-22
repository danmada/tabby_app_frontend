import React, { useState, useEffect } from "react"
import styled from "styled-components";

function CustomerSignup({setUser}) {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [creditCard, setCreditCard] = useState("")
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/customers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
            password_confirmation: passwordConfirmation,
          }),
        })
    .then((r) => {
        if (r.ok) {
          r.json().then(user => setUser(user));
        }
      });
      }



return(
    <div>
        <SignupForm onSubmit={handleSubmit}>
        <MenuTitle>Sign Up</MenuTitle>
        <Title>Username</Title>
        <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <Title>Name</Title>
         <input
            type="text"
            id="name"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <Title>Age</Title>
        <input
            type="text"
            id="age"
            autoComplete="off"
            value={age}
            onChange={(e) => setAge(e.target.value)}
        />
        <Title>Email</Title>
        <input
            type="text"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <Title>Credit Card</Title>
         <input
            type="text"
            id="credit_card"
            autoComplete="off"
            value={creditCard}
            onChange={(e) => setCreditCard(e.target.value)}
        />
        <Title>Password</Title>
        <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
        />
        <Title>Password Confirmation</Title>
        <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
        />
        <button className="login" type="submit">Sign Up</button>
      </SignupForm>
    </div>
)
}

//styled components
const SignupForm = styled.form`
    display: grid;
    width: 200pt;
    padding-left: 18%;
    left: 35pt;
`
const Title = styled.label`
   font-family: Arial;
   color: rgb(255, 140, 0);
`
const MenuTitle = styled.h2`
   font-family: Arial;
   color: rgb(255, 140, 0);
`

export default CustomerSignup