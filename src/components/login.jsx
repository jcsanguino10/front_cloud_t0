import { useState } from "react";

export default function Login({setUserInfo}) {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");
    const [signOn, setSignOn] = useState(false);

    function doSignIn(e) {
        e.preventDefault();
        setUserInfo("Hello")
    }

    function doLogIn(e) {
        e.preventDefault();
        setUserInfo("Hello")
    }
    return (
      <div className="h-screen bg-blue-950 flex">
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
          <div className="">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Welcome to task manager
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={(e)=>{signOn? doSignIn(e) : doLogIn(e)}}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                  User
                </label>
                <div className="mt-2">
                  <input
                    id="user"
                    name="user"
                    type="user"
                    value={user}
                    onChange={({ target }) => setUser(target.value)}
                    autoComplete="user"
                    required
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {signOn? 
                <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                    Image profile (Optional)
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="image"
                    name="image"
                    type="url"
                    value={image}
                    onChange={({ target }) => setImage(target.value)}
                    autoComplete="image"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              : <></>}

  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {signOn? "Sign in" : "Log in"}
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-white">
              {signOn? "You are a member" : "Not a member?"}{' '}
              <a href="#" onClick={()=>setSignOn(!signOn)} className="font-semibold leading-6 text-blue-500 hover:text-blue-600">
              {!signOn? "Sign in" : "Log in"}
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
  
