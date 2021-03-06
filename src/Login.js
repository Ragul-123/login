import React, { Component } from 'react';
// import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loginStatus:'',
      isLoggedIn:''  
    };
  };
  
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

   // handle click event of register button
  handleRegister = () => {
    this.props.history.push('/Register');
  }
  
  handleSubmit = event => {
    event.preventDefault()

    // const loginUrl = 'http://172.24.145.65/api/login/login';

    // const { email,password } = this.state;

    // const employee = {
    //     email,
    //     password
    // };

    // axios.post(loginUrl,employee)
    // .then(response =>{
    //  console.log(response.data);
    //   if(response.data.Status === "Invalid"){
    //     this.setState(
    //       { loginStatus : response.data.Message,
    //         isLoggedIn:false });
          
    //   }
    //   else{
    //   this.setState(
    //     { loginStatus : response.data.Message,
    //       isLoggedIn:true });
    //     this.props.history.push(`/dashboard/${response.data.Message}`);
    //   }
    // });
    this.props.history.push('/dashboard');
  };

  render() {
    // let {isLoggedIn} = this.state;

    // const renderAuthButton = () => {
    //   if (!isLoggedIn) {
    //     return  <div>
    //                 <h5>{this.state.loginStatus}</h5>
    //             </div>;
    //   }
    // }

    return (
        <div className="Login">
            <h2>Welcome to Aspire System</h2>
            <div className="Login-inner">
                <form onSubmit={this.handleSubmit}>            
                     <h3>Sign In</h3>
    
                    <div className="form-group">
                        <label>Email address</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        name="email"
                        placeholder="Email"
                        autoComplete="email"
                        onChange={this.handleInputChange}
                       required/>
                    </div>
    
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                         type="password"
                         className="form-control"
                         name="password"
                         placeholder="Password"
                         autoComplete="current-password"
                         onChange={this.handleInputChange}
                         required />
                    </div>
                    
                    <div className = "text-center">
                        <button type="submit" className="btn btn-primary" >Submit</button>&emsp;
                        <button className="btn btn-primary" onClick={this.handleRegister}>Register</button>
                    </div>

                    {/* {renderAuthButton()} */}
                </form> 
            </div>
        </div>
      );
  }
}

export default Login;