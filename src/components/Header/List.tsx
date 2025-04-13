import { links } from "@/app/data/navData";
import LinkButton from "../LinkButton";
type ListProps = {
  isOpen: boolean;
};

function List({ isOpen }: ListProps) {
  return (
    <ul
      className={`flex justify-end flex-1 font-cairo items-center gap-12 z-[9999] max-md:text-[#7e9019] 
      ${isOpen ? "max-md:flex-col max-md:right-2 max-md:top-[100%] max-md:shadow-lg max-md:bg-white max-md:opacity-100" : "max-md:opacity-0 max-md:flex-col max-md:right-2 max-md:top-[100%]"}`}
    >
      {links.map((link, index) => (
        <LinkButton key={index} href={link.href}>
          {link.label}
        </LinkButton>
      ))}
    </ul>
  );
}

export default List;
