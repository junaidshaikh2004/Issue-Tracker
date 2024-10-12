import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createIssueSchema} from '../../validationSchemas'

// const createIssueSchema = z.object({
//     title: z.string().min(1,'Title is required').max(255),         // Fixed spelling
//     description: z.string().min(1,'Description is required')             // Fixed spelling
// });

export async function POST(request: NextRequest){ 
   const body = await request.json();
   const validation = createIssueSchema.safeParse(body);
   
   if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status: 400 });
   }

   const newIssue = await prisma.issue.create({
     data: { title: body.title, description: body.description }  // Fixed spelling
   });

   return NextResponse.json(newIssue, { status: 201 });
}