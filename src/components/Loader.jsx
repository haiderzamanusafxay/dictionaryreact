import React from 'react';

const Loader = () => {
  return (
    <section className="loader-container flex-column">
      <i className="fa-solid fa-spinner icon"></i>
      <p className="description">Loading...</p>
    </section>
  );
};

export default Loader;

