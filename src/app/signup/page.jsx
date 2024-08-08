"use client";

import SocialLogin from "@/components/Shared/SocialLogin";
import Image from "next/image";
import Link from "next/link";

const SignUpPage = () => {
  const handleSignUp = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const newUser = {
      name,
      email,
      password,
    };

    console.log(newUser);
  };

  return (
    <div className="hero min-h-screen px-5">
      <div className="hero-content gap-24 flex-col lg:flex-row">
        <div className="w-full">
          <Image
            src="/assets/images/login/login.svg"
            width={500}
            height={600}
            alt="login-image"
          />
        </div>
        <div className="sm:p-5 pt-2 sm:pt-0 border w-full rounded-xl">
          <h2 className="text-center mt-5 text-4xl font-bold text-gray-800 leading-loose">
            Sign Up
          </h2>
          <div className="card -mt-8 shrink-0">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary">Sign Up</button>
              </div>
              <SocialLogin />
              <p className="text-center text-gray-800">
                Already Have a Account?{" "}
                <Link href="/login" className="text-primary font-bold">
                  Please Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
