import Container from "@/components/Container";
import MainTitle from "@/components/MainTitle";
import { faGraduationCap, faHeartbeat, faIdCard, faLandmark, faPlane, faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
    return (
      <div className="services py-16">
        <MainTitle>الخدمات</MainTitle>
        <Container classNames="container mx-auto px-6 flex flex-col lg:flex-row gap-10">
          <div className="description text-center lg:w-[600px]">
            <h3 className="text-4xl font-semibold text-main mb-4">خدماتنا السياحية</h3>
            <p className="text-lg text-gray-600">
              نحن شركة سياحية متخصصة في تقديم تجارب سفر لا تنسى حول العالم. نحن نقدم خدمات سياحية شاملة ويعمل فريقنا المتخصص على تخطيط الرحلات وفقًا لمتطلبات عملائنا وتوفير تجارب سفر مصممة خصيصًا لتلبية احتياجاتهم ورغباتهم.
            </p>
            <div className="year-age w-fit bg-cover bg-center px-6 py-4 mx-auto mt-10" style={{ backgroundImage: "url('images/shape-map 1.png')" }}>
              <h4 className="text-5xl font-bold text-gray-600 mb-2">10 أعوام</h4>
              <span className="text-xl text-main-alt">من الخبرة</span>
            </div>
          </div>
          <div className="srv grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:w-[500px]">
      {[
        { icon: faPlane, text: "حجز تذاكر الطيران" },
        { icon: faGraduationCap, text: "برامج الدراسة في الخارج" },
        { icon: faHeartbeat, text: "رحلات علاجية" },
        { icon: faLandmark, text: "رحلات سياحية" },
        { icon: faIdCard, text: "رخصة قيادة" },
        { icon: faSuitcase, text: "مستلزمات السفر" },
      ].map((service, index) => (
        <div
          key={index}
          className="box flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-2xl transition hover:bg-secondary"
        >
          <div className="shape-icon w-24 h-24 flex items-center justify-center rounded-full bg-secondary transition hover:bg-transparent">
            <FontAwesomeIcon icon={service.icon} className="w-10 h-10 text-main text-primary" />
          </div>
          <p className="mt-4 text-lg text-gray-700 text-center">{service.text}</p>
        </div>
      ))}
    </div>
        </Container>
      </div>  
    );
};

export default Services;
