import React from "react";

const Features = () => {
    const features = [
        {
            title: "Share team inboxes",
            description:
                "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.09436 11.2288C6.03221 10.8282 5.99996 10.4179 5.99996 10C5.99996 5.58172 9.60525 2 14.0526 2C18.4999 2 22.1052 5.58172 22.1052 10C22.1052 10.9981 21.9213 11.9535 21.5852 12.8345C21.5154 13.0175 21.4804 13.109 21.4646 13.1804C21.4489 13.2512 21.4428 13.301 21.4411 13.3735C21.4394 13.4466 21.4493 13.5272 21.4692 13.6883L21.8717 16.9585C21.9153 17.3125 21.9371 17.4895 21.8782 17.6182C21.8266 17.731 21.735 17.8205 21.6211 17.8695C21.4911 17.9254 21.3146 17.8995 20.9617 17.8478L17.7765 17.3809C17.6101 17.3565 17.527 17.3443 17.4512 17.3448C17.3763 17.3452 17.3245 17.3507 17.2511 17.3661C17.177 17.3817 17.0823 17.4172 16.893 17.4881C16.0097 17.819 15.0524 18 14.0526 18C13.6344 18 13.2237 17.9683 12.8227 17.9073M7.63158 22C10.5965 22 13 19.5376 13 16.5C13 13.4624 10.5965 11 7.63158 11C4.66668 11 2.26316 13.4624 2.26316 16.5C2.26316 17.1106 2.36028 17.6979 2.53955 18.2467C2.61533 18.4787 2.65322 18.5947 2.66566 18.6739C2.67864 18.7567 2.68091 18.8031 2.67608 18.8867C2.67145 18.9668 2.65141 19.0573 2.61134 19.2383L2 22L4.9948 21.591C5.15827 21.5687 5.24 21.5575 5.31137 21.558C5.38652 21.5585 5.42641 21.5626 5.50011 21.5773C5.5701 21.5912 5.67416 21.6279 5.88227 21.7014C6.43059 21.8949 7.01911 22 7.63158 22Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            ,
        },
        {
            title: "Deliver instant answers",
            description:
                "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
            icon: <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_14282_810)">
                    <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
                    <rect x="2.5" y="1.5" width="47" height="47" rx="9.5" stroke="#EAECF0" />
                    <path d="M27 15L18.0935 25.6879C17.7446 26.1064 17.5702 26.3157 17.5676 26.4925C17.5653 26.6461 17.6337 26.7923 17.7533 26.8889C17.8907 27 18.1632 27 18.708 27H26L25 35L33.9065 24.3121C34.2554 23.8936 34.4298 23.6843 34.4324 23.5075C34.4347 23.3539 34.3663 23.2077 34.2467 23.1111C34.1093 23 33.8368 23 33.292 23H26L27 15Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <filter id="filter0_d_14282_810" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14282_810" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14282_810" result="shape" />
                    </filter>
                </defs>
            </svg>
            ,
        },
        {
            title: "Manage your team with reports",
            description:
                "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks.",
            icon: <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_14282_818)">
                    <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
                    <rect x="2.5" y="1.5" width="47" height="47" rx="9.5" stroke="#EAECF0" />
                    <path d="M25 16H21.8C20.1198 16 19.2798 16 18.638 16.327C18.0735 16.6146 17.6146 17.0735 17.327 17.638C17 18.2798 17 19.1198 17 20.8V29.2C17 30.8802 17 31.7202 17.327 32.362C17.6146 32.9265 18.0735 33.3854 18.638 33.673C19.2798 34 20.1198 34 21.8 34H30.2C31.8802 34 32.7202 34 33.362 33.673C33.9265 33.3854 34.3854 32.9265 34.673 32.362C35 31.7202 35 30.8802 35 29.2V26M26 21H30V25M29.5 16.5V15M33.4393 17.5607L34.5 16.5M34.5103 21.5H36.0103M17 26.3471C17.6519 26.4478 18.3199 26.5 19 26.5C23.3864 26.5 27.2653 24.3276 29.6197 21" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <filter id="filter0_d_14282_818" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14282_818" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14282_818" result="shape" />
                    </filter>
                </defs>
            </svg>
            ,
        },
        {
            title: "Connect with customers",
            description:
                "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
            icon: <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_14282_818)">
                    <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
                    <rect x="2.5" y="1.5" width="47" height="47" rx="9.5" stroke="#EAECF0" />
                    <path d="M25 16H21.8C20.1198 16 19.2798 16 18.638 16.327C18.0735 16.6146 17.6146 17.0735 17.327 17.638C17 18.2798 17 19.1198 17 20.8V29.2C17 30.8802 17 31.7202 17.327 32.362C17.6146 32.9265 18.0735 33.3854 18.638 33.673C19.2798 34 20.1198 34 21.8 34H30.2C31.8802 34 32.7202 34 33.362 33.673C33.9265 33.3854 34.3854 32.9265 34.673 32.362C35 31.7202 35 30.8802 35 29.2V26M26 21H30V25M29.5 16.5V15M33.4393 17.5607L34.5 16.5M34.5103 21.5H36.0103M17 26.3471C17.6519 26.4478 18.3199 26.5 19 26.5C23.3864 26.5 27.2653 24.3276 29.6197 21" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <filter id="filter0_d_14282_818" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14282_818" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14282_818" result="shape" />
                    </filter>
                </defs>
            </svg>
            ,
        },
        {
            title: "Connect the tools you already use",
            description:
                "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
            icon: <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_14282_818)">
                    <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
                    <rect x="2.5" y="1.5" width="47" height="47" rx="9.5" stroke="#EAECF0" />
                    <path d="M25 16H21.8C20.1198 16 19.2798 16 18.638 16.327C18.0735 16.6146 17.6146 17.0735 17.327 17.638C17 18.2798 17 19.1198 17 20.8V29.2C17 30.8802 17 31.7202 17.327 32.362C17.6146 32.9265 18.0735 33.3854 18.638 33.673C19.2798 34 20.1198 34 21.8 34H30.2C31.8802 34 32.7202 34 33.362 33.673C33.9265 33.3854 34.3854 32.9265 34.673 32.362C35 31.7202 35 30.8802 35 29.2V26M26 21H30V25M29.5 16.5V15M33.4393 17.5607L34.5 16.5M34.5103 21.5H36.0103M17 26.3471C17.6519 26.4478 18.3199 26.5 19 26.5C23.3864 26.5 27.2653 24.3276 29.6197 21" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <filter id="filter0_d_14282_818" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14282_818" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14282_818" result="shape" />
                    </filter>
                </defs>
            </svg>
            ,
        },
        {
            title: "Our people make the difference",
            description:
                "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
            icon: <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_14282_818)">
                    <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
                    <rect x="2.5" y="1.5" width="47" height="47" rx="9.5" stroke="#EAECF0" />
                    <path d="M25 16H21.8C20.1198 16 19.2798 16 18.638 16.327C18.0735 16.6146 17.6146 17.0735 17.327 17.638C17 18.2798 17 19.1198 17 20.8V29.2C17 30.8802 17 31.7202 17.327 32.362C17.6146 32.9265 18.0735 33.3854 18.638 33.673C19.2798 34 20.1198 34 21.8 34H30.2C31.8802 34 32.7202 34 33.362 33.673C33.9265 33.3854 34.3854 32.9265 34.673 32.362C35 31.7202 35 30.8802 35 29.2V26M26 21H30V25M29.5 16.5V15M33.4393 17.5607L34.5 16.5M34.5103 21.5H36.0103M17 26.3471C17.6519 26.4478 18.3199 26.5 19 26.5C23.3864 26.5 27.2653 24.3276 29.6197 21" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <filter id="filter0_d_14282_818" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14282_818" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14282_818" result="shape" />
                    </filter>
                </defs>
            </svg>
            ,
        },
    ];

    return (
        <section className="bg-gray-10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-orange-600 tracking-wide uppercase">
                        Features
                    </h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Analytics that feels like it’s from the future
                    </p>
                    <p className="mt-4 text-lg text-gray-600">
                        Powerful, self-serve product and growth analytics to help you
                        convert, engage, and retain more users. Trusted by over 4,000
                        startups.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center bg-gray-10 p-6 shadow rounded-lg"
                        >
                            <div className="text-4xl text-indigo-600 mb-4">{feature.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-900">
                                {feature.title}
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
