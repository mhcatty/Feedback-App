import React from 'react'

function Roadmap() {
  return (
    <div className='roadmap container flex flex-col gap-1-5'>
        <div className='flex align-center between'>
            <h3>Roadmap</h3>
            <a className='view-link' href="">View</a>
        </div>

        <div className='flex flex-col gap-0-8'>
            <div className='flex align-center between'>
                <div className='flex align-center justify-center gap-1'>
                    <svg width="9" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#F49F85"/>
                    </svg>
                    <p>Planned</p>
                </div>
                <h5>2</h5>
            </div>

            <div className='flex align-center between'>
                <div className='flex align-center justify-center gap-1'>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#AD1FEA"/>
                    </svg>
                    <p>In-Progress</p>
                </div>
                <h5>3</h5>
            </div>

            <div className='flex align-center between'>
                <div className='flex align-center justify-center gap-1'>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#62BCFA"/>
                    </svg>
                    <p>Live</p>
                </div>
                <h5>1</h5>
            </div>
        </div>
    </div>
  )
}

export default Roadmap