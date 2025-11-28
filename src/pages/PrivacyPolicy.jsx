import React from "react";
import TextBanner from "../components/TextBanner/TextBanner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../assets/styles/main.scss";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <main className="main-section">
        <TextBanner bannerText={"Privacy Policy"} />
        <div className="mugil-container">
          <h3 className="pb-3">Introduction</h3>
          <p className="pb-4">Vasi Glass &amp; Plywood respects your privacy and is committed to safeguarding your data. This website is a showcase-only platform for products we deal in, including plywood, glass, doors, locks, and home décor. We collect minimal information solely to respond to inquiries and provide product guidance. Using the website signifies acceptance of this Privacy Policy. Our practices follow Indian data protection principles and IT Act guidelines.</p>

          <h3 className="pb-3">Information We Collect</h3>
          <p className="pb-4">We may collect personal information such as name, email, or phone when inquiries are submitted. Non-personal information such as browser type, device, and visit duration may also be collected. No financial or payment details are collected as the site does not facilitate online purchases. Data helps us improve browsing experience and product showcasing. All collected information is relevant, minimal, and securely stored.</p>

          <h3 className="pb-3">Purpose of Collection</h3>
          <p className="pb-4">Information is collected to respond to product inquiries efficiently. Data helps understand customer preferences and improves our offerings. We do not use collected information for unsolicited marketing without consent. Purpose is strictly related to showcasing and product guidance. Our goal is transparent and professional communication.</p>

          <h3 className="pb-3">Consent</h3>
          <p className="pb-4">Submitting your information constitutes consent to use it for business communication. Consent may be withdrawn at any time by contacting our support. We respect your choice to opt-out of future communications. No personal data is collected without voluntary submission. Consent ensures lawful handling of your information.</p>

          <h3 className="pb-3">Information Sharing</h3>
          <p className="pb-4">Personal information is never sold or rented to third parties. Details may be shared only with authorized staff to respond to inquiries. Data may be shared if required under Indian law. Third-party service providers, if used, are bound by confidentiality. We ensure strict control over all shared information.</p>

          <h3 className="pb-3">Cookies &amp; Tracking</h3>
          <p className="pb-4">Cookies help improve site navigation and browsing experience. No personal information is stored via cookies. Users can disable cookies through browser settings at any time. We do not use invasive tracking or third-party marketing cookies. Cookies serve to make the site user-friendly and efficient.</p>

          <h3 className="pb-3">Data Security</h3>
          <p className="pb-4">Industry-standard security measures protect customer information. Access to data is restricted to authorized personnel only. Regular monitoring prevents unauthorized access or breaches. Security practices comply with Indian IT Act regulations. Customer trust is our top priority in data protection.</p>

          <h3 className="pb-3">Data Retention</h3>
          <p className="pb-4">Data is retained only as long as necessary to fulfill inquiries. After completion, information is archived securely. Unnecessary data is never stored beyond business needs. Retention practices comply with Indian IT and privacy guidelines. Customer data is never misused or shared improperly.</p>

          <h3 className="pb-3">Children’s Privacy</h3>
          <p className="pb-4">The website is not intended for children under 18. We do not knowingly collect information from minors. Any accidental collection is promptly deleted. Parents may contact us for privacy-related concerns regarding children. Safe browsing practices for minors are strictly followed.</p>

          <h3 className="pb-3">Third-Party Links</h3>
          <p className="pb-4">The website may contain links to partner suppliers and resources. We are not responsible for the content or privacy practices of external sites. Users should review third-party policies before sharing personal data. Responsibility is limited to Vasi Glass &amp; Plywood’s website content. External links are provided for convenience and reference only.</p>

          <h3 className="pb-3">Data Transfer Outside India</h3>
          <p className="pb-4">Currently, all data is stored and processed within India. If future transfers occur, Indian IT rules and regulations will be followed. Data flow will comply with government guidelines. User trust remains central to our practices. No data is transferred without proper legal safeguards.</p>

          <h3 className="pb-3">Legal Compliance</h3>
          <p className="pb-4">All data handling follows the IT Act, 2000 and related Indian regulations. We cooperate with authorities as required by law. No unlawful use of information is permitted. Compliance ensures safety and legal integrity. Users’ rights are protected under Indian legal frameworks.</p>

          <h3 className="pb-3">User Rights</h3>
          <p className="pb-4">Users can request access, correction, or deletion of personal data. Requests can be submitted via email: murugan@mugilelitemart.com. We respond promptly to privacy-related queries. Restrictions on data processing may also be requested. User rights are respected fully under Indian law.</p>

          <h3 className="pb-3">Grievance Redressal</h3>
          <p className="pb-4">A grievance officer is appointed to handle privacy complaints. All grievances are addressed promptly and fairly. Customers may submit complaints via email or phone. We maintain transparency and accountability in all responses. Satisfaction and trust are our top priorities.</p>

          <h3 className="pb-3">Policy Updates</h3>
          <p className="pb-4">This Privacy Policy may be revised periodically. Updates will be clearly posted on the website. Major changes affecting users will be communicated directly. Users are encouraged to review the policy regularly. Continued use indicates acceptance of updated terms.</p>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
