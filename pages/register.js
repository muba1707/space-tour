import Header from "../components/Header";
import { useForm } from "react-hook-form";

function Register() {
  const { register, handleSubmit } = useForm();
  return (
    <div className="h-screen w-screen flex flex-col bg-home-mobile bg-center bg-cover md:bg-home-tablet lg:bg-home-desktop p-6">
      <Header />
      <div className=" max-w-lg mx-auto bg-white lg:mt-40">
        <h1 className="w-full">Book Your ticket Now</h1>
        <div>
          <form>
            <input type="text" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
