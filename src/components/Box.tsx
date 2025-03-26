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
      className={`h-[500px] flex flex-col justify-between bg-cover relative rounded-[20px] overflow-hidden shadow-[0 20px 15px rgb(0 0 0 / 30%)] before:absolute before:inset-0 before:w-full before:h-full before:bg-gradient-to-t before:from-black before:via-black/50 before:to-black/0 before:content-[''] group ${classNames}`}
      style={{ backgroundImage: image ? `url(${image})` : "" }}
      onClick={onClick}
    >
      <h3 className="flex justify-center text-[40px] text-white mb-[40px]">{children}</h3>
    </div>
  );
};

export default Box;
