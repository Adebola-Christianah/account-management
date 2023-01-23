
import {v4 as uuid4} from "uuid"
let  myuuid=uuid4()
import {format} from 'date-fns'
import fs from "fs"
import fsPromises from 'fs/promises';
import path from 'path'
import { Request,Response,NextFunction } from "express";

const logEvent = async (message:string, logName:string) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${myuuid}\t${message}\n`;

    try {
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
        }

        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logName), logItem);
    } catch (err) {
        console.log(err);
    }
}

const logger = (req:Request, res:Response, next:NextFunction) => {
    logEvent(`${req.method}\t${req.headers.origin}\t${req.url}`, 'reqLog.txt');
    console.log(`${req.method} ${req.path}`);
    next();
}

export default {logEvent,logger}
