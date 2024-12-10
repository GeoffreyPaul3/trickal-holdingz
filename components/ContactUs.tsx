"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../ui/button";
import FadeIn from "./FadeIn";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "../ui/use-toast";

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
    reset,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // Here you would typically send the data to your backend
    console.log(data);
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
    reset();
  };

  return (
    <div id="contact" className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0.2} direction="up">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Contact Us</h2>
        </FadeIn>
        <FadeIn delay={0.4} direction="up">
          <p className="text-lg text-center mb-12 text-gray-600">
            We would love to hear from you! Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </FadeIn>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <FadeIn delay={0.6} direction="up">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Input
                id="name"
                {...register("name", { required: "Name is required" })}
                className="mt-1"
                placeholder="Your Name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>
          </FadeIn>
          <FadeIn delay={0.8} direction="up">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input
                id="email"
                type="email"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address"
                  }
                })}
                className="mt-1"
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>
          </FadeIn>
          <FadeIn delay={1.0} direction="up">
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <Textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                className="mt-1"
                rows={4}
                placeholder="Your message here..."
              />
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
            </div>
          </FadeIn>
          <FadeIn delay={1.2} direction="up">
            <Button
              type="submit"
              size="lg"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Send Message
            </Button>
          </FadeIn>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

