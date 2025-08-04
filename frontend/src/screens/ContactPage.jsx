import ContactForm from "../components/ContactForm";
import PageTitleCard from "../components/PageTitleCard";

const ContactPage = () => {
  return (
    <div>
      <div>
        <PageTitleCard
          title="Contact Us"
          image="https://images.pexels.com/photos/8538870/pexels-photo-8538870.jpeg"
        />
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
