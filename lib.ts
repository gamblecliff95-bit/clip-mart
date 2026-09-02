import { PrismaClient } from "@prisma/client"; import Stripe from "stripe";
export const prisma=globalThis.prisma??new PrismaClient(); if(process.env.NODE_ENV!=="production")globalThis.prisma=prisma;
export const stripe=new Stripe(process.env.STRIPE_SECRET_KEY!,{apiVersion:"2025-07-30.basil"});
export const platformFee=(c:number)=>Math.round(c*Number(process.env.PLATFORM_FEE_PERCENT||"20")/100);