import profile from "../../../assets/images/profile.png";

const Banner = () => {
  return (
    <header className="flex justify-between items-center mx-auto p-4 px-4 border-b-2 mb-8">
      <h1 className="text-6xl">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Banner;
