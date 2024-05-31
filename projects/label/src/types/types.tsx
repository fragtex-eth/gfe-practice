export type TVariant = "neutral" | "error" | "warning" | "success" | "brand";
export type TSize = "small" | "medium" | "large";

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: TVariant;
  size?: TSize;
};
