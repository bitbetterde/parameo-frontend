import { useState } from "react";
import { Link } from "wouter";
import { PhotoIcon } from "@heroicons/react/20/solid";

interface Person {
  name: string;
  image?: string;
  imageAlt?: string;
  href?: string;
  hoverImage?: string;
}

interface Props {
  className?: string;
  people: Array<Person>;
  title?: string;
}

const AvatarSection: React.FC<Props> = ({ className, people, title }) => {
  const [hoveredAvatar, setHoveredAvatar] = useState<Person | null>(null);

  const handleOnHover = (person: Person) => {
    setHoveredAvatar(person);
  };

  const handleOnHoverEnd = () => {
    setHoveredAvatar(null);
  };

  const renderAvatar = (person: Person) => {
    if (person.href) {
      if (person.image && person.hoverImage) {
        return (
          <Link href={person.href}>
            <img
              className="h-56 w-56 rounded-full cursor-pointer"
              src={hoveredAvatar === person ? person.hoverImage : person.image}
              alt={person.imageAlt ?? "Avatar"}
            />
          </Link>
        );
      } else {
        return (
          <Link href={person.href}>
            <PhotoIcon className="h-56 w-56 rounded-full cursor-pointer text-gray-50 bg-gray-300 p-6" />
          </Link>
        );
      }
    } else if (!person.href) {
      if (person.image && person.hoverImage) {
        return (
          <img
            className="h-56 w-56 rounded-full"
            src={hoveredAvatar === person ? person.hoverImage : person.image}
            alt={person.imageAlt ?? "Avatar"}
          />
        );
      } else {
        return (
          <PhotoIcon className="h-56 w-56 rounded-full text-gray-50 bg-gray-300 p-6" />
        );
      }
    }
  };

  return (
    <div
      className={`flex flex-col justify-center pb-16 pt-12 md:py-12 ${
        className || ""
      }`}
    >
      {title && (
        <div className="w-full px-6 md:text-center">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
            {title}
          </h2>
        </div>
      )}
      <div className="flex flex-col justify-center items-center max-w-7xl px-6 text-center lg:px-8 mx-auto">
        <ul
          role="list"
          className="mt-[37px] grid max-w-2xl grid-cols-1 gap-x-32 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people?.map((person) => (
            <li
              key={person.name}
              onMouseEnter={() =>
                person?.image && person?.hoverImage && handleOnHover(person)
              }
              onMouseLeave={() =>
                person?.image && person?.hoverImage && handleOnHoverEnd()
              }
            >
              {person && renderAvatar(person)}
              <h3 className="mt-6 text-[18px] leading-6 font-medium text-gray-900">
                {person.name}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AvatarSection;
