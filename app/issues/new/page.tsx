"use client"
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, Callout, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface IssueForm {
    title: string;            // Fixed spelling
    description: string;      // Fixed spelling
}

const NewIssuePage = () => {
   const router =  useRouter();
   const {register, control, handleSubmit} = useForm<IssueForm>()
   const [error, setError] = useState('')
   return (
    <div className="max-w-xl " >
        {error && 
        <Callout.Root color="red" className="mb-5" >
             {error} 
        </Callout.Root>}
     <form className='space-y-2' 
        onSubmit={handleSubmit(async (data) => {
            try {
                await axios.post('/api/issues', data);
                router.push('/issues')
                
            } catch (error) {
                setError("An expected error occur")
            }
            
        })}
     >
        <TextField.Root placeholder='Title' {...register('title')}>  {/* Fixed spelling */}
        </TextField.Root>
        <Controller
         name="description" 
         control={control}
         render={({ field }) => <SimpleMDE placeholder="Enter description…" {...field} />}
        />
        
         <Button>Submit</Button>
     </form>
    </div>
   )
}

export default NewIssuePage;