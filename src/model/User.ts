import { model, Schema } from "mongoose";
interface Iuser{
    username:string;
    roles:number;
    password:string;
    refreshToken:string;
}

const userSchema = new Schema<Iuser>({
    username: {
        type: String,
        required: true
    },
    roles: {
        User: {
            type: Number,
            default: 2001
        },
        Editor: Number,
        Admin: Number
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: String
});
export default model<Iuser>('User',userSchema)