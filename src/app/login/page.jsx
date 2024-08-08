"use client";
import SocialLogin from "@/components/Shared/SocialLogin";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(e.target);
  };

  return (
    <div className="hero min-h-screen px-5">
      <div className="hero-content gap-24 flex-col lg:flex-row">
        <div className="w-full">
          <Image
            src="/assets/images/login/login.svg"
            width={500}
            height={600}
            className="w-full"
          />
        </div>
        <div className="sm:p-5 pt-2 sm:pt-0 w-full border rounded-xl">
          <h2 className="text-center text-4xl font-bold text-gray-800 leading-loose">
            Login
          </h2>
          <div className="card w-full -mt-8 shrink-0">
            <form onClick={handleLogin} className="card-body w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary">Login</button>
              </div>
              <SocialLogin />
              <p className="text-center text-gray-800">
                New Here?{" "}
                <Link href="/signup" className="text-primary font-bold">
                  Please Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
