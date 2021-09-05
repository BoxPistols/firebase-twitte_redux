import React, { useState, useEffect } from 'react'

const Cleanup: React.FC = () => {
    const [ currentNum, setCurrentNum ] = useState(0)
    const incNum = () => {
        console.log('incNum invoked!')
        setCurrentNum((pre) => pre + 1)
    }

    useEffect(
        () => {
            // effect
            console.log('mousedown invoked!')
            window.addEventListener('mousedown', incNum)
            return () => {
                console.log('CleanUp invoked!')
                window.removeEventListener('mousedown', incNum)
            }
        },
        [ currentNum ]
    )

    return (
        <div>
            <p>currentNum: {currentNum}</p>
        </div>
    )
}

export default Cleanup
