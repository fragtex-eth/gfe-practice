import { BadgeProps } from "../../types/types";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

export const Badge = ({ className, variant, size, ...props }: BadgeProps) => {
  return (
    <div
      {...props}
      className={cn(badgeVariants({ variant, size }), className)}
    />
  );
};

const badgeVariants = cva(
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
        small: "text-xs h-5 px-[6px]",
        medium: "text-sm h-6 px-2",
        large: "text-sm h-7 px-[10px]",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "medium",
    },
  },
);
