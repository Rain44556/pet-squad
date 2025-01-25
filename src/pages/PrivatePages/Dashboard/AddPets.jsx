import React from 'react';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { Formik } from 'formik';
import Select from 'react-select'
import Swal from "sweetalert2";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_API = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddPets = () => {
  const axiosPublic = useAxiosPublic();
const axiosSecure = useAxiosSecure();

    const petCategories = [
      { value: 'cat', label: 'Cat' },
        { value: 'dog', label: 'Dog' },
        { value: 'bird', label: 'Bird' },
        { value: 'panda', label: 'Panda' },
        { value: 'rabbit', label: 'Rabbit'},
        { value: 'fish', label: 'Fish' },
        { value: 'hamster', label: 'Hamster' },
      ]



    return (
        <div className="max-w-4xl mx-auto p-10 bg-primary-foreground shadow-lg rounded-lg">
        <SectionTitle
        title={"Add Your Pet"}
        ></SectionTitle>
        <Formik
          initialValues={{
            image: null,
            name: "",
            age: "",
            category: "",
            location: "",
            shortDescription: "",
            longDescription: "",
          }}

          // errors handling
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Pet name is required";
            }
            if (!values.age) {
              errors.age = "Pet age is required";
            }
            if (!values.category) {
              errors.category = "Pet category is required";
            }
            if (!values.location) {
              errors.location = "Location is required";
            }
            // if(values.shortDescription.length > 30){
            //   errors.shortDescription = "Your note is too long! Please shorten it to at least 30 characters!";
            // }else if(values.shortDescription.length < 30){
            //   errors.shortDescription = "Your note is too short! Please write at least 30 characters!";
            // }
            return errors;
          }}

          onSubmit= {async (values, { resetForm }) => {

                const formData = new FormData();
                formData.append('image', values.image);

                const res = await axiosPublic.post(image_hosting_API, formData, {
                    headers:{
                        'content-type': 'multipart/form-data'
                    }
                });
                // console.log(res.data);

            if(res.data.success){
              const petData = {
                image: res.data.data.url,
                name: values.name,
                age: values.age,
                category: values.category,
                location: values.location,
                "short description": values.shortDescription,
                "long description": values.longDescription,
                "date and time": new Date(res.data.data.time * 1000).toLocaleString(),
                 adopted: "false"
              }

              const pets = await axiosSecure.post('/pets', petData);
              console.log(pets);
              resetForm();
              if(pets.data.insertedId){
                Swal.fire(`Your ${values.name} has been added successfully!`);
              }
            }
          }}
        >

          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            isSubmitting,
          }) => (

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Pet Image
                </label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange=
                  {(e)=> setFieldValue('image', e.target.files[0])}
                  className="w-full mt-1 border border-gray-300 p-2 rounded-lg"
                />
                {values.image && (
                  <p className="text-sm text-green-600 mt-2">
                    Image selected: {values.image.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Enter pet name"
                  className="w-full mt-1 border border-gray-300 p-2 rounded-lg"
                />
                {errors.name && touched.name && (
                  <p className="text-sm text-red-600 mt-1">{errors.name}</p>
                )}
              </div>
  
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Age
                </label>
                <input
                  type="text"
                  name="age"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.age}
                  placeholder="Enter pet age"
                  className="w-full mt-1 border border-gray-300 p-2 rounded-lg"
                />
                {errors.age && touched.age && (
                  <p className="text-sm text-red-600 mt-1">{errors.age}</p>
                )}
              </div>
    
              <div>
                <label className="text-sm font-medium text-gray-700">
                Category
                </label>
                <Select
                  options={petCategories}
                  onChange={(selectedOption)=>setFieldValue("category", selectedOption?.value || "")}
                  onBlur={handleBlur}
                  className="w-full mt-1 border border-gray-300 p-2 rounded-lg"
                >
                </Select>
                {errors.category && touched.category && (
                  <p className="text-sm text-red-600 mt-1">{errors.category}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                Location
                </label>
                <input
                  type="text"
                  name="location"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.location}
                  placeholder="Enter location"
                  className="w-full mt-1 border border-gray-300 p-2 rounded-lg"
                />
                {errors.location && touched.location && (
                  <p className="text-sm text-red-600 mt-1">{errors.location}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Short Description
                </label>
                <input
                  type="text"
                  name="shortDescription"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.shortDescription}
                  placeholder="A short note about the pet"
                  className="w-full mt-1 border border-gray-300 p-2 rounded-lg"
                />
                {errors.shortDescription && (
                  <p className="text-sm text-red-600 mt-1">{errors.shortDescription}</p>
                )}
              </div>
    
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Long Description
                </label>
                <textarea
                  name="longDescription"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.longDescription}
                  placeholder="Detailed information about the pet"
                  className="w-full mt-1 border border-gray-300 p-2 rounded-lg h-28"
                ></textarea>
              </div>
    
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-colorPrimary text-white p-3 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
};

export default AddPets;
