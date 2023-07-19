import { css } from '@emotion/css';
import { useState } from 'react';

const useCustomStyles = (styles) => {
  const [generatedClasses, setGeneratedClasses] = useState(null);

  if (!generatedClasses) {
    const evaluatedStyles = typeof styles === 'function' ? styles() : styles;
    const generated = {};

    for (const key in evaluatedStyles) {
      generated[key] = css(evaluatedStyles[key]);
    }

    setGeneratedClasses(generated);
  }

  return generatedClasses || {};
};

export default useCustomStyles;