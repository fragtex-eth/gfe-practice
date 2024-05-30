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
        className="size-16  mx-auto"
      />
      <div>
        <h3 className="text-xl font-medium mt-[1px] mb-[3px]">{name}</h3>
        <div className="h-5 flex items-center justify-center">
          <span className="text-sm font-normal text-neutral-600">
            {occupation}
          </span>
        </div>
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
      <div className="flex w-44 mx-auto justify-between h-9 items-center">
        <RiGithubFill size={20} color="#4338CA" aria-label="GitHub" />
        <RiLinkedinBoxFill size={20} color="#4338CA" aria-label="LinkedIn" />
        <RiInstagramFill size={20} color="#4338CA" aria-label="Instagram" />
        <RiTwitterXFill size={20} color="#4338CA" aria-label="Twitter" />
      </div>
    </article>
  );
};
