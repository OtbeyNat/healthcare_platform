"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import { Button } from "./ui/button"
import { AppointmentForm } from "./forms/AppointmentForm"
import { Appointment } from "@/types/appwrite.types"
  
const AppointmentModal = ({
    type,
    patientId,
    userid,
    appointment,
} : {
    type: 'schedule' | 'cancel';
    patientId: string;
    userid: string;
    appointment?: Appointment;
}) => {
    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {/* asChild means Button acts as trigger */}
            <DialogTrigger asChild> 
                <Button variant="ghost" className={`capitalize ${type === 'schedule' && 'text-green-500'}`}>
                    {type}
                </Button>
            </DialogTrigger>
            <DialogContent className="shad-dialog sm:max-w-md">
                <DialogHeader className="mb-4 space-y-3">
                    <DialogTitle className="capitalize">{type} Appointment</DialogTitle>
                    <DialogDescription>
                        Please fill in the following details to {type} an appoointment
                    </DialogDescription>
                </DialogHeader>

                <AppointmentForm
                    userId={userid}
                    patientId={patientId}
                    type={type}
                    appointment={appointment}
                    setOpen={setOpen}
                />
            </DialogContent>
        </Dialog>
    )
}

export default AppointmentModal