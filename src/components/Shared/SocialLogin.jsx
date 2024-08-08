import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="flex my-4 items-center justify-around">
      <div className="bg-gray-100 p-3 rounded-full cursor-pointer">
        <FcGoogle size={25} />
      </div>
      <div className="bg-gray-100 p-3 rounded-full cursor-pointer">
        <ImFacebook size={25} color="#4345bee5" />
      </div>
      <div className="bg-gray-100 p-3 rounded-full cursor-pointer">
        <div
          style={{
            width: "30px",
            height: "30px",
            background:
              "linear-gradient(45deg, #F58529, #FEDA77, #DD2A7B, #8134AF, #515BD4)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaInstagram size={25} color="white" />
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
