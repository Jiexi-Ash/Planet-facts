import Image from "next/image";

function PlanetImage({ name, image, size }) {
  return (
    <>
      <div className="mt-20 md:hidden lg:hidden">
        <Image src={image} alt={name} width={size.sm} height={size.sm} />
      </div>
      <div className="mt-20 hidden md:block lg:hidden">
        <Image src={image} alt={name} width={size.md} height={size.md} />
      </div>
      <div className="mt-20 hidden md:hidden lg:block">
        <Image src={image} alt={name} width={size.lg} height={size.lg} />
      </div>
    </>
  );
}

export default PlanetImage;
