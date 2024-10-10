"use client"
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, TextField } from '@radix-ui/themes'
import React from 'react'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-2' >
        <TextField.Root placeholder='Title' >
        </TextField.Root>
        <SimpleMDE className='' placeholder="Reply to comment…" />
         <Button>Submit</Button>
    </div>
  )
}

export default NewIssuePage