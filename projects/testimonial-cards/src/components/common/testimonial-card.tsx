import { ITestCard } from "../../types/types";

export const TestimonialCard: React.FC<ITestCard> = ({
  img,
  name,
  username,
  text,
}) => {
  return (
    <article className="w-[340px] h-[233px] text-left flex flex-col gap-4 p-6 bg-white rounded-lg shadow mx-auto ">
      <figure className="flex gap-4">
        <img src={img} alt={`${name} profile picture`} className="w-12 h-12" />
        <figcaption className="flex flex-col gap-[1px]">
          <span className="text-lg font-semibold text-neutral-900">{name}</span>
          <span className="text-sm font-normal text-neutral-600">
            {username}
          </span>
        </figcaption>
      </figure>
      <blockquote
        className="text-base font-normal text-neutral-600"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </article>
  );
};
