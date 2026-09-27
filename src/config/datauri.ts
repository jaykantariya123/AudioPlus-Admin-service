import DataUriParser from "datauri/parser.js";
import part from "path";

const getBuffer = (file: any) =>{
    const parser = new DataUriParser();

    const extName = part.extname(file.originalname).toString();

    return parser.format(extName, file.buffer);
}

export default getBuffer;