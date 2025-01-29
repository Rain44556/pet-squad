import React from 'react';

const SectionTitle = ({subTitle, title}) => {
    return (
        <div className='my-8 text-center'>
                        <h2 className="text-4xl mb-4 font-bold  text-colorPrimary">{title}</h2>
            <p className=" text-3xl font-extrabold  font-headingFont text-colorSecondary">{subTitle}</p>
        </div>
    );
};

export default SectionTitle;