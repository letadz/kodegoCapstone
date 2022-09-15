import React from "react";

const Link = ({ href, children }) => {
  const onLinkClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onLinkClick} href={href}>
      {children}
    </a>
  );
};

export default Link;
