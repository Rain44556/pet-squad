import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { Card } from '@/components/ui/card';
import React from 'react';

const Testimonials = () => {
    return (
        <div className="bg-purple-50 py-16 px-4 mb-10">
          <div className="container mx-auto max-w-5xl text-center">

            <SectionTitle
            title={"What People Are Saying"}
            subTitle={"Hear from families who have opened their hearts and homes to pets in need."}
            ></SectionTitle>
      
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 shadow-lg rounded-xl">
                <p className="text-colorPrimary italic mb-4">
                  "Adopting from this site was so easy, and now we have the sweetest dog ever!"
                </p>
                <p className="font-semibold text-colorSecondary">- Sarah L.</p>
              </Card>
              <Card className="p-6 shadow-lg rounded-xl">
                <p className="italic mb-4 text-colorPrimary">
                  "We found our perfect cat companion thanks to this amazing platform."
                </p>
                <p className="font-semibold text-colorSecondary">- John D.</p>
              </Card>
              <Card className="p-6 shadow-lg rounded-xl">
                <p className="text-colorPrimary italic mb-4">
                  "Thanks to this site, we now have a playful puppy who brightens our days."
                </p>
                <p className="font-semibold text-colorSecondary">- Emily R.</p>
              </Card>
            </div>
          </div>
        </div>
      );
};

export default Testimonials;