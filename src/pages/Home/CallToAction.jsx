import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";


const CallToAction = () => {
    const data = [
        {
            "id": 1,
            "name": "Happy dog",
            "description": "Adopting Max was the best decision we ever made!",
            "image": "https://i.ibb.co.com/MxMFfwQP/dog.jpg"
        },
        {
            "id": 2,
            "name": "Content cat",
            "description": "Luna has brought so much joy to our family!",
            "image": "https://i.ibb.co.com/KjVwfkRX/cat.jpg"
        },
        {
            "id": 3,
            "name": "Playful puppy",
            "description": "Charlie is the perfect addition to our lives!",
            "image": "https://i.ibb.co.com/KjHGfwGZ/puppy.jpg"
        },

    ]
    return (
        <div className=" mb-10 px-4 text-center">
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
                 <Link to="/petListing">   <Button className="font-headingFont text-md px-10 py-6 font-extrabold bg-colorPrimary rounded-2xl shadow-lg">
                        Start Your Journey
                    </Button></Link>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    
                    {data.map ((action)=>
                    <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-2xl bg-purple-200 hover:bg-yellow-50">
                        <img
                            src={action.image}
                            alt={action.name}
                            className="w-full h-48 object-cover"
                        />
                        <CardContent>
                            <p className="text-colorPrimary font-medium text-lg mt-5">
                               {action.description}
                            </p>
                        </CardContent>
                    </Card>)}
                </div>
            </div>
        </div>
    );
};

export default CallToAction;