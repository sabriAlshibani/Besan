import Link from "next/link";

type elementProps = {
  href?: string;
  children?: string;
};

function LinkButton({ href, children }: elementProps) {
  return (
    <Link href={href || "#"} className="text-gray-500 text-[18px] font-semibold hover:text-primary">
      {children}
    </Link>
  );
}

export default LinkButton;
