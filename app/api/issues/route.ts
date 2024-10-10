import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createIsuueSchema = z.object({
    tittle: z.string().min(1).max(255),
    discription : z.string().min(1)
})

export async function POST(request:NextRequest){ 
   const body = await request.json();
   const validation =  createIsuueSchema.safeParse(body);
   if(!validation.success)
    return NextResponse.json(validation.error.errors,{status:400} )

   const newIssue = prisma.issue.create({
    data: {tittle: body.tittle, discription:body.discription}
   });

   return NextResponse.json(newIssue, {status: 201})

}