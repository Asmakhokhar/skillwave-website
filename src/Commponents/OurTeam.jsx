import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function TeamSection() {
    const teamMembers = [
        { 
            name: "Abdul Jabbar Asif", 
            role: "Founder", 
            img: "/--16.jpg",
            social: {
                facebook: "#",
                instagram: "#"
            }
        },
        { 
            name: "Muhammad Basit", 
            role: "Co-Founder", 
            img: "/--17.jpg",
            social: {
                facebook: "#",
                instagram: "#"
            }
        },
        { 
            name: "Malik Aslam Awan", 
            role: "CEO", 
            img: "/--19.jpg",
            social: {
                facebook: "#",
                instagram: "#"
            }
        },
        { 
            name: "Muhammad Humza", 
            role: "Director", 
            img: "/--18.jpg",
            social: {
                facebook: "#",
                instagram: "#"
            }
        },
        { 
            name: "Arham Sohail", 
            role: "Managing Director", 
            img: "/--21.jpg",
            social: {
                facebook: "#",
                instagram: "#"
            }
        },
        { 
            name: "Inshah Noor", 
            role: "HR Manager", 
            img: "/insha.png",
            social: {
                facebook: "#",
                instagram: "#"
            }
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-sm font-semibold tracking-wider text-green-600">OUR TEAM</span>
                    <h2 className="mt-2 text-4xl font-bold text-gray-900">The Leadership Team</h2>
                    <div className="mt-4 mx-auto w-20 h-1 bg-green-500 rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {teamMembers.map((member, index) => {
                        const isLeadership =
                            member.role.toLowerCase() === "ceo" ||
                            member.role.toLowerCase() === "director" ||
                            member.role.toLowerCase() === "founder" ||
                            member.role.toLowerCase() === "co-founder" ||
                            member.role.toLowerCase() === "managing director" ||
                            member.role.toLowerCase() === "hr manager";

                        return (
                            <div key={index} className="group relative">
                                <div className={`relative overflow-hidden rounded-xl aspect-square ${isLeadership ? "ring-2 ring-green-500" : "ring-1 ring-gray-200"}`}>
                                    <img
                                        src={member.img || "/placeholder-team.jpg"}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                        <div className="mb-3">
                                            <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                                            <p className="text-green-300 text-sm">{member.role}</p>
                                        </div>
                                        <div className="flex space-x-3">
                                            {member.social.facebook && (
                                                <a 
                                                    href={member.social.facebook} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-white hover:text-green-300 transition-colors"
                                                >
                                                    <FaFacebook className="w-5 h-5" />
                                                </a>
                                            )}
                                            {member.social.instagram && (
                                                <a 
                                                    href={member.social.instagram} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-white hover:text-green-300 transition-colors"
                                                >
                                                    <FaInstagram className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {isLeadership && (
                                    <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg z-10">
                                        ★
                                    </div>
                                )}

                                <div className="mt-4 text-center">
                                    <h3 className="text-gray-900 font-medium group-hover:text-green-600 transition-colors">{member.name}</h3>
                                    <p className="text-gray-600 text-sm">{member.role}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}