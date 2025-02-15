import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between">
      <Image src="/logo.png" alt="fws foods" height={30} width={100} />
    </div>
  );
};

export default Header;
