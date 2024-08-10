"use client";

import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SocialLogin = () => {
  const router = useRouter();
  const session = useSession();

  const handleSocialLogin = (provider) => {
    signIn(provider);
  };

  if (session.status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="flex my-4 items-center justify-around">
      <div
        onClick={() => handleSocialLogin("google")}
        className="bg-gray-100 flex items-center border justify-center gap-4 p-3 rounded-full w-full cursor-pointer"
      >
        <span className="text-gray-800 font-medium text-lg">
          Connect With Google
        </span>
        <FcGoogle size={25} />
      </div>
    </div>
  );
};

export default SocialLogin;
