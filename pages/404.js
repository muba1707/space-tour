import Header from "../components/Header";

function Custom404() {
  return (
    <div className="h-screen p-6 w-screen bg-planet-mobile bg-no-repeat bg-cover bg-center md:bg-planet-tablet lg:bg-planet-desktop flex flex-col items-center jsutify-center">
      <Header />
      <div className="h-sm max-w-sm mt-16 overflow-y-hidden lg:mt-40">
        <img src="/assets/shared/404.jpg" alt="" />
      </div>
    </div>
  );
}

export default Custom404;
