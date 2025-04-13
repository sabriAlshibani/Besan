import { footerData } from "@/app/data/footerData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <footer className="bg-secondary text-gray-300 py-10 mt-16">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side - Company Info */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-white">{footerData.company.name}</h2>
          <p className="text-sm mt-2">{footerData.company.description}</p>
        </div>

        {/* Middle - Navigation Links */}
        <div className="flex flex-col md:flex-row gap-4">
          {footerData.links.map((link, index) => (
            <a key={index} href={link.url} className="hover:text-main">
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side - Social Media */}
        <div className="flex space-x-4">
          {footerData.socialMedia.map((social, index) => (
            <a key={index} href={social.url} className="text-white hover:text-primary">
              <FontAwesomeIcon icon={social.icon} className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-8 border-t border-gray-200 pt-4">
        <p className="text-sm">جميع الحقوق محفوظة &copy; {new Date().getFullYear()} {footerData.company.name}</p>
      </div>
    </footer>
  );
};

export default Footer;
