import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");


    const createUser = (e) => {
        e.preventDefault();
        const newU = {firstname, lastname, email, password, confirmpassword}; //Not needed ultimately for this assignment, but for future use?
    }

return(
    <div>
        <form onSubmit={createUser}>
            <div>
                <label htmlFor='firstname'>First Name : </label>
                <input name="firstname" type="text" onChange={ (e) => {setFirstname(e.target.value)}} value={firstname} />
            </div>
            <div>
                <label>Last Name : </label>
                <input type="text" onChange={ (e) => {setLastname(e.target.value) }} value={lastname} />
            </div>
            <div>
                <label>Email : </label>
                <input type="email" onChange={ (e) => {setEmail(e.target.value) }} value={email}/>
            </div>
            <div>
                <label>Password : </label>
                <input type="password" onChange={ (e) => {setPassword(e.target.value) }} value={password}/>
            </div>
            <div>
                <label>Confirm Password : </label>
                <input type="password" onChange={ (e) => {setConfirmpassword(e.target.value) }} value={confirmpassword} />
            </div>
            <input type="submit" value="Submit User"/>
        </form>
        
        <div>
            <h3>Your Form Data</h3>
            <p>{firstname}</p>
            <p>{lastname}</p>
            <p>{email}</p>
            <p>{password}</p>
            <p>{confirmpassword}</p>
        </div>
</div>
);
};

export default UserForm;