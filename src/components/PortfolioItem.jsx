import React from "react";

function PortfolioItem({ title, imgUrl, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-stone-300 mb-2 md:mb-3 font-semibold ">
          {title}
        </h3>
      </div>
    </a>
  );
}

export default PortfolioItem;
