import ReactGA from "react-ga4";

const GA_ID = "G-BFC9Z4MMWG";

export const initGA = () => {
  ReactGA.initialize(GA_ID);
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

  // export const trackEvent = (action, category, label) => {
  //   ReactGA.event({ action, category, label });
  // };


export const trackEvent = (formName) => {
  ReactGA.event("lead", {
    form: formName,   // param bổ sung
    action: "submit_form"
  });
};