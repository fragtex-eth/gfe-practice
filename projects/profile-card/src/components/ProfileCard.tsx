import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "@remixicon/react";
import { IProfileCard } from "../types/types";

export const ProfileCard: React.FC<IProfileCard> = ({
  img,
  name,
  occupation,
  description,
}) => {
  return (
    <article className="w-[340px] h-[428px] flex flex-col justify-center text-center rounded-lg bg-white py-6 px-4 gap-6 mx-auto shadow">
      <img
        src={img}
        alt={`${name} profile picture`}
        className="h-16 w-16 rounded-full mx-auto"
      />
      <div>
        <h3 className="text-xl font-medium mb-1">{name}</h3>
        <span className="text-sm font-normal text-neutral-600">
          {occupation}
        </span>
      </div>
      <p className="text-neutral-600 text-base font-normal mb-4">
        {description}
      </p>
      <button
        className="text-base font-medium text-white h-11 bg-indigo-700 rounded"
        aria-label={`Contact ${name}`}
      >
        Contact me
      </button>
      <div className="flex w-48 mx-auto justify-between  h-9 items-center">
        <RiGithubFill size={20} color="#4338CA" aria-label="GitHub" />
        <RiLinkedinBoxFill size={20} color="#4338CA" aria-label="LinkedIn" />
        <RiInstagramFill size={20} color="#4338CA" aria-label="Instagram" />
        <RiTwitterXFill size={20} color="#4338CA" aria-label="Twitter" />
      </div>
    </article>
  );
};
