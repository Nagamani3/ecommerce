import React from "react";

const TopHeader = () => {
  return (
    <section className="bg-[#F5F5F5] h-12 shadow-sm">
      <article className="flex mx-auto w-[90%] h-12">
        <div className="text-black- flex justify-start basis-[50%] items-center italic	">
          Welcome to SHOPIT
        </div>
        <div className="text-black flex justify-end basis-[50%]">
          <ul className="flex items-center space-x-8">
            <li className=" hover:text-orange-500 ">Wishlist</li>
            <li className="hover:text-orange-500 ">Compare</li>
            <li className=" hover:text-orange-500 ">Currency</li>
            <li className="hover:text-orange-500 ">Languages</li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default TopHeader;
