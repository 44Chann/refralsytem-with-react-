
export const NewsCard = ({ img, title, content, url, name }) => {
    return (
        <>
            <div className='w-full lg:flex  shadow-lg hover:shadow-xl  my-6 border '>
                <div className='flex items-center  justify-center lg:w-[40%] w-[100%] flex-shrink-0 '>
                    <img src={img} className="object-cover" alt="" />
                </div>
                <div className='py-3 px-3'>
                    <p className="text-xl pb-3">{title}</p>
                    <p className="mb-4">{content}</p>
                    <a className="border-black border  mt-4 py-1 px-2 rounded-full" target="_blank" href={url}>Read on {name}</a>

                </div>
            </div>
        </>
    )
}