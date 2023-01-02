import React, { useState } from 'react';
const Panel = ({ title, children, isActive }) => {
  
  return (
    <div>
      <section>
        <h2 class="panel">{title}</h2>

        {isActive ? (
          <p>{children}</p>
        ) : (
          <button onClick={() => setIsActive(true)}>Show</button>
        )}
      </section>
    </div>
  );
};
export default Panel;
