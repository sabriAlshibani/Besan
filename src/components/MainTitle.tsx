type HeadingProps = {
  children?:string;
}
function MainTitle({children}:HeadingProps) {
  return (
<h2 className="relative w-fit m-[0_auto_100px] py-[5px] px-[20px] text-[26px] uppercase border border-black z-[1] text-black transition-colors duration-500 hover:text-white hover:border-[var(--main-color)] hover:delay-500 before:content-[''] before:absolute before:w-[12px] before:h-[12px] before:bg-[var(--main-color)] before:rounded-full before:top-1/2 before:left-[-30px] before:-translate-y-1/2 before:transition-all before:duration-500 hover:before:z-[-1] hover:before:animate-left-move after:content-[''] after:absolute after:w-[12px] after:h-[12px] after:bg-[var(--main-color)] after:rounded-full after:top-1/2 after:right-[-30px] after:-translate-y-1/2 after:transition-all after:duration-500 hover:after:z-[-1] hover:after:animate-right-move">
{children}
</h2>

  );
}
export default MainTitle;
