import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div className="rounded-xl overflow-hidden bg-[#181818]">
      <div className="relative h-52 md:h-72 group">
        {/* Use Image component here */}
        <Image
          src={imgUrl}
          alt={`Screenshot of ${title}`}
          layout="fill"
          objectFit="cover" // This ensures the image covers the entire element area
          className="group-hover:opacity-80 transition-all duration-500"
        />
        {/* Overlay that appears on hover */}
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link href={gitUrl} aria-label={`Link to ${title} code`} passHref>
            <div className="h-14 w-14 mr-2 border-2 flex items-center justify-center rounded-full border-[#ADB7BE] hover:border-white cursor-pointer">
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] hover:text-white" />
            </div>
          </Link>
        </div>
      </div>
      <div className="text-white py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
