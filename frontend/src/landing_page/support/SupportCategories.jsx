
// import React from "react";


// import accordionData from "./accordionData";



// function SupportCategories() {
//   return (
//     <div className="accordion" id="supportAccordion">
//       {accordionData.map((item, index) => (
//         <div className="accordion-item mb-3" key={item.id}>
//           <h2 className="accordion-header">
//             <button
//               className="accordion-button collapsed"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target={`#collapse${index}`}
//             >
//               {item.title}
//             </button>
//           </h2>

//           <div
//             id={`collapse${index}`}
//             className="accordion-collapse collapse"
//             data-bs-parent="#supportAccordion"
//           >
//             <div className="accordion-body">
//               <ul className="ms-3">
//                 {item.links.map((link, i) => (
//                   <li key={i} className="mb-2">
//                     <a href="#" className="text-decoration-none">
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default SupportCategories;


import accordionData from "./accordionData";
import React from "react";

const iconMap = {
  accountOpening: "bi-plus-circle",
  zerodhaAccount: "bi-person-circle",
  kite: "bi-graph-up",
  funds: "bi-currency-rupee",
  console: "bi-pie-chart",
  coin: "bi-coin",
};

function SupportCategories() {
  return (
    <div className="accordion" id="supportAccordion">
      {accordionData.map((item, index) => (
        <div className="accordion-item mb-3" key={item.id}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed d-flex align-items-center support-accordion-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
            >
              <i
                className={`bi ${iconMap[item.id]} me-3 text-primary fs-5`}
              ></i>
              {item.title}
            </button>
          </h2>

          <div
            id={`collapse${index}`}
            className="accordion-collapse collapse"
            data-bs-parent="#supportAccordion"
          >
            <div className="accordion-body">
              <ul className="ms-3">
                {item.links.map((link, i) => (
                  <li key={i} className="mb-2">
                    <a href="#" className="text-decoration-none">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SupportCategories;
