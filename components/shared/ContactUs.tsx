"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../ui/button";
import FadeIn from "./FadeIn";

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // Handle form submission
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center py-20 px-10 bg-[#f7f8fa]"
    >
      <FadeIn delay={0.2} direction="up">
        <h2 className="text-4xl font-bold text-center mb-10 text-black">
          Contact Us
        </h2>
      </FadeIn>
      <FadeIn delay={0.4} direction="up">
        <p className="text-lg text-center mb-10 text-gray-700 max-w-2xl">
          We would love to hear from you! Whether you have a question about
          features, trials, pricing, or anything else, our team is ready to
          answer all your questions.
        </p>
      </FadeIn>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg flex flex-col gap-4"
      >
        <FadeIn delay={0.6} direction="up" fullWidth>
          <input
            {...register("name", { required: true })}
            className="border rounded-lg p-3 w-full"
            placeholder="Your Name"
          />
          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}
        </FadeIn>
        <FadeIn delay={0.8} direction="up" fullWidth>
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="border rounded-lg p-3 w-full"
            placeholder="Your Email"
          />
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}
        </FadeIn>
        <FadeIn delay={1.0} direction="up" fullWidth>
          <textarea
            {...register("message", { required: true })}
            className="border rounded-lg p-3 w-full"
            placeholder="Your Message"
          />
          {errors.message && (
            <span className="text-red-500">This field is required</span>
          )}
        </FadeIn>
        <FadeIn delay={1.2} direction="up" fullWidth>
          <Button
            type="submit"
            size="lg"
            className="rounded-full w-full bg-blue-500 hover:bg-blue-600"
          >
            Send Message
          </Button>
        </FadeIn>
      </form>
    </div>
  );
};

export default ContactUs;
