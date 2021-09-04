import React from 'react'

// You can import global CSS files here.

// No-op wrapper.

// const styledCenter = { textAlign: 'center' }
export const Wrapper: React.FC = ({ children }) => {
    return (
        <div>
            {/* style={styledCenter} */}
            {children}
        </div>
    )
}
