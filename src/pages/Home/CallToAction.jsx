import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from "@/components/SectionTitle/SectionTitle";


const CallToAction = () => {
    const data = [
        {
            "id": 1,
            "name": "Happy dog",
            "description": "Adopting Max was the best decision we ever made!",
            "image": "/images/cat1.jpg"
        },
        {
            "id": 2,
            "name": "Content cat",
            "description": "Luna has brought so much joy to our family!",
            "image": "/images/cat1.jpg"
        },
        {
            "id": 3,
            "name": "Playful puppy",
            "description": "Charlie is the perfect addition to our lives!",
            "image": "/images/cat1.jpg"
        },

    ]
    return (
        <section className=" my-10 py-16 px-4 text-center">
            <div className="mx-auto max-w-5xl">
                <SectionTitle
                    title={"Change a Life Today, Adopt a Friend for Life"}
                    subTitle={"Every pet deserves a loving home. By adopting, you not only give a pet a second chance but also gain a loyal companion who will bring joy to your life."}
                ></SectionTitle>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Button className="font-headingFont px-6 py-3 text-lg font-semibold bg-colorSecondary text-white rounded-2xl shadow-lg">
                        Start Your Journey
                    </Button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    
                    {data.map ((action)=>
                    <Card className="overflow-hidden rounded-2xl shadow-md">
                        <img
                            src={action.image}
                            alt={action.name}
                            className="w-full h-48 object-cover"
                        />
                        <CardContent>
                            <p className="text-colorPrimary font-medium text-lg">
                               {action.description}
                            </p>
                        </CardContent>
                    </Card>)}
                </div>
            </div>
        </section>
    );
};

export default CallToAction;