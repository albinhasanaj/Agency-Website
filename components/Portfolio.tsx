import CardCarousel from './CardCarousel';

const Portfolio = () => {

    return (
        <section className='text-white flex flex-col gap-16 justify-center min-h-screen'>
            <div className="flex w-full flex-col gap-2">
                <div className="flex gap-4 items-center">
                    <div className="w-[64px] h-[1px] bg-white" />
                    <span>PORTFOLIO</span>
                </div>
                <h2 className='text-white text-[32px] lg:text-[48px] font-bold mt-10'>Recent projects</h2>
            </div>

            <CardCarousel />
        </section>
    )
}

export default Portfolio