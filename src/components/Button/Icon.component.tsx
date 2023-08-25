import { ButtonHTMLAttributes, forwardRef } from "react";

interface IconProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Icon = forwardRef<HTMLButtonElement, IconProps>(function Icon({
  children,
  className,
  ...rest
}, ref) {
  return (
    <button
      className={`relative inline-flex items-center px-3 py-2 bg-gray-50 
      hover:(bg-gray-100 text-gray-700) dark:(bg-gray-900 hover:bg-gray-700 
      hover:text-white) text-gray-400 rounded-lg text-sm font-medium 
      default-transition default-focus
       ${className}`}
      ref={ref}
      // onClick={(e): void => onclick && onclick(e)}
      {...rest}
    >
      {children}
    </button>
  );
})