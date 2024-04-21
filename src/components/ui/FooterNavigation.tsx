import { useNavContext } from "../../utils/context";

const FooterNavigation = () => {
  const navItems = useNavContext();
  return (
    <ul className="lg:gap-15 flex list-none justify-between">
      {navItems.map((item, index) => (
        <li key={index}>
          <a href="">{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default FooterNavigation;
