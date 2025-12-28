// import React from "react";
// import smallCaseLogo from "../../assets/media/smallcaseLogo.png";
// // import streakLogo from "../../assets/media/streakLogo.png";
// import sensibullLogo  from "../../assets/media/sensibullLogo.svg";
// import zerodhaFundhouse  from "../../assets/media/zerodhaFundhouse.png";

// function Universe() {
//   return (
//     <div className="container mt-5">
//       <div className="row text-center">
//         <h1>The Zerodha Universe</h1>
//         <p>
//           Extend your trading and investment experience even further with our
//           partner platforms
//         </p>

//         <div className="col-4 p-3 mt-5">
//           <img src={smallCaseLogo} />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="/images/streakLogo.png" className='w-50' />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src={sensibullLogo}/>
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src={zerodhaFundhouse} />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/images/smallcaseLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/images/smallcaseLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <button
//           className="p-2 btn btn-primary fs-5 mb-5"
//           style={{ width: "20%", margin: "0 auto" }}
//         >
//           Signup Now
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Universe;

import React from 'react';

function Universe() {
    return (
        <div className="container">
            <div className="universe-section text-center mt-5 pt-5">
                <h2 className=''>The NexPeak Universe</h2>
                <p className='fs-6 py-4'> Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="row m-auto text-center ">
                <div className="col-4 p-3 mt-5">
                    <img src="/images/zerodhaFundhouse.png" className='w-50' />
                    <p className="text-small text-muted mx-3 pt-4 ">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="/images/goldenpiLogo.png" />
                    <p className="text-small text-muted mx-3 pt-4 ">Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="/images/sensibullLogo.svg" />
                    <p className="text-small text-muted mx-3 pt-4 ">Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="/images/streakLogo.png" className='w-50' />
                    <p className="text-small text-muted mx-3 pt-4 ">Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="/images/smallcaseLogo.png" />
                    <p className="text-small text-muted mx-3 pt-4 ">Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="/images/dittoLogo.png" className='w-50' />
                    <p className="text-small text-muted mx-3 pt-4 ">Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </div>
                <button
                    className="p-2 btn btn-primary fs-5 mb-5"
                    style={{ width: "20%", margin: "0 auto" }}
                >
                    Signup Now
                </button>
            </div>
        </div>
    );
}

export default Universe;