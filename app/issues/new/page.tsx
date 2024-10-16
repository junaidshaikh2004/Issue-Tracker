"use client"
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, Callout, Text, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from "@/app/validationSchemas";
import { z } from "zod";

type IssueForm = z.infer<typeof createIssueSchema>;
 
const NewIssuePage = () => {

   const router =  useRouter();
   const {register, control, handleSubmit, formState: {errors}} = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema)
   })
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
        {errors.title && <Text color="red" as="p" >{errors.title.message}</Text>}
        <Controller
         name="description" 
         control={control}
         render={({ field }) => <SimpleMDE placeholder="Enter description…" {...field} />}
        />
        {errors.description && <Text color="red" as="p" >{errors.description.message}</Text>}
         <Button>Submit</Button>
     </form>
    </div>
   )
}

export default NewIssuePage;