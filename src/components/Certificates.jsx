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
    title: "Google Cloud BootCamp",
    image: "/images/certificates/gcp.png",
  },
  {
    title: "HP",
    image: "/images/certificates/HP.png",
  },
  {
    title: "Full Stack Certification",
    image: "/images/certificates/MERN.png",
  },
  {
    title: "Python",
    image: "/images/certificates/Python.png",
  },
  {
    title: "Machine Learning And Data Science",
    image: "/images/certificates/MLANDDS.png",
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
      <div className="grid md:grid-cols-3 gap-16">
        {(showMore ? certificates : certificateTemp).map((cert, index) => (
          <div key={index} className="bg-gray-700 rounded-xl overflow-hidden">
            <Modal>
              <ModalTrigger className="flex justify-center group/modal-btn p-2 ml-1 ">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-60 w-full object-cover my-2"
                />
              </ModalTrigger>
              <ModalBody className="relative w-[100vw] h-screen p-0 m-0">
                <ModalContent>
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={cert.image}
                      alt="bali images"
                      width="900"
                      height="400"
                      className="rounded-lg h-[100%] md:h-full object-contain shrink-0"
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
