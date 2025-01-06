import { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the C++ Bootcamp 2025?",
      answer:
        "C++ Bootcamp 2025 is a comprehensive training program designed for beginners to advanced learners, covering core C++ concepts, data structures, algorithms, and practical problem-solving skills.",
    },
    {
      question: "Who can join this bootcamp?",
      answer:
        "This bootcamp is open to all learners, from beginners who have no prior knowledge of C++, to experienced developers looking to refresh and expand their C++ skills.",
    },
    {
      question: "What will I learn in this bootcamp?",
      answer:
        "You will learn the fundamentals of C++, object-oriented programming (OOP), memory management, data structures like arrays, linked lists, trees, and algorithms such as sorting, searching, and dynamic programming.",
    },
    {
      question: "What are the prerequisites for this bootcamp?",
      answer:
        "There are no strict prerequisites, but basic knowledge of programming concepts (like variables, loops, and functions) will help. We also recommend having access to a computer with an internet connection.",
    },
    {
      question: "How long is the bootcamp?",
      answer:
        "The C++ Bootcamp 2025 will run for 8 weeks, with live sessions, assignments, and projects that will ensure you get hands-on experience with C++ coding.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg -z-50">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900">
        C++ Bootcamp 2025 - Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className="cursor-pointer p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-300"
            onClick={() => toggleFAQ(index)}
            aria-expanded={open === index ? "true" : "false"}
            aria-controls={`faq-answer-${index}`}
          >
            <h3 className="text-xl font-medium text-gray-800">
              {faq.question}
            </h3>
          </div>
          <div
            id={`faq-answer-${index}`}
            className={`mt-2 text-gray-600 pl-4 transition-all duration-500 ease-in-out overflow-hidden ${
              open === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
            style={{ transitionProperty: "max-height, opacity" }}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
