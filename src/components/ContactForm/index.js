import React, { useState } from "react";

function ContactForm() {

  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");

  return (
    <>
      <div className="bg-gray-200 py-8" id="contact" style={{ fontFamily: 'Roboto' }}>
        <section className="w-full max-w-2xl px-4 md:px-6 py-4 mx-auto">
          <div>
            <h2 className="text-2xl font-semibold sm:text-center text-left text-gray-800">Need a Project ?</h2>
            <p className="mt-3 sm:text-center text-left text-gray-800 text-sm">Let us know what are you looking for in an agency. We will take a look and see if <br /> this could be the start of something beautiful.</p>
          </div>

          <div className="mt-6">
            <div className="items-center sm:-mx-2 md:flex">
              <div className="w-full sm:mx-2">
                <input className="block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md  focus:outline-none focus:ring" type="text" placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-full sm:mx-2 mt-4 md:mt-0">
                <input className="block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md  focus:outline-none focus:ring" type="email" placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full mt-4">
              <input className="block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md  focus:outline-none focus:ring" type="text" placeholder="Yor Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="w-full mt-4">

              <textarea className="block w-full h-40 px-4 py-2 text-gray-700 border border-gray-300 rounded-md  focus:outline-none focus:ring" placeholder="Enter Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              >
              </textarea>
            </div>

            <div className="flex justify-start sm:justify-center mt-6">
              <button className="px-4 py-2 text-white" style={{ background: "#10C9C3" }}>
                Send Message
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default ContactForm;