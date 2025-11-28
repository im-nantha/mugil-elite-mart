import React from "react";
import TextBanner from "../components/TextBanner/TextBanner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../assets/styles/main.scss";

const SecurityPolicy = () => {
  return (
    <>
      <Header />
      <main className="main-section">
        <TextBanner bannerText={"Security Policy"} />
        <div className="mugil-container">

          <h3 className="pb-3">Introduction</h3>
          <p className="pb-4">
            Vasi Glass & Plywood is committed to ensuring the security of all information submitted on our website.
            Our website is for showcasing products, including plywood, glass, doors, and home décor.
            Security measures protect both users and company data.
            All practices follow Indian IT Act and best industry standards.
            Using the website implies understanding and acceptance of this security framework.
          </p>

          <h3 className="pb-3">Scope of Security</h3>
          <p className="pb-4">
            This policy applies to all website users, visitors, and internal staff.
            It covers inquiry forms, contact submissions, and website analytics.
            Security practices include physical, administrative, and technical measures.
            Users are expected to adhere to the stated security practices.
            The scope ensures safe handling of data and content.
          </p>

          <h3 className="pb-3">Data Protection Principles</h3>
          <p className="pb-4">
            We follow confidentiality, integrity, and availability principles.
            Personal information is only used for legitimate business purposes.
            Unauthorized access, alteration, or destruction of data is prevented.
            Security practices align with Indian IT Act, 2000 guidelines.
            User trust is prioritized in all protection measures.
          </p>

          <h3 className="pb-3">Secure Hosting & Infrastructure</h3>
          <p className="pb-4">
            Our website is hosted on secure servers with modern encryption.
            Server access is limited to authorized personnel only.
            Regular updates and security patches are applied to prevent vulnerabilities.
            Physical security controls protect hosting infrastructure.
            Monitoring ensures the system remains safe from threats.
          </p>

          <h3 className="pb-3">Firewalls & Network Security</h3>
          <p className="pb-4">
            Firewalls prevent unauthorized access to servers and content.
            Intrusion detection systems monitor for suspicious activity.
            Communication between users and servers is encrypted with SSL.
            Network security ensures protection from cyber threats.
            Continuous monitoring maintains a secure online environment.
          </p>

          <h3 className="pb-3">Access Control</h3>
          <p className="pb-4">
            Sensitive data is accessible only by authorized personnel.
            Role-based access limits exposure of confidential information.
            Internal staff follow strict authentication and password policies.
            Access activities are logged for accountability.
            Users submitting inquiries can only access their own submissions through support.
          </p>

          <h3 className="pb-3">Data Encryption</h3>
          <p className="pb-4">
            Sensitive information submitted via forms is encrypted.
            Encryption protects data in transit and at rest.
            All communications with the website are secure.
            Encryption practices follow industry and legal standards.
            Users are assured their information is safeguarded.
          </p>

          <h3 className="pb-3">Monitoring & Threat Detection</h3>
          <p className="pb-4">
            Regular monitoring detects security breaches or suspicious activity.
            Automated alerts notify staff of potential threats.
            Security audits are conducted periodically.
            Threat intelligence tools enhance risk mitigation.
            Monitoring allows timely incident response.
          </p>

          <h3 className="pb-3">Data Backup & Recovery</h3>
          <p className="pb-4">
            Website data is backed up regularly to prevent loss.
            Backup copies are securely stored in multiple locations.
            Recovery procedures restore data in case of accidental loss.
            Retention follows Indian regulatory requirements.
            Backups are tested periodically for reliability.
          </p>

          <h3 className="pb-3">User Responsibility</h3>
          <p className="pb-4">
            Users must provide accurate information when submitting inquiries.
            Avoid sharing sensitive data via unsecured channels.
            Unauthorized access or tampering with content is prohibited.
            Safe browsing practices are encouraged.
            User cooperation maintains website security.
          </p>

          <h3 className="pb-3">Third-Party Vendor Compliance</h3>
          <p className="pb-4">
            Vendors providing technical support must follow confidentiality agreements.
            Vendor systems are reviewed for compliance with our security standards.
            Data sharing with vendors is limited and monitored.
            Compliance ensures no compromise of website security.
            All third-party interactions are controlled and secure.
          </p>

          <h3 className="pb-3">Incident Response Plan</h3>
          <p className="pb-4">
            A defined response plan handles potential security breaches.
            Incidents are recorded, investigated, and mitigated promptly.
            Affected users are notified when necessary.
            Lessons learned improve overall security measures.
            The plan ensures continuous protection for users and data.
          </p>

          <h3 className="pb-3">Legal Compliance</h3>
          <p className="pb-4">
            All security measures comply with Indian IT laws and regulations.
            Guidelines of the Information Technology (Reasonable Security Practices) Rules, 2011 are followed.
            Data breach notifications are issued as legally required.
            Audits ensure ongoing compliance.
            Legal adherence protects both users and the company.
          </p>

          <h3 className="pb-3">Policy Updates</h3>
          <p className="pb-4">
            Security policies may be updated periodically to reflect legal or technological changes.
            Updates will be published clearly on the website.
            Users are encouraged to review this policy regularly.
            Significant changes affecting users will be communicated directly.
            Continued use implies acceptance of updated security practices.
          </p>

        </div>
      </main>
      <Footer />
    </>
  );
}

export default SecurityPolicy;
