import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const RetroSignupUI = () => {
  const [username , setUsername] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [signing , setSigning] = useState(false);
  const [displayErrors , setDisplayErrors] = useState({});

  useEffect(() => {
	setDisplayErrors({})
  },[])


  const handleClick = async (e) => {
    e.preventDefault();
    setSigning(true)
    try{
		const res = await axios.post("http://localhost:3000/user/signup" , { //iss exact moment par react ko moka mil gya re render karne ka
			username,email,password
		}, {withCredentials: true});
		console.log(res.data)

    }catch(err){
		console.log(err.response.data.errors.errors)

		const errorArray = err.response.data.errors.errors
		const tempObjecttoStoreErr = {}

		errorArray.forEach((error) => {
			tempObjecttoStoreErr[error.path] = error.msg // agar empty object mein hamein nayi value store karni ho to aise kerengein coz error.path is a variable agr . krke karengein to direct usi naam se store hogi 
		});

		setDisplayErrors(tempObjecttoStoreErr)



	} finally {
		setSigning(false);
	}
  }

  return (
    <div className="min-h-screen bg-[#e1ff00a0] flex items-center justify-center p-4 font-mono">
      <div className="w-full max-w-md bg-[#a6ffa6] border-[3px] border-black shadow-[10px_8px_0px_0px_rgba(0,0,0,.8)] p-8">
        
        <div className="mb-8 border-b-[3px] border-black pb-4">
          <h1 className="text-4xl font-black italic uppercase tracking-widest text-black">
            SIGN-UP
          </h1>
        </div>

        <form className="space-y-6" onSubmit={handleClick}>
          <div className="flex flex-col">
            <label className="text-xs font-black uppercase mb-1 tracking-widest">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`border-[3px] ${displayErrors.username ? "border-red-700 shadow-[4px_4px_0px_0px_rgba(1,0,0,0.9)]": "border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.7)]" } p-3 bg-white text-black placeholder-gray-400 focus:bg-[#ede4e4] outline-none ring-0`}
            />
          </div>
		  {displayErrors.username && <p className="text-red-600 -mt-2 pl-2 sm:text-sm text-xs text-nowrap">{displayErrors.username}</p>} {/* displayErrors object mein username naam ki key hai ? agar yes to aage wali cheez display krwa do */}


          <div className="flex flex-col">
            <label className="text-xs font-black uppercase mb-1 tracking-widest">E-mail</label>
            <input
              type="text"
              placeholder="Enter your E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`border-[3px] ${displayErrors.email ? "border-red-700 shadow-[4px_4px_0px_0px_rgba(1,0,0,0.9)]": "border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.7)]" } p-3 bg-white text-black placeholder-gray-400 focus:bg-[#ede4e4] outline-none ring-0`}
            />
          </div>
		  {displayErrors.email && <p className="text-red-600 -mt-2 pl-2 sm:text-sm text-xs text-nowrap">{displayErrors.email}</p>} {/* displayErrors object mein username naam ki key hai ? agar yes to aage wali cheez display krwa do */}



          <div className="flex flex-col">
            <label className="text-xs font-black uppercase mb-1 tracking-widest">Password</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`border-[3px] ${displayErrors.password ? "border-red-700 shadow-[4px_4px_0px_0px_rgba(1,0,0,0.9)]": "border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.7)]" } p-3 bg-white text-black placeholder-gray-400 focus:bg-[#ede4e4] outline-none ring-0`}
              
			  />
          </div>
		  {displayErrors.password && <p className="text-red-600 -mt-2 pl-2 sm:text-sm text-xs text-nowrap">{displayErrors.password}</p>} {/* displayErrors object mein username naam ki key hai ? agar yes to aage wali cheez display krwa do */}


          <div className="pt-4 flex items-center justify-center ">
            <button
              type="submit"
              disabled={signing}
              className=" bg-[#36deff] w-[50%] border-[3px] border-black py-4 text-xl font-black uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:scale-95 hover:bg-[#009bd8] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all duration-400 disabled:opacity-50 disabled:cursor-not-allowed text-nowrap min-w-fit"
            >
              {signing ? "Signing up..." : "Sign Up"}
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default RetroSignupUI;