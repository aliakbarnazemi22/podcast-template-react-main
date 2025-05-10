import React from 'react'

function EssentionalEpisodes() {
    return (
        <section className='my-40 container mx-auto xl:max-w-[68%]'>
            <div className="flex justify-between items-end">
                <h2 className='text-[50px] text-[#000] font-[700]'>
                    Essential episodes:
                </h2>
                <a
                    href="#"
                    className="font-lato text-black text-[15px] font-[700] gap-3 items-center h-[fit-content] flex mb-4"
                >
                    View all episodes
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-arrow-right mt-[2px]"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                    </svg>
                </a>
            </div>
            
            <div className="flex justify-between flex-wrap mt-8 gap-0">
                <div className='w-full md:w-1/2 lg:w-[33.3%] p-6'>
                    <div className="w-full bg-white shadow-c1 rounded-xl">
                        <div className="w-full h-[382px] relative rounded-tl-xl rounded-tr-xl">
                            <div className="w-[45px] h-[45px] rounded-lg bg-white absolute top-3 right-3 z-10 flex justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    fill="currentColor"
                                    className="bi bi-headphones font-bold"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5" />
                                </svg>
                            </div>
                            <div className="w-full h-full absolute bg-[url('/public/images/podcasts/item1.jpg')] bg-cover bg-center rounded-tl-xl rounded-tr-xl"></div>
                        </div>

                        <div className="w-full py-[30px] px-[36px]">
                            <div className="text-[#8e8b8c] text-[16px] flex items-center gap-2 font-[500] font-lato">
                                <p>Episode 1</p>
                                <div className="w-[3px] h-[3px] rounded-full bg-[#8e8b8c]"></div>
                                <p>Technology</p>
                            </div>

                            <div className="mt-3">
                                <a
                                    href="#"
                                    className="text-[27px] text-black font-bold leading-[1.5]"
                                >
                                    SRKP selects: how the new ages work
                                </a>
                            </div>

                            <div className="mt-5">
                                <a href="#" className='text-[#8e8b8c] text-[15px] flex gap-1 items-center'>
                                    Share

                                    <div className="p-[6px] rounded-full bg-[#8e8b8c] mt-[1px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#FFF" className="mr-[1px] bi bi-share-fill" viewBox="0 0 16 16">
                                            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-[33.3%] p-6'>
                    <div className="w-full bg-white shadow-c1 rounded-xl">
                        <div className="w-full h-[382px] relative rounded-tl-xl rounded-tr-xl">
                            <div className="w-[45px] h-[45px] rounded-lg bg-white absolute top-3 right-3 z-10 flex justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    fill="currentColor"
                                    className="bi bi-headphones font-bold"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5" />
                                </svg>
                            </div>
                            <div className="w-full h-full absolute bg-[url('/public/images/podcasts/item1.jpg')] bg-cover bg-center rounded-tl-xl rounded-tr-xl"></div>
                        </div>

                        <div className="w-full py-[30px] px-[36px]">
                            <div className="text-[#8e8b8c] text-[16px] flex items-center gap-2 font-[500] font-lato">
                                <p>Episode 1</p>
                                <div className="w-[3px] h-[3px] rounded-full bg-[#8e8b8c]"></div>
                                <p>Technology</p>
                            </div>

                            <div className="mt-3">
                                <a
                                    href="#"
                                    className="text-[27px] text-black font-bold leading-[1.5]"
                                >
                                    SRKP selects: how the new ages work
                                </a>
                            </div>

                            <div className="mt-5">
                                <a href="#" className='text-[#8e8b8c] text-[15px] flex gap-1 items-center'>
                                    Share

                                    <div className="p-[6px] rounded-full bg-[#8e8b8c] mt-[1px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#FFF" className="mr-[1px] bi bi-share-fill" viewBox="0 0 16 16">
                                            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-[33.3%] p-6'>
                    <div className="w-full bg-white shadow-c1 rounded-xl">
                        <div className="w-full h-[382px] relative rounded-tl-xl rounded-tr-xl">
                            <div className="w-[45px] h-[45px] rounded-lg bg-white absolute top-3 right-3 z-10 flex justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    fill="currentColor"
                                    className="bi bi-headphones font-bold"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5" />
                                </svg>
                            </div>
                            <div className="w-full h-full absolute bg-[url('/public/images/podcasts/item1.jpg')] bg-cover bg-center rounded-tl-xl rounded-tr-xl"></div>
                        </div>

                        <div className="w-full py-[30px] px-[36px]">
                            <div className="text-[#8e8b8c] text-[16px] flex items-center gap-2 font-[500] font-lato">
                                <p>Episode 1</p>
                                <div className="w-[3px] h-[3px] rounded-full bg-[#8e8b8c]"></div>
                                <p>Technology</p>
                            </div>

                            <div className="mt-3">
                                <a
                                    href="#"
                                    className="text-[27px] text-black font-bold leading-[1.5]"
                                >
                                    SRKP selects: how the new ages work
                                </a>
                            </div>

                            <div className="mt-5">
                                <a href="#" className='text-[#8e8b8c] text-[15px] flex gap-1 items-center'>
                                    Share

                                    <div className="p-[6px] rounded-full bg-[#8e8b8c] mt-[1px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#FFF" className="mr-[1px] bi bi-share-fill" viewBox="0 0 16 16">
                                            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-[33.3%] p-6'>
                    <div className="w-full bg-white shadow-c1 rounded-xl">
                        <div className="w-full h-[382px] relative rounded-tl-xl rounded-tr-xl">
                            <div className="w-[45px] h-[45px] rounded-lg bg-white absolute top-3 right-3 z-10 flex justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    fill="currentColor"
                                    className="bi bi-headphones font-bold"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5" />
                                </svg>
                            </div>
                            <div className="w-full h-full absolute bg-[url('/public/images/podcasts/item1.jpg')] bg-cover bg-center rounded-tl-xl rounded-tr-xl"></div>
                        </div>

                        <div className="w-full py-[30px] px-[36px]">
                            <div className="text-[#8e8b8c] text-[16px] flex items-center gap-2 font-[500] font-lato">
                                <p>Episode 1</p>
                                <div className="w-[3px] h-[3px] rounded-full bg-[#8e8b8c]"></div>
                                <p>Technology</p>
                            </div>

                            <div className="mt-3">
                                <a
                                    href="#"
                                    className="text-[27px] text-black font-bold leading-[1.5]"
                                >
                                    SRKP selects: how the new ages work
                                </a>
                            </div>

                            <div className="mt-5">
                                <a href="#" className='text-[#8e8b8c] text-[15px] flex gap-1 items-center'>
                                    Share

                                    <div className="p-[6px] rounded-full bg-[#8e8b8c] mt-[1px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#FFF" className="mr-[1px] bi bi-share-fill" viewBox="0 0 16 16">
                                            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-[33.3%] p-6'>
                    <div className="w-full bg-white shadow-c1 rounded-xl">
                        <div className="w-full h-[382px] relative rounded-tl-xl rounded-tr-xl">
                            <div className="w-[45px] h-[45px] rounded-lg bg-white absolute top-3 right-3 z-10 flex justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    fill="currentColor"
                                    className="bi bi-headphones font-bold"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5" />
                                </svg>
                            </div>
                            <div className="w-full h-full absolute bg-[url('/public/images/podcasts/item1.jpg')] bg-cover bg-center rounded-tl-xl rounded-tr-xl"></div>
                        </div>

                        <div className="w-full py-[30px] px-[36px]">
                            <div className="text-[#8e8b8c] text-[16px] flex items-center gap-2 font-[500] font-lato">
                                <p>Episode 1</p>
                                <div className="w-[3px] h-[3px] rounded-full bg-[#8e8b8c]"></div>
                                <p>Technology</p>
                            </div>

                            <div className="mt-3">
                                <a
                                    href="#"
                                    className="text-[27px] text-black font-bold leading-[1.5]"
                                >
                                    SRKP selects: how the new ages work
                                </a>
                            </div>

                            <div className="mt-5">
                                <a href="#" className='text-[#8e8b8c] text-[15px] flex gap-1 items-center'>
                                    Share

                                    <div className="p-[6px] rounded-full bg-[#8e8b8c] mt-[1px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#FFF" className="mr-[1px] bi bi-share-fill" viewBox="0 0 16 16">
                                            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-[33.3%] p-6'>
                    <div className="w-full bg-white shadow-c1 rounded-xl">
                        <div className="w-full h-[382px] relative rounded-tl-xl rounded-tr-xl">
                            <div className="w-[45px] h-[45px] rounded-lg bg-white absolute top-3 right-3 z-10 flex justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    fill="currentColor"
                                    className="bi bi-headphones font-bold"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5" />
                                </svg>
                            </div>
                            <div className="w-full h-full absolute bg-[url('/public/images/podcasts/item1.jpg')] bg-cover bg-center rounded-tl-xl rounded-tr-xl"></div>
                        </div>

                        <div className="w-full py-[30px] px-[36px]">
                            <div className="text-[#8e8b8c] text-[16px] flex items-center gap-2 font-[500] font-lato">
                                <p>Episode 1</p>
                                <div className="w-[3px] h-[3px] rounded-full bg-[#8e8b8c]"></div>
                                <p>Technology</p>
                            </div>

                            <div className="mt-3">
                                <a
                                    href="#"
                                    className="text-[27px] text-black font-bold leading-[1.5]"
                                >
                                    SRKP selects: how the new ages work
                                </a>
                            </div>

                            <div className="mt-5">
                                <a href="#" className='text-[#8e8b8c] text-[15px] flex gap-1 items-center'>
                                    Share

                                    <div className="p-[6px] rounded-full bg-[#8e8b8c] mt-[1px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#FFF" className="mr-[1px] bi bi-share-fill" viewBox="0 0 16 16">
                                            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EssentionalEpisodes