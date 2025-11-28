import React from "react";
import TextBanner from "../components/TextBanner/TextBanner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../assets/styles/main.scss";

const CancellationReturnPolicy = () => {
  return (
    <>
      <Header />
      <main className="main-section">
        <TextBanner bannerText={"Cancellation & Returns Policy"} />
        <div className="mugil-container">
          <h3 className="pb-3">Introduction</h3>
          <p className="pb-4">
            Vasi Glass & Plywood provides a product showcase platform only.
            No online purchases or payments are supported on the website.
            This policy outlines cancellation and return procedures for offline transactions.
            We aim for transparency to prevent misunderstandings with customers.
            All orders and queries are handled offline via showroom or authorized contacts.
          </p>

          <h3 className="pb-3">Scope of Policy</h3>
          <p className="pb-4">
            Policy applies to all products displayed on the website.
            It clarifies expectations regarding cancellations, returns, and bulk orders.
            Applicable to offline transactions through partners or Vasi Glass & Plywood team.
            Users should review this policy before placing any order or inquiry.
            The scope ensures smooth communication with our customers.
          </p>

          <h3 className="pb-3">No Online Purchase Facility</h3>
          <p className="pb-4">
            Online transactions are not supported.
            Visitors cannot place orders through the website.
            Product inquiries are submitted via email or phone only.
            Pricing and availability must be confirmed offline.
            This maintains safety and accuracy in all orders.
          </p>

          <h3 className="pb-3">Cancellation Policy Overview</h3>
          <p className="pb-4">
            No online cancellations are possible.
            Offline cancellations must be communicated directly to our team.
            Timelines and procedures are determined by retail partners.
            Customers are advised to confirm product details before purchase.
            Clear communication ensures smooth processing.
          </p>

          <h3 className="pb-3">Returns Policy Overview</h3>
          <p className="pb-4">
            Website does not process returns.
            Return eligibility depends on retail partners and manufacturer terms.
            Customers should inspect products on delivery.
            Any discrepancies must be reported promptly.
            Our team provides guidance for resolving return issues.
          </p>

          <h3 className="pb-3">Product Warranty Disclaimer</h3>
          <p className="pb-4">
            All showcased products are genuine and sourced from trusted brands.
            Manufacturer warranties apply where available.
            Vasi Glass & Plywood does not issue independent warranties.
            Customers are advised to verify warranty details offline.
            Product performance follows manufacturer specifications.
          </p>

          <h3 className="pb-3">Bulk Orders & Special Requests</h3>
          <p className="pb-4">
            Bulk and custom orders follow offline agreements.
            Cancellations or modifications must be communicated before dispatch.
            Timelines and terms are pre-agreed for clarity.
            Special orders may be non-returnable.
            Guidance ensures minimal errors or misunderstandings.
          </p>

          <h3 className="pb-3">Product Inspection</h3>
          <p className="pb-4">
            Customers are encouraged to inspect all products.
            Discrepancies should be reported to the vendor or our team immediately.
            Visual differences from website images are communicated.
            Inspection ensures satisfaction and trust.
            Guidance helps maintain high-quality service.
          </p>

          <h3 className="pb-3">Responsibility of Retail Partners</h3>
          <p className="pb-4">
            Offline transactions are governed by partner policies.
            Vasi Glass & Plywood acts as a product showcase facilitator.
            Partners manage delivery, returns, and cancellations.
            Customers should confirm partner policies in advance.
            We assist in contacting partners when necessary.
          </p>

          <h3 className="pb-3">Customer Support Assistance</h3>
          <p className="pb-4">
            Support team answers cancellation and return queries.
            Guidance is provided via email or phone.
            Timely and accurate information ensures smooth handling.
            Support clarifies manufacturer or partner policies.
            Assistance maintains trust and satisfaction.
          </p>

          <h3 className="pb-3">Limitations & Exclusions</h3>
          <p className="pb-4">
            We are not responsible for losses or delays from partners.
            Returns for damaged products follow partner verification.
            Website does not process refunds.
            Online submissions do not constitute orders.
            Proper offline procedures must be followed by customers.
          </p>

          <h3 className="pb-3">Communication Protocol</h3>
          <p className="pb-4">
            Cancellations and return requests must be in writing or via call.
            Email confirmation ensures clarity and documentation.
            Response timelines are clearly communicated.
            Records are maintained for transparency.
            Proper communication enables faster resolution.
          </p>

          <h3 className="pb-3">Dispute Resolution</h3>
          <p className="pb-4">
            Disputes are addressed amicably offline.
            Unresolved matters may escalate through legal channels.
            Compliance with Indian consumer protection laws is ensured.
            Customers should provide detailed information for resolution.
            Resolution ensures trust and satisfaction.
          </p>

          <h3 className="pb-3">Updates to Policy</h3>
          <p className="pb-4">
            Policy may be updated to reflect changes in practice.
            Updates are published on the website.
            Customers are advised to review periodically.
            Changes do not affect previously completed offline transactions.
            Continued use indicates acceptance of the policy.
          </p>

          <h3 className="pb-3">Contact Information</h3>
          <p className="pb-4">
            Email: <a href="mailto:murugan@mugilelitemart.com">murugan@mugilelitemart.com</a> | Phone: 9965071966.
            Support is available during business hours.
            Assistance includes guidance on product and partner policies.
            Direct communication ensures clear resolution.
            Contact helps maintain customer trust and satisfaction.
          </p>

        </div>
      </main>
      <Footer />
    </>
  );
}

export default CancellationReturnPolicy;
