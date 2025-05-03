import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../components/ui/animated-modal";

import { motion } from "motion/react";
const certificates = [
  {
    title: "Infosys Springboard",
    image:
      "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Udemy Bootcamp",
    image:
      "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Unnati Foundation",
    image:
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Unnati Foundation",
    image:
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Unnati Foundation",
    image:
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Unnati Foundation",
    image:
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Certificates() {
  const [showMore, setShowMore] = useState(false);
  const [certificateTemp, setCertificateTemp] = useState([...certificates]);
  useEffect(() => {
    setCertificateTemp([...certificateTemp.slice(0, 3)]);
  }, [showMore]);
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6">
        {(showMore ? certificates : certificateTemp).map((cert, index) => (
          <div key={index} className="bg-gray-700 rounded-xl overflow-hidden">
            <Modal>
              <ModalTrigger className="flex justify-center group/modal-btn">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-60 w-[100%] object-cover my-2"
                />
              </ModalTrigger>
              <ModalBody className="relative w-full h-screen p-0 m-0">
                <ModalContent>
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={cert.image}
                      alt="bali images"
                      width="500"
                      height="500"
                      className="rounded-lg h-[100%] w-[100%] md:h-full md:w-full object-cover shrink-0"
                    />
                  </div>
                </ModalContent>
              </ModalBody>
            </Modal>
          </div>
        ))}
      </div>
      <button
        onClick={() => setShowMore(!showMore)}
        className="border border-white hover:bg-white hover:text-black px-4 py-2 my-5 mx-2 rounded"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}
