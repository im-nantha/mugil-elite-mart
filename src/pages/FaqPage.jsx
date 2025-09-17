import React from "react";
import FaqTabs from "../components/FaqTabs/FaqTabs";

const allFaqs = [
  { question: "What types of plywood does Mugil Elite Mart offer?", answer: "We provide a wide range of plywood including BWP, Marine, Commercial, Fire Retardant, Laminated, Acrylic, PVC, HDMR, and Block Boards suitable for furniture, interiors, and construction." },
  { question: "Does Mugil Elite Mart supply glass for doors and windows?", answer: "Yes, we offer tempered, frosted, laminated, acoustic, stained, double-glazed, fluted, and custom design glass for residential and commercial projects." },
  { question: "What kinds of doors are available at Mugil Elite Mart?", answer: "Our collection includes wooden, flush, PVC, glass panel, laminated, sliding, WPC, UV-coated, and steel security doors for every design and security need." },
  { question: "Can I purchase digital and fingerprint locks from Mugil Elite Mart?", answer: "Absolutely! We supply digital locks, fingerprint/face recognition locks, lever locks, mortise locks, cylindrical locks, and rose mortise locks for homes and offices." },
  { question: "What bathroom products and accessories are available?", answer: "We provide showers, faucets, basin mixers, towel racks, soap holders, mirror cabinets, and other premium bath accessories designed for both style and functionality." },
  { question: "Does Mugil Elite Mart offer modular kitchen solutions?", answer: "Yes, our range includes modular kitchen accessories, tandem boxes, kitchen baskets, SS baskets, shutters, and profiles for furniture to suit modern kitchens." },
  { question: "What kind of electrical products can I get?", answer: "We offer modular switches, smart switches, WiFi-enabled switches, dimmer switches, USB panels, LED bulbs, smart bulbs, ceiling/wall/table fans, and exhaust fans." },
  { question: "Are paints and adhesives available at Mugil Elite Mart?", answer: "Yes, we stock emulsion, enamel, texture, distemper, wood coatings, waterproof paints, primers, spray paints, and adhesives from Fevicol, Arlod, and Asian Paints." },
  { question: "Does Mugil Elite Mart provide delivery for bulk and retail orders?", answer: "We offer timely delivery services for both individual and bulk orders, ensuring products reach customers safely, on time, and in perfect condition." },
  { question: "Why should I choose Mugil Elite Mart for my home or commercial project?", answer: "With 25 years of expertise, a wide product range, trusted brands, quality assurance, and customer-centric service, Mugil Elite Mart is your one-stop destination for all home improvement solutions." },
];


function FaqPage() {
  return (
    <section>
      <FaqTabs faqs={allFaqs} showMore={false} />
    </section>
  );
}

export default FaqPage;
