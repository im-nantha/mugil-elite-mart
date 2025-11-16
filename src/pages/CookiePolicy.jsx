import React from "react";
import TextBanner from "../components/TextBanner/TextBanner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../assets/styles/main.scss";

const CookiePolicy = () => {
  return (
    <>
      <Header />
      <main>
        <TextBanner bannerText={"Cookie Policy"} />
        <div className="mugil-container">
          <h3 className="pb-3">Introduction</h3>
          <p className="pb-4">
            Vasi Glass & Plywood values your privacy and strives for transparency regarding data collection.
            This Cookie Policy explains how cookies and similar technologies are used on our website.
            Our site is a showcase-only platform for displaying products we deal in, including plywood, glass, home décor, and related items.
            By using our website, you agree to the use of cookies in accordance with this policy.
            The policy ensures compliance with Indian regulations and industry best practices.
          </p>

          <h3 className="pb-3">What Are Cookies</h3>
          <p className="pb-4">
            Cookies are small text files stored on your device when you visit a website.
            They help improve user experience by remembering preferences, sessions, and browsing behavior.
            Our cookies do not store personal or sensitive financial information.
            They assist in making the website easier to navigate and more efficient.
            Cookies may be temporary (session cookies) or persistent for recurring visits.
          </p>

          <h3 className="pb-3">Types of Cookies We Use</h3>

          <p><b>Essential Cookies:</b> Required for basic website functionality and security.</p>
          <p><b>Performance Cookies:</b> Collect information on website usage to improve site performance.</p>
          <p><b>Functional Cookies:</b> Remember user preferences such as language or region settings.</p>
          <p><b>Analytics Cookies:</b> Help us understand how visitors interact with the website to enhance user experience.</p>
          <p className="pb-4">We do not use tracking cookies for marketing purposes.</p>

          <h3 className="pb-3">Purpose of Cookies</h3>
          <p className="pb-4">
            Cookies help us provide a smooth browsing experience for our visitors.
            They allow us to understand user behavior and optimize website content.
            Performance data helps improve navigation, loading times, and site functionality.
            Cookies ensure that product displays, images, and catalogues are efficiently delivered.
            Our primary focus is enhancing user convenience while showcasing products.
          </p>

          <h3 className="pb-3">Third-Party Cookies</h3>
          <p className="pb-4">
            Some cookies may be placed by trusted third-party service providers.
            These providers assist in website analytics, hosting, or technical maintenance.
            We ensure all third-party cookies comply with our privacy and data protection principles.
            Vasi Glass & Plywood is not responsible for cookies set by external sites linked through our platform.
            Users should review third-party policies if they interact with external content.
          </p>

          <h3 className="pb-3">Managing Cookies</h3>
          <p className="pb-4">
            You can manage or disable cookies through your browser settings.
            Disabling cookies may affect certain functionalities of the website.
            Users can choose to block third-party cookies separately.
            Adjusting cookie settings does not impact the showcase-only nature of our site.
            We encourage users to review and modify cookie preferences as desired.
          </p>

          <h3 className="pb-3">Data Collected Through Cookies</h3>
          <p className="pb-4">
            Cookies collect non-personal information such as browser type, device, and site usage.
            They do not capture personally identifiable details like name, email, or phone without user submission.
            Information is used to analyze website performance and improve usability.
            No data collected through cookies is sold or shared with third parties for marketing.
            The data is retained in accordance with Indian IT guidelines and privacy best practices.
          </p>

          <h3 className="pb-3">Security and Privacy</h3>
          <p className="pb-4">
            Cookies are stored securely and cannot be accessed by unauthorized parties.
            Our website follows standard security measures to prevent misuse of collected data.
            We maintain transparency regarding cookie usage and its purpose.
            Data from cookies complements other privacy measures in place on the site.
            Visitors’ trust and safe browsing experience are our top priorities.
          </p>

          <h3 className="pb-3">Consent</h3>
          <p className="pb-4">
            By continuing to use the website, you consent to the use of cookies.
            Consent can be managed or withdrawn by adjusting browser settings.
            Users are encouraged to regularly review this policy for updates.
            We aim for clear communication and transparency in cookie usage.
            Using the site after changes in this policy implies acceptance of those changes.
          </p>

          <h3 className="pb-3">Contact Information</h3>
          <p className="pb-4">
            For questions about our Cookie Policy or website data practices, contact us:
            Email: <a href="mailto:murugan@mugilelitemart.com">murugan@mugilelitemart.com</a>,
            Phone: <a href="tel:9965071966">9965071966</a>,
            Address: Kallakurichi, Tamil Nadu, India.
            Our team is available during business hours to assist with queries and ensure prompt responses regarding cookies, data collection, and privacy practices.
          </p>

        </div>
      </main>
      <Footer />
    </>
  );
}

export default CookiePolicy;
