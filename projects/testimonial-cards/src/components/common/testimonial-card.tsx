import { ITestCard } from "../../types/types";

export const TestimonialCard = ({ img, name, username, text }: ITestCard) => {
  return (
    <div className="w-[340px] h-[233px] text-left flex flex-col gap-4 p-6 bg-white rounded-lg shadow mx-auto ">
      <div className="flex gap-4">
        <div>
          <img src={img} className="w-12 h-12" />
        </div>
        <div className="flex flex-col gap-[1px]">
          <span className="text-lg font-semibold text-neutral-900">{name}</span>
          <span className="text-sm font-normal text-neutral-600">
            {username}
          </span>
        </div>
      </div>
      <p
        className="text-base font-normal text-neutral-600"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};
