import React from 'react';

const SectionTitle = ({subTitle, title}) => {
    return (
        <div className='my-8 text-center'>
            <p className=" text-2xl font-extrabold mb-4 font-headingFont text-yellow-400">{subTitle}</p>
            <h2 className="text-4xl font-bold  text-[#827397]">{title}</h2>
        </div>
    );
};

export default SectionTitle;