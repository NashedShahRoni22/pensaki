import React, { useState } from 'react';
import feature from '../assets/feature.png';
import { AccordionCustomIcon } from './AccordionCustomIcon';

const faqData = [
  {
    question: "What is Pensaki Blackboard?",
    answer: "Pensaki Blackboard is a comprehensive software suite designed to streamline various aspects of your business, from document management to cybersecurity and payroll."
  },
  {
    question: "What are the key features of Pensaki Blackboard?",
    answer: [
      "Pensaki PDF Converter: Convert PDF documents to editable formats effortlessly.",
      "Pensaki Vault Cloud Storage: Securely store and manage your files in the cloud.",
      "Bitss Cyber Security: Protect your data and systems with advanced cybersecurity measures.",
      "Omada-HR Payroll: Simplify payroll management and ensure compliance with HR regulations.",
      "Clasico Payslips: Generate professional payslips for your employees with ease.",
      "IFGaap Invoicing: Create and manage invoices efficiently, improving your billing process.",
      "Sosay: A versatile platform for publishing videos, photos, and opinions, enhancing your online presence."
    ]
  },
  {
    question: "How does Pensaki Blackboard enhance productivity?",
    answer: "Pensaki Blackboard integrates essential tools for document handling, security, HR management, invoicing, and multimedia publishing. This integration streamlines workflows, reduces manual tasks, and boosts overall productivity across your organization."
  },
  {
    question: "Is Pensaki Blackboard suitable for small businesses?",
    answer: "Yes, Pensaki Blackboard is designed to cater to the needs of small businesses by providing scalable solutions that address common challenges in document management, cybersecurity, payroll, and multimedia content creation."
  },
  {
    question: "Can Pensaki Blackboard help with data security?",
    answer: "Absolutely. With Bitss Cyber Security included in Pensaki Blackboard, your data is protected through robust encryption, threat detection, and access control measures, ensuring confidentiality and integrity."
  },
  {
    question: "What support options are available for Pensaki Blackboard users?",
    answer: "Pensaki offers comprehensive support services, including documentation, tutorials, and dedicated customer support, to assist users in maximizing the benefits of Pensaki Blackboard. Click here for global support-",
    link: "/support",
    linkname: "Global support"
  },
  {
    question: "Can I customize Pensaki Blackboard to suit my business needs?",
    answer: "Yes, Pensaki Blackboard is customizable, allowing you to tailor the software suite to meet your specific requirements and workflows, ensuring a seamless fit with your business operations."
  },
  {
    question: "Is Pensaki Blackboard compatible with other software and platforms?",
    answer: "Pensaki Blackboard is designed to integrate with a variety of software and platforms, providing flexibility and interoperability to streamline your business processes."
  },
  {
    question: "How can I get started with Pensaki Blackboard?",
    answer: "Getting started with Pensaki Blackboard is easy. Simply contact us to schedule a demo or discuss your requirements, and our team will guide you through the setup and implementation process. To know more about our products",
    link: "/products",
    linkname:"Products"
  },
  {
    question: "Where can I find the login page for Pensaki Blackboard?",
    answer: "You can access the login page directly by click here-",
    link: "https://office.bobosoho.com/",
    linkname:"Pensaki Blackboard"
  },
  {
    question: "Is Pensaki Blackboard compatible with all web browsers?",
    answer: "Yes, Pensaki Blackboard is designed to work seamlessly across all major web browsers, including Chrome, Firefox, Safari, and Edge. Click here to login-",
    link: "https://office.bobosoho.com/login",
    linkname:"Pensaki Blackboard login"
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col lg:flex-row gap-10 mx-5 md:mx-auto md:container lg:my-20 my-10">
      <div className="lg:w-1/2 flex items-center">
        <img className="lg:p-5" src={feature} alt="About" />
      </div>
      <div className="lg:w-[60%] my-10 lg:p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
        <AccordionCustomIcon/>
      </div>
    </section>
  );

  
};

export default FAQ;
