export default function CollaborationSection() {
    const partners = [
        {
            name: "Skillwave Institute",
            logo: "/Skillwaveogo-01.png",
            description: "Modern workspaces & networking hubs",
            width: 290,  // Custom width for Skillwave
            height: 170    // Custom height for Skillwave
        },
        {
            name: "Techxicon",
            logo: "/logoo.png",
            description: "Cutting-edge technology solutions",
            width: 230,   // Custom width for Techxicon
            height: 170   // Custom height for Techxicon
        },
        {
            name: "Deviconic",
            logo: "/Deviconic.png",
            description: "Industry-leading development expertise",
            width: 200,   // Custom width for Deviconic
            height: 170  // Custom height for Deviconic
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="inline-block px-4 py-2 mb-4 bg-green-100 rounded-full">
                        <span className="text-sm font-semibold tracking-wider text-green-700">STRATEGIC ALLIANCES</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Powering Growth Through <span className="text-green-600">Partnerships</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Through our collaboration with Skillwave Institute, Techxicon, and Deviconic, 
                        we offer students unparalleled opportunities for professional growth.
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
                    {partners.map((partner, index) => (
                        <div key={index} className="group relative flex flex-col items-center">
                            <div className="relative z-10 mb-8 p-6">
                                <div className="flex items-center justify-center" style={{ height: `${partner.height}px` }}>
                                    <img 
                                        src={partner.logo} 
                                        alt={partner.name} 
                                        width={partner.width}
                                        height={partner.height}
                                        className="object-contain transition-all duration-300 group-hover:scale-105"
                                        style={{ maxWidth: `${partner.width}px`, height: 'auto' }}
                                    />
                                </div>
                            </div>
                            <div className="relative z-0 -mt-4 w-full pt-12 pb-6 px-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100">
                                <h3 className="text-xl font-bold text-black mb-2">{partner.name}</h3>
                                <p className="text-gray-600 text-sm md:text-base">{partner.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 max-w-4xl mx-auto bg-white backdrop-blur-sm rounded-2xl p-8 md:p-10 text-center border border-gray-200 shadow-lg">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        This partnership provides access to modern workspaces, hands-on tech experience, 
                        real-world projects, and industry mentorship — equipping students with the skills, 
                        connections, and confidence to excel in their careers.
                    </p>
                </div>
            </div>
        </section>
    );
}