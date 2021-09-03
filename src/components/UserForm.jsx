import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword]= useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [newUser, setNewUser] = useState({});
    const [validError, setValidError] = useState ("");
    const [lastnamevalid, setLastnamevalid] = useState("");
    const [emailvalid, setEmailvalid] = useState("");
    const [validpassword, setValidpassword] = useState("");
    const [confvalid, setConfvalid] = useState("");

    const createUser = (e) => {
        // To prevent the default behaviour of Form (that reloads the page after submitting)
        e.preventDefault();
        // to bring back each input data back from different hooks we need to create a new object
        // const newUser = {firstname:firstname, lastname:lastname, email:email, password:password, confirmpassword:confirmpassword}
        // we can also write it like
        setNewUser({firstname, lastname, email, password, confirmpassword});

        console.log("Welcome", newUser);


        
    };

    const checkLength = (myParam) => {
        console.log(myParam);

        setFirstname(myParam);
        if(myParam.length < 2){
            setValidError("must be longer than 2 characters")
        }else{
            setValidError("")
        }
    };
    const checkLastname = (myParam) => {
        console.log(myParam);

        setLastname(myParam);
        if(myParam.length < 2){
            setLastnamevalid("must be longer than 2 characters")
        }else{
            setLastnamevalid("")
        }
    };

    const checkEmail = (myParam) => {
        setEmail(myParam);
        if(myParam.length < 2){
            setEmailvalid("must be longer than 2 characters")
        }else{
            setEmailvalid("")
        }
    };

    const checkPassword = (myParam) => {
        setPassword(myParam);
        

        if(myParam.length < 8){
            setValidpassword("Password must be atleast 8 characters")
        }
        else {
            setValidpassword("")
        }
        
    };
    const checkConfPass = (param) => {
        setConfirmpassword(param);
        console.log(password);
        console.log(confirmpassword);
        if(confirmpassword){
            if(password!==confirmpassword){
                setConfvalid("Password must match");
            }
            else{
                setConfvalid("");
            }
        }
        
    }

    

        


    return(
        <div>
            <form onSubmit = {createUser}>
                <div>
                    <label>First Name:</label>
                    <input type="text"  onChange={(e) => checkLength(e.target.value)} value={firstname}/><br/>
                    {validError?<span>First name {validError}</span>:<span>&nbsp;</span>}
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text"  onChange={(e) => checkLastname(e.target.value)}/><br/>
                    {lastnamevalid?<span>Last Name {lastnamevalid}</span>:<span>&nbsp;</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={(e) => checkEmail(e.target.value)}/><br/>
                    {emailvalid?<span>Email {emailvalid}</span>:<span>&nbsp;</span>}
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" onChange={(e) => checkPassword(e.target.value)} value={password}/><br/>
                    {validpassword?<span>Password: {validpassword}</span>:<span>&nbsp;</span>}
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" onChange={(e) => checkConfPass(e.target.value)}/><br/>
                    {confvalid?<span>Confirm Password: {confvalid}</span>:<span>&nbsp;</span>}
                </div>
                <input type="submit" value="Create User" />
            </form>

            <h3>Your Result</h3>
            <h4>First Name : {(newUser)?<span>{newUser.firstname}</span>:(null)}</h4>
            <h4>Last Name : {(newUser)?<span>{newUser.lastname}</span>:(null)}</h4>
            <h4>Email: {(newUser)?<span>{newUser.email}</span>:(null)}</h4>
            <h4>Password:{newUser?<span>{newUser.password}</span>:(null)}</h4>
            <h4>Confirm Password:{newUser?<span>{newUser.confirmpassword}</span>:(null)}</h4>
        </div>
        
    );

    
};

export default UserForm