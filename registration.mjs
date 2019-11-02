class RegistrationUser extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
        this.shadow.innerHTML = `
        <div class="regwrapper" id="registrationForm">
        <h3>Registration form</h3>
        <form id="registration">
            Login:<input type="text" id="login">
            First Name:<input type="text" name="firstname" id="firstName">
            Last Name:<input type="text" name="lastname"id="lastName">
            E-mail:<input type="email" name="email" id="email">
            Password:<input type="password" id="pass1">
            Confirm Password:<input type="password" id="pass2">
            <img src="./img/anonim.png" width="50" alt="user avatar" id="avatar">
            Choose avatar image <input type="file" id="chooseFile">
            <input type="hidden" value="" name="pass-hash" id="passHash">
            <input type="hidden" value="" name="user-photo" id="userPhoto">
        </form>
        <div>
            <button id="accept">Accept</button><button id="exitbutton">Cancel</button>
        </div>
        `
        this.shadow.style = `
        .regwrapper{
            position: fixed;
            display:flex;
            flex-direction: column;
            border:1px solid gray;
            box-shadow: 0 50px 50px rgba(0, 0, 0, 0.1);
            padding: 5px;
            left:40%;
            top:-100%;
            transition: all 1s;
            z-index:100;
            background-color: lightgrey;
        }
        #registration{
            padding:10px;
            border:1px solid gray;
            width:30vw;
            height:50vh;
            display:flex;
            flex-direction: column;
            justify-content: space-around;
        }
       `
    }
}
export {RegistrationUser}