import React from "react";

const Footer = () => {
    const footerSections = [
        {
            title: "Product",
            links: ["Overview", "Features", "Solutions", "Tutorials", "Pricing", "Releases"],
        },
        {
            title: "Company",
            links: ["About us", "Careers", "Press", "News", "Media kit", "Contact"],
        },
        {
            title: "Resources",
            links: ["Blog", "Newsletter", "Events", "Help centre", "Tutorials", "Support"],
        },
        {
            title: "Use cases",
            links: ["Startups", "Enterprise", "Government", "SaaS centre", "Marketplaces", "Ecommerce"],
        },
        {
            title: "Social",
            links: ["Twitter", "LinkedIn", "Facebook", "GitHub", "AngelList", "Dribbble"],
        },
        {
            title: "Legal",
            links: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"],
        },
    ];

    return (
        <footer className="bg-gray-10 py-8">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-sm font-semibold text-gray-700 mb-4">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link, idx) => (
                                    <li key={idx}>
                                        <a
                                            href="#"
                                            className={`text-sm text-gray-500 hover:text-gray-700 ${link === "Solutions" ? "relative inline-block" : ""
                                                }`}
                                        >
                                            {link}
                                            {link === "Solutions" && (
                                                <span className="absolute ml-1 px-2 py-0.5 text-xs font-semibold text-green-600 bg-green-100 rounded-full">
                                                    New
                                                </span>
                                            )}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="border-t border-gray-200 pt-6 flex justify-between items-center text-sm text-gray-500">
                    <div className="flex items-center">
                        <div className="text-2xl font-bold text-red-600">Zysk</div>
                    </div>
                    <p>© 2077 zysktechnologies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
