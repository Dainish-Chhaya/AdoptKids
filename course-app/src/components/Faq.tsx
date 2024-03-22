// Faq.tsx
import React from 'react';
import '../styles/Faq.css';
import { Link } from 'react-router-dom';

const Faq: React.FC = () => {
  return (
    <div className="faq-container">
  <h2>Frequently Asked Questions</h2>

  <div className="faq-item">
    <h3>Q1: How does the child adoption process work?</h3>
    <p>
      A1: The child adoption process involves several steps, including application, home study, matching with a child, legal procedures, and post-placement support. Each step is carefully managed to ensure the well-being of both the adoptive parents and the child.
    </p>
  </div>

  <div className="faq-item">
    <h3>Q2: What are the eligibility criteria for adopting a child?</h3>
    <p>
      A2: Eligibility criteria vary depending on the adoption agency and country. Generally, adoptive parents should be of a certain age, have stable finances, and pass a home study. Other criteria may include marital status, health, and criminal background checks.
    </p>
  </div>

  <div className="faq-item">
    <h3>Q3: Can single individuals adopt a child?</h3>
    <p>
      A3: Yes, many adoption agencies and countries allow single individuals to adopt. The eligibility criteria for single parents are often similar to those for couples.
    </p>
  </div>

  <div className="faq-item">
    <h3>Q4: How long does the adoption process take?</h3>
    <p>
      A4: The duration of the adoption process varies widely. It can take several months to several years, depending on factors such as the type of adoption, the country or region, and the availability of children.
    </p>
  </div>

  <div className="faq-item">
    <h3>Q5: What is an open adoption?</h3>
    <p>
      A5: In an open adoption, there is some level of contact between the birth parents, adoptive parents, and the adopted child. This contact may include exchanging letters, photos, or even visits. The level of openness is agreed upon by all parties involved.
    </p>
  </div>

  <div className="faq-item">
    <h3>Q6: Are international adoptions still common?</h3>
    <p>
      A6: International adoptions have become less common due to changes in adoption laws and policies in many countries. The availability and process for international adoption depend on the laws of the specific countries involved.
    </p>
  </div>
</div>
  );
};

<Link to="/faq">FAQ</Link>
export default Faq;
