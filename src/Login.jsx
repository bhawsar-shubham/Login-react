import React from 'react'

const Login = () => {
    var che={
        name:'xyz',
    }
    const handleClick = ()=>{
        alert(`${che.name} Login success `)
    }
    return (
        <>
        <div className="my-2">
            <h1 className="text-center" > Login</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form action="">
                    <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" name="username" value="" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                    <label className="form-label">password</label>
                    <input type="password" className="form-control" id="exampleFormControlInput1" name="password" value="" placeholder="*******"/>
                    </div>
                    <button onClick={handleClick} type="submit" className="btn btn-outline-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login
