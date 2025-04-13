import { CSSProperties, ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  classNames?: string;
  image?: CSSProperties;
  onClick?: () => void;
}

const Box: React.FC<BoxProps> = ({
  children,
  classNames = "",
  image = {},
  onClick,
}) => {
  return (
    <div
      className={`h-[500px] flex flex-col justify-end bg-cover relative rounded-[20px] overflow-hidden shadow-[0_20px_15px_rgb(0_0_0_/30%)] before:absolute before:inset-0 before:w-full before:h-full before:bg-gradient-to-t before:from-black before:via-black/50 before:to-black/0 before:content-[''] group ${classNames}`}
      style={{ backgroundImage: image ? `url(${image})` : "" }}
      onClick={onClick}
    >
      {/* Heading moves from bottom to top on hover */}
      <h3 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 transition-all duration-300 group-hover:bottom-[20%] text-[40px] text-white">
        {children}
      </h3>
    </div>
  );
};

export default Box;
