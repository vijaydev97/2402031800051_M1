function Hello1() {
const isLoggedIn = true;
return(
    <div>
        {
            isLoggedIn ? <h1>wellcome user!</h1> : <h2>pleasse Login</h2>
        }
    </div>
)
}

export default Hello1