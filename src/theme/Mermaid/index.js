import React from 'react';
import OriginalMermaid from '@theme-original/Mermaid';

/**
 * Wrap all Mermaid diagrams in a global box with caption support (via custom.css).
 * Keeps diagrams centered and readable without fixed sizing.
 */
export default function MermaidWrapper(props) {
  return (
    <div className="mermaid-box">
      <OriginalMermaid {...props} />
    </div>
  );
}
