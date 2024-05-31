import { LabelProps } from "../../types/types";
import { cva } from "class-variance-authority";

export const Label = ({ variant, size, ...props }: LabelProps) => {
  return <div {...props} className={labelVariants({ variant, size })} />;
};

const labelVariants = cva(
  "flex justify-center items-center border rounded-full",
  {
    variants: {
      variant: {
        neutral: "text-neutral-600 bg-gray-50 border-neutral-200",
        error: "text-red-600 bg-red-50 border-red-200",
        warning: "text-amber-700 bg-amber-50 border-amber-200",
        success: "text-green-700 bg-green-50 border-green-200",
        brand: "text-indigo-700 bg-indigo-50 border-indigo-200",
      },
      size: {
        small: "text-xs w-[43px] h-5",
        medium: "text-sm w-[52px] h-6",
        large: "text-sm w-14 h-7",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "medium",
    },
  },
);
