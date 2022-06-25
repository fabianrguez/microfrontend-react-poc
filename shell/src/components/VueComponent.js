import React, { useEffect, useRef } from 'react';

export default function VueComponent({ component }) {
  const componentRef = useRef(null);

  useEffect(() => {
    component(componentRef.current);
    // eslint-disable-next-line
  }, []);

  return <div ref={componentRef} />;
}
