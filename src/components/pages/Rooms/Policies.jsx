import { motion } from 'framer-motion'

export default function Policies() {
    return (
        <section className="py-24 px-8 max-w-5xl mx-auto">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                className="bg-gray-50 rounded-3xl p-10 border border-gray-100"
            >
                <h2 className="text-3xl font-serif text-dark-900 mb-8 border-b border-gray-200 pb-4">Essential Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="font-bold text-dark-900 mb-3 uppercase tracking-wider text-sm flex items-center">
                            <span className="w-2 h-2 bg-gold-500 rounded-full mr-2"></span>Check-in / Check-out
                        </h3>
                        <p className="text-gray-600 mb-1">Check-in: <span className="font-semibold text-dark-900">3:00 PM</span></p>
                        <p className="text-gray-600">Check-out: <span className="font-semibold text-dark-900">12:00 PM</span></p>
                        <p className="text-xs text-gray-400 mt-2">Early check-in and late check-out subject to availability.</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-dark-900 mb-3 uppercase tracking-wider text-sm flex items-center">
                            <span className="w-2 h-2 bg-gold-500 rounded-full mr-2"></span>Cancellation Policy
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Cancellations must be made 48 hours prior to arrival to avoid a one-night penalty charge. Prepaid reservations are non-refundable.
                        </p>
                    </div>

                    <div>
                         <h3 className="font-bold text-dark-900 mb-3 uppercase tracking-wider text-sm flex items-center">
                            <span className="w-2 h-2 bg-gold-500 rounded-full mr-2"></span>Children & Extra Beds
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Children under 12 stay free when using existing bedding. Extra beds available upon request for a surcharge.
                        </p>
                    </div>

                    <div>
                         <h3 className="font-bold text-dark-900 mb-3 uppercase tracking-wider text-sm flex items-center">
                            <span className="w-2 h-2 bg-gold-500 rounded-full mr-2"></span>Pets
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            We welcome small pets up to 10kg. A cleaning fee of $50 per stay applies. Please inform us in advance.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
