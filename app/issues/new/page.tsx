"use client"
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, TextField } from '@radix-ui/themes'
import React from 'react'
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
   
   return (
     <form className='max-w-xl space-y-2' 
        onSubmit={handleSubmit(async (data) => {
            await axios.post('/api/issues', data);
            router.push('/issues')
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
   )
}

export default NewIssuePage;