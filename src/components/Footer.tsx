import { IMenuItem, ISocialMediaItem } from "@interfaces/IFooter";
import InstagramLogo from "@assets/logos/instagram.svg";
import TwitterLogo from "@assets/logos/twitter.svg";
import GitHubLogo from "@assets/logos/github.svg";
import GitLabLogo from "@assets/logos/gitlab.svg";
import DribbleLogo from "@assets/logos/dribble.svg";

interface Props {
  className?: string;
  menu: Array<IMenuItem>;
  links: Array<ISocialMediaItem>;
  copyright: string;
}

const socialMediaIconMapping = {
  instagram: InstagramLogo,
  twitter: TwitterLogo,
  github: GitHubLogo,
  gitlab: GitLabLogo,
  dribble: DribbleLogo,
};

const Footer: React.FC<Props> = ({ className, menu, links, copyright }) => {
  return (
    <footer className={`bg-white ${className || ""}`}>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-12 lg:px-8">
        <HorizontalMenu menu={menu} />
        <SocialMedia links={links} />
        <p className="mt-8 text-center text-base font-normal text-gray-400">
          &copy; {copyright}
        </p>
      </div>
    </footer>
  );
};

interface HorizontalMenuProps {
  menu: IMenuItem[];
}

const HorizontalMenu: React.FC<HorizontalMenuProps> = ({ menu }) => {
  return (
    <nav
      className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
      aria-label="Footer"
    >
      {menu.map((item) => (
        <ul key={item.name} className="pb-6">
          <li>
            <a
              href={item.href}
              className="text-base font-normal text-gray-500 hover:text-gray-900"
            >
              {item.name}
            </a>
          </li>
        </ul>
      ))}
    </nav>
  );
};

interface SocialMediaProps {
  links: ISocialMediaItem[];
}

const SocialMedia: React.FC<SocialMediaProps> = ({ links }) => {
  return (
    <ul className="mt-10 flex justify-center space-x-10">
      {links.map((item) => (
        <li>
          <a
            key={item.name}
            href={item.href}
            className="text-gray-400 hover:text-gray-500"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">{item.name}</span>
            <img
              className="w-5 h-5"
              alt={item.alt}
              src={socialMediaIconMapping[item.type]}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Footer;
