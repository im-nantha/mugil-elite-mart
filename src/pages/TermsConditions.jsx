import React from "react";
import TextBanner from "../components/TextBanner/TextBanner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../assets/styles/main.scss";

const TermsConditions = () => {
  return (
    <>
      <Header />
      <main>
        <TextBanner bannerText={"Terms & Conditions"} />
        <div className="mugil-container">

          <h3 className="pb-3">Introduction</h3>
          <p className="pb-4">
            These Terms & Conditions govern the use of Vasi Glass & Plywood’s website.
            The site is a showcase-only platform for products we deal in.
            Accessing the website indicates agreement with all stated terms.
            The site does not facilitate online purchases.
            Users should read and understand all conditions before interaction.
          </p>

          <h3 className="pb-3">Scope of Terms</h3>
          <p className="pb-4">
            Terms cover website usage, content ownership, and user responsibilities.
            They apply to product information, images, and offline inquiries.
            Transparency ensures proper interaction between visitors and Vasi Glass & Plywood.
            All content and product displays fall under these terms.
            Users must follow the stated conditions for proper engagement.
          </p>

          <h3 className="pb-3">Website Purpose</h3>
          <p className="pb-4">
            The site provides information on plywood, glass, doors, locks, and décor.
            All sales, quotations, and orders are handled offline.
            Information is intended for guidance and product selection.
            No online payment or e-commerce functionality is available.
            We aim to assist users in efficient product browsing.
          </p>

          <h3 className="pb-3">Eligibility</h3>
          <p className="pb-4">
            Visitors must be at least 18 years old.
            Users must be legally competent to enter agreements.
            Minors are prohibited from using the site without parental supervision.
            Users must ensure compliance with local laws.
            Accurate information must be provided during inquiries.
          </p>

          <h3 className="pb-3">Intellectual Property Rights</h3>
          <p className="pb-4">
            All content, logos, and images belong to Vasi Glass & Plywood.
            Unauthorized use or reproduction is prohibited.
            Trademarks are protected under Indian law.
            Written permission is required for usage requests.
            IP violations may result in legal action.
          </p>

          <h3 className="pb-3">User Responsibilities</h3>
          <p className="pb-4">
            Users must not misuse or disrupt the website.
            No automated scraping or unauthorized access is allowed.
            Accurate details must be provided in forms and inquiries.
            Suspicious activity may lead to termination of access.
            Respect for website content and users is mandatory.
          </p>

          <h3 className="pb-3">Content Accuracy</h3>
          <p className="pb-4">
            We strive to maintain accurate product information.
            Images and specifications are for representational purposes only.
            Actual product appearance may differ slightly.
            Offline consultation is advised to verify product details.
            We do not guarantee absolute accuracy of all content.
          </p>

          <h3 className="pb-3">Third-Party Links</h3>
          <p className="pb-4">
            Links to suppliers or brands may appear on the website.
            We are not responsible for third-party content or policies.
            Users should review external terms before interacting.
            Links are provided for convenience only.
            Liability for external interactions is disclaimed.
          </p>

          <h3 className="pb-3">Limitation of Liability</h3>
          <p className="pb-4">
            We are not liable for any direct or indirect losses.
            This includes reliance on content, missed information, or misinterpretation.
            Liability for offline transactions is strictly limited.
            Users assume responsibility for decisions based on website content.
            Liability is limited under Indian law to the maximum extent.
          </p>

          <h3 className="pb-3">Indemnity</h3>
          <p className="pb-4">
            Users agree to indemnify Vasi Glass & Plywood for misuse or violations.
            This includes legal claims arising from improper website use.
            Responsibility covers unauthorized content usage or unlawful conduct.
            Users ensure safe website operation for all visitors.
            Indemnity protects company operations and compliance.
          </p>

          <h3 className="pb-3">Modifications to Website</h3>
          <p className="pb-4">
            Vasi Glass & Plywood may update content at any time.
            Changes may include product details, images, or layout.
            Terms & Conditions may be revised to reflect legal or business needs.
            Users are encouraged to check for updates regularly.
            Continued use indicates acceptance of modifications.
          </p>

          <h3 className="pb-3">Termination of Access</h3>
          <p className="pb-4">
            Access may be restricted for violations of terms.
            Termination may occur without prior notice.
            Users must cease activities upon termination.
            All restrictions and obligations survive termination.
            Termination protects content, users, and IP rights.
          </p>

          <h3 className="pb-3">Governing Law</h3>
          <p className="pb-4">
            Terms are governed by Indian laws.
            Disputes fall under Chennai jurisdiction.
            The IT Act, 2000 applies to website operations.
            Users must comply with Indian legal frameworks.
            International users must follow local and Indian laws.
          </p>

          <h3 className="pb-3">Dispute Resolution</h3>
          <p className="pb-4">
            Disputes should first be addressed via email.
            The grievance officer will attempt resolution within 7 days.
            Unresolved disputes may proceed under Indian law.
            We encourage amicable communication before escalation.
            All resolutions are documented for transparency.
          </p>

          <h3 className="pb-3">Contact Information</h3>
          <p className="pb-4">
            Email: murugan@mugilelitemart.com | Phone: 9965071966.
            Available during business hours for inquiries.
            Assistance includes guidance on products and offline transactions.
            Queries are addressed promptly for user convenience.
            Contact details are also on the website.
          </p>

        </div>
      </main>
      <Footer />
    </>
  );
}

export default TermsConditions;
