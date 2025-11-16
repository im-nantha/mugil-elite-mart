import React from "react";
import TextBanner from "../components/TextBanner/TextBanner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../assets/styles/main.scss";

const GrievanceRedressalPolicy = () => {
  return (
    <>
      <Header />
      <main>
        <TextBanner bannerText={"Grievance Redressal Policy"} />
        <div className="mugil-container">
          <h3 className="pb-3">Introduction</h3>
          <p className="pb-4">
            Vasi Glass & Plywood is committed to addressing customer grievances promptly.
            This policy provides a structured process for submitting, tracking, and resolving complaints.
            We aim for transparency, trust, and high customer satisfaction.
            All practices comply with Indian consumer protection laws and IT regulations.
            Using our website implies acceptance of this grievance redressal framework.
          </p>

          <h3 className="pb-3">Scope of Policy</h3>
          <p className="pb-4">
            Policy applies to all customers, partners, and users interacting with our site.
            It covers grievances related to product inquiries, bulk orders, and website services.
            Both online queries and offline communications are included.
            Systematic resolution ensures fairness for all parties.
            Documentation is maintained for transparency and legal compliance.
          </p>

          <h3 className="pb-3">Definition of Grievance</h3>
          <p className="pb-4">
            A grievance is any dissatisfaction expressed by a customer regarding our products, services, or website.
            It may include issues such as product quality, response delays, or inaccurate information.
            Complaints regarding partner services are also included.
            Each grievance is evaluated thoroughly.
            Timely and effective resolution is the objective.
          </p>

          <h3 className="pb-3">Submission of Grievances</h3>
          <p className="pb-4">
            Grievances can be submitted via email, contact form, or phone.
            Complete details including name, contact information, and complaint nature are required.
            Attachments like images or invoices may be included.
            Incomplete submissions may delay resolution.
            Clear communication ensures efficient handling.
          </p>

          <h3 className="pb-3">Grievance Officer</h3>
          <p className="pb-4">
            A designated grievance officer manages all complaints.
            The officer ensures grievances are acknowledged and processed promptly.
            They act as a liaison between customers, partners, and internal teams.
            Contact details are available on the website.
            They handle complaints professionally and impartially.
          </p>

          <h3 className="pb-3">Acknowledgement of Complaints</h3>
          <p className="pb-4">
            All submitted grievances are acknowledged within 24-48 hours.
            Acknowledgement includes a reference number for tracking.
            Customers are informed of the expected resolution timeline.
            Acknowledgement ensures transparency and accountability.
            It confirms receipt of the complaint.
          </p>

          <h3 className="pb-3">Grievance Resolution Procedure</h3>
          <p className="pb-4">
            Each grievance is assessed to determine the root cause.
            Actions are taken to resolve issues in consultation with relevant teams.
            Resolutions may include guidance, clarification, or escalation to partners.
            Updates are provided at every stage.
            Resolution focuses on fairness, clarity, and satisfaction.
          </p>

          <h3 className="pb-3">Timeline for Resolution</h3>
          <p className="pb-4">
            We strive to resolve grievances within 7-10 business days.
            Complex complaints requiring partner intervention may take longer.
            Customers are informed about expected delays.
            Urgent issues are prioritized.
            Timely resolution ensures trust and reliability.
          </p>

          <h3 className="pb-3">Escalation Process</h3>
          <p className="pb-4">
            Unresolved grievances may be escalated to higher management or partners.
            Customers are informed of escalation and expected response timelines.
            Escalation ensures serious complaints receive attention.
            We aim for efficient and transparent resolution.
            All escalations are documented.
          </p>

          <h3 className="pb-3">Customer Responsibilities</h3>
          <p className="pb-4">
            Customers should provide accurate and complete information.
            They must respond promptly to clarification requests.
            Incomplete details may delay resolution.
            Cooperation ensures faster and effective handling.
            Responsible engagement maintains a professional grievance process.
          </p>

          <h3 className="pb-3">Confidentiality</h3>
          <p className="pb-4">
            All grievances are treated with strict confidentiality.
            Complaint details are shared only with authorized personnel.
            Customer identity and sensitive data are protected.
            Records are securely maintained.
            Confidentiality encourages open and honest communication.
          </p>

          <h3 className="pb-3">Feedback & Improvement</h3>
          <p className="pb-4">
            Customer feedback is encouraged after resolution.
            Feedback helps improve products, services, and internal processes.
            Suggestions are periodically evaluated for process enhancement.
            We learn from grievances to prevent future issues.
            Continuous improvement strengthens customer relationships.
          </p>

          <h3 className="pb-3">Record Keeping</h3>
          <p className="pb-4">
            All grievances and resolutions are documented.
            Records include complaint details, communications, and resolution actions.
            Documentation supports auditing and compliance with Indian laws.
            Records are retained securely and destroyed per retention policies.
            Proper record-keeping ensures transparency and reliability.
          </p>

          <h3 className="pb-3">Legal Compliance</h3>
          <p className="pb-4">
            Grievance redressal follows Indian consumer protection laws and IT Act guidelines.
            We comply with applicable rules for timely and fair complaint handling.
            Legal recourse is available if grievances remain unresolved.
            Compliance protects both customers and the company.
            Operations are conducted lawfully and ethically.
          </p>

          <h3 className="pb-3">Contact Information</h3>
          <p className="pb-4">
            Grievances can be submitted via email: <a href="mailto:murugan@mugilelitemart.com">murugan@mugilelitemart.com</a> or phone: 9965071966.
            Grievance officer responds promptly to complaints.
            Office hours are clearly mentioned on the website.
            Customers are encouraged to reach out for clarification or assistance.
            Direct contact ensures faster resolution and satisfaction.
          </p>

        </div>
      </main>
      <Footer />
    </>
  );
}

export default GrievanceRedressalPolicy;
