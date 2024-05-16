import React, { useState } from 'react'
const Theme1 = React.lazy(()=>import('./FileWithCSS'))


/**
 * The theme components only imports it's theme CSS-file. These components are lazy
 * loaded, to enable "code splitting" (in order to avoid the themes being bundled together)
 */
function Theme({children}) {
    const [css ,setCss] = useState(false);

  return (
    <>
    <React.Suspense fallback={()=>null}>
    { css && <Theme1 />}
    </React.Suspense>
    
    {children}
    </>
  )
}

export default Theme