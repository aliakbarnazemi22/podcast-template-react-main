import React from 'react'

function Video() {
    return (
        <section className='w-full relative flex justify-center items-center'>
            <img src="images/other/bg-video.jpg" alt="" className='' />
            <div className="w-[100px] h-[100px] bg-white absolute rounded-full shadow-c1 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                </svg>
            </div>
        </section>
    )
}

export default Video