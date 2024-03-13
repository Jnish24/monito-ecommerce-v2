import { useNavContext } from "../../utils/context";

const FooterNavigation = () => {
  const navItems = useNavContext();
  return (
    <ul className="flex list-none justify-between lg:gap-[3.75rem]">
      {navItems.map((item, index) => (
        <li key={index}>
          <a href="">{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default FooterNavigation;
