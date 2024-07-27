import React from "react";
import list from "../../public/list.json";
import Cards from "../components/Cards";
import {Link} from 'react-router-dom'
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-28 item-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            nemo, fugit impedit a corrupti rerum incidunt illum optio
            exercitationem ab veniam autem architecto asperiores labore sapiente
            recusandae quia dignissimos blanditiis?
          </p>
          <Link to='/'>
          <button className="bg-pink-500 text-white px-2 py-1 rounded-md hover:bg-pink-700 duration-300 mt-6">
            Back
          </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {list.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
