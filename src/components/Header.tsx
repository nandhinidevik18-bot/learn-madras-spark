import { Phone, MapPin } from "lucide-react";
import madrasLogo from "@/assets/madras-logo-full.png";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border py-4 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Left Side - Logo and College Name */}
        <div className="flex items-center gap-4">
          <img 
            src={madrasLogo} 
            alt="Madras Engineering College" 
            className="h-16 lg:h-20 w-auto object-contain"
          />
        </div>

        {/* Right Side - TNEA Code, Phone, Location */}
        <div className="flex items-center gap-4 flex-wrap justify-center lg:justify-end">
          <div className="bg-gradient-purple px-6 py-2 rounded-full shadow-elegant">
            <span className="text-sm font-semibold text-primary-foreground">
              TNEA Code: 1203
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-foreground" />
            <span className="font-semibold text-foreground">+91 7002080020</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-medium text-primary"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
