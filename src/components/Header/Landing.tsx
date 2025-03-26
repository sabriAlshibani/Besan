import Container from "../Container";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import TripSelector from "../TripSelector";

function Landing() {
  return (
    <div className="">
      <Container classNames="flex justify-between items-center min-h-[100vh] relative max-lg:flex-col">
        <div className="flex-1">
          <h1 className="font-bold text-center text-[50px] m-w-[500px] max-sm:text-[30px]">
            عيش تجربة السفر الفريدة{" "}
            <span className="text-[#a8be2f]">الخاصة بك</span>
          </h1>
          <p className="text-[20px] text-secondary text-center mt-[20px] leading-loose text-center max-w-[500px]">
            احجز رحلتك معنا وإستمتع بدون متاعب, اكتشف أماكن مذهلة بعروض سياحية
            حصرية. تناول الطعام، تسوق، وزور أماكن مثيرة حول العالم
          </p>
          <div className="absolute flex justify-around items-center bg-white shadow-lg rounded-[20px] w-[800px] left-0 z-[99999] my-[30px] max-md:max-w-full max-md:flex-col">
            <button
              className="flex flex-col gap-[20px] bg-primary text-white justify-center items-center p-[34px] rounded-l-[20px] max-md:w-full max-md:rounded-none max-md:rounded-b-[20px] max-md:flex-row max-md:order-2 max-md:mt-[20px]"
              type="submit"
            >
              <FontAwesomeIcon
                icon={faSearch}
                className="w-10 h-10"
              />
              <span className="text-[22px]">ابحث الآن</span>
            </button>

            <div className="flex flex-col gap-[20px] w-[40%] max-md:w-[80%]">
              <TripSelector/>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src="/images/besan1.jpg"
            alt="besan website"
            width={500}
            height={500}
            className="w-[500px] rounded-[20px] z-100 max-lg:hidden"
          />
        </div>
      </Container>
    </div>
  );
}
export default Landing;
