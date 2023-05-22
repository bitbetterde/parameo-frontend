interface Props {
  className?: string;
  people: Array<{ name: string; image: string; imageAlt: string }>;
}

const Avatar: React.FC<Props> = ({ className, people }) => {
  return (
    <div className={`flex justify-center py-24 ${className || ""}`}>
      <div className="flex flex-col justify-center items-center max-w-7xl px-6 text-center lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
            Connecting
          </h2>
        </div>
        <ul
          role="list"
          className="mt-[37px] grid max-w-2xl grid-cols-1 gap-x-32 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img
                className="h-56 w-56 rounded-full"
                src={person.image}
                alt={person.imageAlt}
              />
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

export default Avatar;
