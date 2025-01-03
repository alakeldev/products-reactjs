import { ReactNode } from "react";

interface IProps {
    children: ReactNode;
    className?: string;
    width?: "w-full" | "w-fit";
}

const Button = ({ children, className, width, ...rest }: IProps) => {
  return (
   <button className={`${className} ${width} p-2 rounded-md`} {...rest}>{ children }</button>
  )
}

export default Button;