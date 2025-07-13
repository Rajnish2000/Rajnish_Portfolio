import { ContactForm } from "../components/ContactForm";
import AvatarModelExperience from "../components/models/header_models/AvatarModelExperience";

const Contact = () => {
  return (
    <section
      className="gap-10 justify-between text-white py-10 px-4 md:px-20 h-full mb-10"
      id="contacts"
    >
      <div className="w-full">
        <h2 className="text-3xl font-bold">Get In Touch</h2>
        <div className="w-20 h-1 bg-blue-600 mt-2 mb-4" />
        <p className="text-sm text-muted-foreground mb-6">
          Have a question or want to work together? Feel free to drop me a
          message. I'd love to hear from you!
        </p>
        <p className="text-muted-foreground mb-5 text-md">
          Fill up the form and I’ll get back to you as soon as possible.
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-10">
        <div className="w-full md:w-1/2 h-full mt-5 md:mt-0 relative flex justify-center">
          <ContactForm />
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center mt-5 md:mt-0">
          <div className="w-full max-w-md h-[300px] md:h-[60vh] flex items-center justify-center">
            <AvatarModelExperience />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
