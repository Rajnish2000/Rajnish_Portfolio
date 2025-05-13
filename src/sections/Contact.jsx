import { ContactForm } from "../components/ContactForm";
import { ContactInfo } from "../components/ContactInfo";
import AvatarModelExperience from "../components/models/header_models/AvatarModelExperience";

const Contact = () => {
  return (
    <section
      className="gap-10 justify-between text-white py-10 px-20 h-full mb-20"
      id="contacts"
    >
      <div className="w-full">
        <h2 className="text-3xl font-bold">Get In Touch</h2>
        <div className="w-45 h-1 bg-blue-600 mt-2 mb-4" />
        <p className="text-sm text-muted-foreground mb-6">
          Have a question or want to work together? Feel free to drop me a
          message. I'd love to hear from you!
        </p>
        <p className="text-sm text-muted-foreground mb-5 text-lg">
          Fill up the form and I’ll get back to you as soon as possible.
        </p>
      </div>
      <div className="w-full h-full justify-around sm:justify-center flex flex-wrap">
        <div className="h-full h-full mt-15 relative">
          <ContactForm />
        </div>
        <div className="w-2xl h-[60vh] mt-17 relative">
          <AvatarModelExperience />
        </div>
      </div>
    </section>
  );
};

export default Contact;
