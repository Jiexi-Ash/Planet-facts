import { MenuIcon } from "@heroicons/react/solid";

import NavbarItem from "./NavbarItem";
import { useRouter } from "next/router";
import Link from "next/link";

function Navbar({ handleOpen, isShown }) {
  const router = useRouter();

  const handleRouter = (name) => {
    router.push(`/planets/${name}`);
    handleOpen(false);
  };

  const handleClick = () => {
    handleOpen();
  };

  return (
    <>
      <header className="border-b border-divideGray relative z-30">
        <nav className="flex justify-between items-center py-7 px-8 md:flex-col md:items-stretch lg:flex-row lg:justify-between lg:items-center">
          <div className="text-[20px] tracking-[-1.05px] uppercase font-bold text-white cursor-pointer md:text-center md:pb-10 lg:pb-0">
            <Link href="/">the planets</Link>
          </div>
          <ul className="hidden md:flex justify-between items-center lg:space-x-6">
            <li>
              <Link href={`/planets/mercury`}>
                <a className="text-white uppercase text-sm">mercury</a>
              </Link>
            </li>
            <li>
              <Link href={`/planets/venus`}>
                <a className="text-white uppercase text-sm">venus</a>
              </Link>
            </li>
            <li>
              <Link href={`/planets/earth`}>
                <a className="text-white uppercase text-sm">earth</a>
              </Link>
            </li>

            <li>
              <Link href={`/planets/mars`}>
                <a className="text-white uppercase text-sm">mars</a>
              </Link>
            </li>
            <li>
              <Link href={`/planets/jupiter`}>
                <a className="text-white uppercase text-sm">jupiter</a>
              </Link>
            </li>
            <li>
              <Link href={`/planets/saturn`}>
                <a className="text-white uppercase text-sm">saturn</a>
              </Link>
            </li>
            <li>
              <Link href={`/planets/uranus`}>
                <a className="text-white uppercase text-sm">uranus</a>
              </Link>
            </li>

            <li>
              <Link href={`/planets/neptune`}>
                <a className="text-white uppercase text-sm">neptune</a>
              </Link>
            </li>
          </ul>
          <MenuIcon
            className={`${
              isShown ? "text-divideGray" : "text-white"
            }  h-8 cursor-pointer md:hidden`}
            onClick={handleClick}
          />
        </nav>
        <div
          className={`${
            isShown ? "flex" : "hidden"
          } absolute z-50 top-24 right-0 left-0 bottom-0  flex-col w-full  bg-darkPurple`}
        >
          <ul className="flex flex-col px-8 pt-6 divide-y divide-divideGray">
            <NavbarItem
              name="mercury"
              color="bg-white"
              handleRoute={handleRouter}
            />
            <NavbarItem
              name="venus"
              color="bg-[#f7cc7f]"
              handleRoute={handleRouter}
            />
            <NavbarItem
              name="earth"
              color="bg-[#545bfe]"
              handleRoute={handleRouter}
            />
            <NavbarItem
              name="mars"
              color="bg-[#ff6a45]"
              handleRoute={handleRouter}
            />
            <NavbarItem
              name="jupiter"
              color="bg-[#ecad7a]"
              handleRoute={handleRouter}
            />
            <NavbarItem
              name="saturn"
              color="bg-[#fccb6b]"
              handleRoute={handleRouter}
            />
            <NavbarItem
              name="uranus"
              color="bg-[#65f0d5]"
              handleRoute={handleRouter}
            />
            <NavbarItem
              name="neptune"
              color="bg-[#4973fa]"
              handleRoute={handleRouter}
            />
          </ul>
        </div>
      </header>
    </>
  );
}

export default Navbar;
