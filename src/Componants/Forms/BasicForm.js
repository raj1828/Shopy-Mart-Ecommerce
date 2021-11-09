import React, {  useState } from "react" 
import "./BasicForm.css";

export default function BasicForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [ allEntry, setAllEntry] = useState([]);
    const submitForm = (e) =>{
        e.preventDefault();
        const newEntry =  {email: email, password: password}

        setAllEntry([...allEntry, newEntry]);
        console.log(newEntry)
    }


    return (
        <>
        <div className="container" style={{display: "flex", justifyContent:"center"}}>
            <div className="container2">
                <header>Sign Up </header>
                <form action="" onSubmit={submitForm}>
                    
                    <div className="input-field">
                        <input type="text" required name="email" htmlFor="userEmail" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label>Email</label>
                    </div>
                    
                    
                    <div className="input-field">
                        <input className="pswrd" type="password" name="pass" htmlFor="userPass" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <span class ="show">SHOW</span>
                        <label>Password</label>
                    </div>
                    
                    <div className="button">
                        <div className="inner"></div>
                        <button type="submit" >Sign Up</button>
                    </div>
                </form>
                {/* <div className="auth">
                    Or login with
                </div>
                <div className="links">
                    <div className="facebook">
                        <i className="fab fa-facebook-square"><span><div >Facebook</div></span></i>
                    </div>
                    <div className="google">
                        <i className="fab fa-google-plus-square"><span>Google</span></i>
                    </div>
                </div>
                <div className="signup">
                    Already member? <a href="sign_in.html">Login now</a>
                </div> */}
                <div>
                    {
                        allEntry.map((currElem)=>{
                            return <div>
                                <p>Login Successful</p>
                                <p>{currElem.email}</p>
                                <p>{currElem.password}</p>
                            </div>
                        })
                    }
                </div>
            </div>
            </div>
        </>
    )
}
