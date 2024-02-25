import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

type Props = {}

const Loader = (props: Props) => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <ClipLoader
                // color={}
                // loading={loading}
                // cssOverride={override}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Loader