export default function Newsletter() {
    return (
       <section className="bg-gold-600 py-24 px-8 text-white text-center">
           <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-serif mb-6">Join Our Exclusive Club</h2>
                <p className="text-white/90 text-lg mb-10">Sign up for our newsletter to receive secret offers, early access to promotions, and inspirational travel stories.</p>
                <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                    <input 
                        type="email" 
                        placeholder="Your Email Address" 
                        className="flex-grow px-6 py-4 rounded-full text-dark-900 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button className="bg-dark-900 text-white px-8 py-4 rounded-full font-bold uppercase text-sm tracking-widest hover:bg-dark-800 transition shadow-lg">
                        Subscribe
                    </button>
                </div>
           </div>
      </section>
    )
}
