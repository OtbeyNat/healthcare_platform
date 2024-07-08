"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
// import { createUser } from "@/lib/actions/patient.actions";
import { UserFormValidation } from "@/lib/validation";

import "react-phone-number-input/style.css";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";
 
export function PatientForm() {
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    })
    
    const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
        setIsLoading(true);
        try {
            const user = {
                name: values.name,
                email: values.email,
                phone: values.phone,
            };
        
            // const newUser = await createUser(user);
            // if (newUser) {
            //     router.push(`/patients/${newUser.$id}/register`);
            // }
        } catch (error) {
            console.log(error);
        }
        console.log(values)
        setIsLoading(false);
    }

    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
            <h1>Hi there 👋</h1>
            <p className="text-dark-700">Schedule your first appointment</p>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="johndoe@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone number"
          placeholder="(555) 123-4567"
        />
        
        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
    )

}

export default PatientForm