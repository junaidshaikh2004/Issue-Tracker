"use client"

import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-2' >
        <TextField.Root placeholder='Title' >
        </TextField.Root>
        <TextArea className='' placeholder="Reply to comment…" />
         <Button>Submit</Button>
    </div>
  )
}

export default NewIssuePage