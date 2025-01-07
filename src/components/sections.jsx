import React from "react";

const Testimonial = ({ htmlData }) => {
    return (
        <section className="bg-gray-50 py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {htmlData?.data}
            </div>
        </section>
    );
};

export default Testimonial;
