import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What CancerTrialMatch does with the information you share.",
};

export default function Privacy() {
  return (
    <section className="section">
      <div className="container prose">
        <h1>Privacy note</h1>
        <p>
          This is a short, plain-language summary. If you operate this site, replace it with a full policy reviewed for
          your jurisdiction (GDPR for EU visitors, and applicable US rules).
        </p>
        <h2>What we collect</h2>
        <p>
          Only what you choose to send: your name, contact details, and anything you type into the form or chat — such
          as a diagnosis or country. We don't require an account, and we don't sell your data.
        </p>
        <h2>How we use it</h2>
        <p>
          We use your details to respond to your request and, with the intent of helping you, to share them with vetted
          treatment coordinators and trial centers so they can check eligibility. By submitting the form or sharing
          contact details in chat, you consent to this.
        </p>
        <h2>Health information</h2>
        <p>
          Details about your health are sensitive. Share only what you're comfortable sharing. You can ask us to delete
          your information at any time by emailing the address below.
        </p>
        <h2>Contact</h2>
        <p>To access or delete your data, or ask a question, email the operator of this site.</p>
      </div>
    </section>
  );
}
