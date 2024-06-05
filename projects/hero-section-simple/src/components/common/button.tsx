import { cn } from "../../utils/cn";
import { cva } from "class-variance-authority";
type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};
export const Button = ({ className, variant, ...props }: ButtonProps) => {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)} />
  );
};

const buttonVariants = cva(
  "py-[11px] shadow-sm text-base font-medium  rounded-[4px] border sm:py-[15px] text-base sm:text-lg w-[151.5px] sm:w-[213px] lg:w-[175.5px] shadow",
  {
    variants: {
      variant: {
        primary: "bg-white text-black border-neutral-200",
        secondary: "bg-[#4338CA] border-[#4338CA] text-white ",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);
