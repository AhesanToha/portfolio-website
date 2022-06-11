import React from "react";
import email from "../../assets/images/email.gif";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const from_name = e.target.user_name.value;
    const email_id = e.target.user_email.value;
    const message = e.target.message.value;
    const param = {
      from_name,
      email_id,
      message,
    };

    emailjs
      .send("service_km82wmo", "template_0mrfm2x", param, "zAFGDApa7728ARtcy")
      .then(
        (result) => {
          toast.success("Email Sent");
        },
        (error) => {
          toast.error("Failed to sent email");
        }
      );
  };
  return (
    <div id="contact" className="py-16 container mx-auto">
      <h1 className="text-2xl text-center text-primary">___Contact me___</h1>
      <div className="md:grid grid-cols-2 gap-10 items-center justify-center">
        <img src={email} alt="" />
        <div>
          <form className="flex flex-col px-10" ref={form} onSubmit={sendEmail}>
            <label className="text-gray-200">Name</label>
            <input
              type="text"
              placeholder="Name"
              class="input input-bordered input-primary w-auto"
              name="user_name"
            />
            <label className="text-gray-200">Email</label>
            <input
              type="email"
              placeholder="Email"
              class="input input-bordered input-primary w-auto"
              name="user_email"
            />
            <label className="text-gray-200">Message</label>
            <textarea
              name="message"
              class="textarea textarea-primary"
              placeholder="message"
            />
            <input
              type="submit"
              class="btn btn-sm mt-3 lg:btn-md btn-outline text-primary hover:bg-primary hover:text-[#0A192F]"
              value="Send"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
