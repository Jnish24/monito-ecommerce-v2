import logoFacebook from "../../assets/svg/media/logo-facebook.svg";
import logoTwitter from "../../assets/svg/media/logo-twitter.svg";
import logoInstagram from "../../assets/svg/media/logo-instagram.svg";
import logoYouTube from "../../assets/svg/media/logo-youtube.svg";

const mediaItems = [
  { id: 1, icon: logoFacebook, altName: "Facebook Logo" },
  { id: 2, icon: logoTwitter, altName: "Twitter Logo" },
  { id: 3, icon: logoInstagram, altName: "Instagram Logo" },
  { id: 4, icon: logoYouTube, altName: "YouTube Logo" },
];

const FooterMedia: React.FC = () => {
  return (
    <ul className="flex list-none justify-center gap-10 ">
      {mediaItems.map((item) => (
        <li key={item.id}>
          <a href="">
            <img src={item.icon} alt={item.altName} className="h-5 w-5" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterMedia;
