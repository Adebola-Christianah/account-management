import express from "express";
declare global {
    namespace Express {
      interface Request {
        user?: Record<string,any>
        roles?: Record<string,any>
        role?: Record<number,any>
        useUnifiedTopology?:Record<boolean,any>
      }
    }
  }