import { IBlogCard } from "../types/types";
import Arrow from "../assets/Arrow.png";
export const BlogCard: React.FC<IBlogCard> = ({
  img,
  tags,
  title,
  description,
  link,
}) => {
  return (
    <article className="shadow h-[504px] w-[340px] rounded-lg overflow-hidden bg-white">
      <figure>
        <img className="h-[288px] w-full object-cover" src={img} />
      </figure>
      <figcaption className="px-4 py-6">
        <div className="flex gap-4 mb-2">
          {tags.map((tag) => (
            <span
              className="h-[24px] w-[67px] flex justify-center items-center rounded-full border border-green-200 text-sm font-normal text-green-700"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mb-3 text-lg font-semibold text-neutral-900">{title}</h3>
        <p className="text-base font-medium text-neutral-600 mb-6">
          {description}
        </p>
        <a
          className="my-[2px] text-indigo-700 text-base font-medium flex  flex gap-3 items-center"
          href={link}
        >
          Read more
          <img className="h-[13px] w-[13.33px]" src={Arrow} />
        </a>
      </figcaption>
    </article>
  );
};
