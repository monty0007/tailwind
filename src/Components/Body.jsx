import React from "react";

const Body = () => {
  return (
    <div className=" space-y-4 lg:flex">
      <div className=" flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
        <div className="flex items-center justify-center absolute dabba">
        <img src="/loki.jpg" alt="1st" className="lg:h-[400px] loki " style={{"height":"300px " }}/>
        </div>  
        <img src="/rectangle.jpeg" alt="2ns" className="lg:h-[400px] lokii"/>
      </div>
      <div className="lg:flex-1 lg:order-1">
        <h1 className=" text-5xl font-bold font-playfair leading-tight">Find Your Date In Less Than 50 Years</h1>
        <p className=" font-lato text-gray-400">With Solo, get your matching partner in less than 50 years without any cost</p>
        <form action="" className=" flex flex-col gap-4 md:flex-row">
          <input className=" rounded-md px-4 py-3 placeholder:text-gray-400" type="email" placeholder="Enter Email Address" />
          <button className=" rounded-md py-4 px-3 bg-blue-400 hover:bg-blue-600 text-white">Join Waitist</button>
        </form>
        <div className=" flex gap-2">
          <img src="/check.jpg" alt="check" className="lokiii"/>
          <p className=" font-lato text-gray-400 ">No spam, ever. Unsubscribe anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
