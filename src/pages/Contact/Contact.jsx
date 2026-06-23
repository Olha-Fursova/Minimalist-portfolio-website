import css from "./Contact.module.css";
import SocialLinksList from "../../components/SocialLinksList/SocialLinksList";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <>
      <section className={`section ${css.contact__section}`}>
        <div className={`container ${css.contact__container}`}>
          <div className="decorative__line"></div>
          <div className={css.contact__content}>
            <h1 className={`section__title ${css.contact__header}`}>Get in Touch</h1>
            <p className={css.contact__text}>
              I’d love to hear about what you’re working on and how I could
              help. I’m currently looking for a new role and am open to a wide
              range of opportunities. My preference would be to find a position
              in a company in London. But I’m also happy to hear about
              opportunites that don’t fit that description. I’m a hard-working
              and positive person who will always approach each task with a
              sense of purpose and attention to detail. Please do feel free to
              check out my online profiles below and get in touch using the
              form.
            </p>

            <SocialLinksList iconColor={"var(--color-surface)"} variant="contact"/>
          </div>
          
          <div className="decorative__line"></div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${css.contact__form}`}>
          <h2 className="section__title">Contact Me</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
