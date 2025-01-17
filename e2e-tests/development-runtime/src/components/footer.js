import React, { useContext } from "react"
import { ContextForSlices } from "../context-for-slices"

// Use as a Slice
function Footer({ framework, lang, sliceContext: { framework: frameworkViaContext }}) {
  const { posts } = useContext(ContextForSlices)

  return (
    <footer
      style={{
        marginTop: `10px`,
        fontSize: `12px`,
      }}
    >
     <span data-testid="footer-slice-context-value">{frameworkViaContext}</span>
     <span data-testid="footer-static-text">Built with {` `}</span>
     <span data-testid="footer-props">{`${framework}${lang}`}</span>
     {` `}Posts Count: <span data-testid="footer-context-derieved-value">{`${posts.length}`}</span>
    </footer>
  )
}

export default Footer
