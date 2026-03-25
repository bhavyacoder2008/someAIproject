
const RetroSignupUI = () => {
  return (
    <div className="min-h-screen bg-[#e1ff00a0] flex items-center justify-center p-4 font-mono">
      <div className="w-full max-w-md bg-[#a6ffa6] border-[3px] border-black shadow-[10px_8px_0px_0px_rgba(0,0,0,.8)] p-8">
        
        <div className="mb-8 border-b-[3px] border-black pb-4">
          <h1 className="text-4xl font-black italic uppercase tracking-widest text-black">
            SIGN-UP
          </h1>
        </div>

        <form className="space-y-6">
          <div className="flex flex-col">
            <label className="text-xs font-black uppercase mb-1 tracking-widest">Username</label>
            <input
              type="text"
              placeholder="Enter your username "
              className="border-[3px] border-black p-3 bg-white text-black placeholder-gray-400 focus:bg-[#ede4e4] outline-none ring-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.7)]"
            />
          </div>


          <div className="flex flex-col">
            <label className="text-xs font-black uppercase mb-1 tracking-widest">E-mail</label>
            <input
              type="text"
              placeholder="Enter your E-mail"
              className="border-[3px] border-black p-3 bg-white text-black placeholder-gray-400 focus:bg-yellow-50 outline-none  shadow-[4px_4px_0px_0px_rgba(0,0,0,0.7)]"
            />
          </div>


          <div className="flex flex-col">
            <label className="text-xs font-black uppercase mb-1 tracking-widest">Password</label>
            <input
              type="password"
              placeholder="********"
              className="border-[3px] border-black p-3 bg-white text-black placeholder-gray-400 focus:bg-yellow-50 outline-none ring-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.7)]"
            />
          </div>

          <div className="pt-4 flex items-center justify-center ">
            <button
              type="button"
              className=" bg-[#36deff] w-[50%] border-[3px] border-black py-4 text-xl font-black uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:scale-95 hover:bg-[#009bd8] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all duration-400"
            >
              Sign Up
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default RetroSignupUI;