function Freelance() {
    return (
        <section className='p-6'>
            <div className="p-6 mt-6 bg-[#0f172a] border-none rounded-xl backdrop-blur-sm max-w-lg mx-auto">
                <h3 className=' text-cyan-400 text-xl text-left font-bold pb-6'> Ready to start a project? </h3>
                <p className='text-cyan-500 text-sm mb-6'>
                    I am Available for freelance opportunities, and exiciting new projects. Let's discuss how I can bring your ideas to life.
                </p>
                <button 
                className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300'
                onClick={() => window.location.href="https://wa.me/message/L4V24KRUGU7XE1"}>Hire Me</button>
            </div>

        </section>
    )
}

export default Freelance

 