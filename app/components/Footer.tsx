import Image from 'next/image';
import footerImage from '../favicon.ico';

const Footer = () => {
  /**
   * Returns the current year as a number
   * @returns number
   */
  const getCurrentYear = () => {
    const d = new Date();
    return d.getFullYear();
  };
  /**
   * Returns the current year as a string
   * @returns string
   */
  const getCurrentYearAsString = () => {
    return getCurrentYear().toString();
  };
  return (
    <footer className="w-full px-5 py-2 z-40 bg-slate-300">
      <ul className="sm:flex justify-between flex-col-reverse sm:flex-row">
        <li className="mt-5 sm:flex justify-center items-end sm:mt-0 hidden">
          {/** TODO: Replace with designer's icon */}
          <Image
            width={30}
            height={30}
            src={footerImage}
            alt="Logo showing that this website was designed by Sean Donny"
          />
        </li>
        <li className="flex justify-center items-end">
          <span
            className="font-line-jp text-gray-600 text-base"
            title={
              getCurrentYear()
                ? `2020 was ${getCurrentYear() - 2020} years ago btw`
                : ''
            }
          >
            &#169;{getCurrentYearAsString()}
          </span>
          <a
            className="font-line-jp text-black cursor-pointer text-base ml-6 sm:ml-9 opacity-80 hover:opacity-30"
            href="https://www.instagram.com/shotbybellzzz/"
            target="_blank"
          >
            Instagram
          </a>
          <a
            className="font-line-jp text-black cursor-pointer text-base ml-6 sm:ml-9 opacity-80 hover:opacity-30"
            href="mailto:shotbybellzzz@gmail.com"
            target="_blank"
          >
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
