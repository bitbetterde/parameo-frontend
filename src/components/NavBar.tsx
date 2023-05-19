import { ReactComponent as ParameoLogo } from "@assets/logos/parameo-icon.svg";

interface Props {
  className?: string;
}

const navigation = [
  { name: "Home", href: "#" },
  { name: "Configurator", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "About", href: "#" },
];

const NavBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={`relative bg-white ${className || ""}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:justify-start md:space-x-10 lg:px-8">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span className="sr-only">{import.meta.env.VITE_APP_TITLE}</span>
            <ParameoLogo className="h-8 w-auto sm:h-10" />
          </a>
        </div>
        <div className="hidden space-x-10 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <a
            href="#"
            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            CTA
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
