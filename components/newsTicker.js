import React, { useEffect } from 'react';
import $ from 'jquery';



const NewsTicker = () => {

  useEffect(() => {
    jQuery(".news-ticker").bootstrapNews({
        newsPerPage: 4,
        autoplay: false,
        pauseOnHover: true,
        direction: 'down',
        newsTickerInterval: 2500,
    });
 }, []);


  return (
    <ul className="news-ticker">
    <li className="news-item">
      <a
        href="https://www.kbip.org/uploads/documents/PMKSY_Letter.pdf"
        title="Continuation of the central sector umbrella scheme Pradhan Mantri Kisan Sampada Yojana (PMKSY)"
        target="_blank"
      >
        Continuation of the central sector umbrella scheme Pradhan Mantri Kisan
        Sampada Yojana (PMKSY)
      </a>
    </li>
    <li className="news-item">
      <a
        href="https://www.kbip.org/uploads/documents/COVID PACKAGE ENGLISH.pdf"
        title="COVID SAMASHWASA PADHATHI"
        target="_blank"
      >
        COVID SAMASHWASA PADHATHI
      </a>
    </li>
    <li className="news-item">
      <a
        href="https://www.kbip.org/uploads/documents/COVID PACKAGE MALAYALAM.pdf"
        title="കോവിഡ് സമാശ്വാസ പദ്ധതി"
        target="_blank"
      >
        കോവിഡ് സമാശ്വാസ പദ്ധതി
      </a>
    </li>
    <li className="news-item">
      <a
        href="https://www.kbip.org/uploads/documents/Kerala_Logistics_Action_Plan_Draft_For Comments.pdf"
        title="Kerala State Logistics Action Plan - Draft Report published for comments"
        target="_blank"
      >
        Kerala State Logistics Action Plan - Draft Report published for comments
      </a>
    </li>
    <li className="news-item">
      <a
        href="https://www.kbip.org/uploads/documents/Covid-Guidlines-for-industries.pdf"
        title="Covid-19 Safe Workplace Guidelines for Industry and Establishment"
        target="_blank"
      >
        Covid-19 Safe Workplace Guidelines for Industry and Establishment
      </a>
    </li>
    <li className="news-item">
      <a
        href="https://www.kbip.org/uploads/documents/PM-FME-Scheme-Engaging-DRPs.pdf"
        title="PM FME Scheme - Engaging DRPs"
        target="_blank"
      >
        PM FME Scheme - Engaging DRPs
      </a>
    </li>
    <li className="news-item">
      <a
        href="https://www.kbip.org/uploads/documents/eBook-of-Schemes-for-MSMEs.pdf"
        title="Schemes for MSMEs by Ministry of MSME, Government of India"
        target="_blank"
      >
        Schemes for MSMEs by Ministry of MSME, Government of India
      </a>
    </li>
    <li className="news-item">
      <a
        href="https://www.kbip.org/uploads/documents/Kerala MSME Facilitation Amendment Ordinance 2020.pdf"
        title="Kerala MSME Facilitation Amendment Ordinance 2020"
        target="_blank"
      >
        Kerala MSME Facilitation Amendment Ordinance 2020
      </a>
    </li>
    <li className="news-item">
      <a
        href="https://www.kbip.org/uploads/documents/INVESTOR GUIDE.pdf"
        title="INVESTOR GUIDE"
        target="_blank"
      >
        INVESTOR GUIDE
      </a>
    </li>
    <li className="news-item">
      <a
        href="https://www.kbip.org/uploads/documents/Vyavasaya Bhadratha.pdf"
        title="COVID 19 - Vyavasaya Bhadratha - Scheme for Interest Subvention on Term Loan and Working Capital Loan - Details of the scheme, guidelines and implementation procedures"
        target="_blank"
      >
        COVID 19 - Vyavasaya Bhadratha - Scheme for Interest Subvention on Term
        Loan and Working Capital Loan - Details of the scheme, guidelines and
        implementation procedures
      </a>
    </li>
    <li className="news-item">
      <a
        href="https://www.kbip.org/uploads/documents/ASCEND 2020 -Constitution of Investment Cell at KSIDC.pdf"
        title="ASCEND 2020, Global Investment Meet - Constitution of Investment Cell at KSIDC"
        target="_blank"
      >
        ASCEND 2020, Global Investment Meet - Constitution of Investment Cell at
        KSIDC
      </a>
    </li>
    <li className="news-item">
      <a
        href="https://www.kbip.org/uploads/documents/NSSH Registration Form.pdf"
        title="National SC/ST Hub (NSSH) - Registration Form"
        target="_blank"
      >
        National SC/ST Hub (NSSH) - Registration Form
      </a>
    </li>
    <li className="news-item">
      <a href="http://pg.kseb.in/ui/ncs.php" target="_blank">
        KSEB Online Application Facility
      </a>
    </li>
    <li className="news-item">
      <a
        href="https://www.kbip.org/uploads/documents/KERALA INDUSTRIAL & COMMERCIAL POLICY 2018.pdf"
        title="KERALA INDUSTRIAL & COMMERCIAL POLICY 2018"
        target="_blank"
      >
        KERALA INDUSTRIAL &amp; COMMERCIAL POLICY 2018
      </a>
    </li>
  </ul>
  
  );
}

export default NewsTicker;