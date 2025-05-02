import { ContactForm } from "../components/ContactForm";
import { ContactInfo } from "../components/ContactInfo";

const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row gap-10 justify-between text-white py-12 px-6 bg-[#0b0d17]">
      <div className="md:w-1/2">
        <ContactInfo />
      </div>
      <div className="md:w-1/2">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
