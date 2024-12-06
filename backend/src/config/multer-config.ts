import multer, { StorageEngine } from 'multer'; 
import { nanoid } from 'nanoid'; 
import path from 'path'; 
import fs from 'fs'; 
import { Request } from 'express'; 

const tempDirectory: string = path.resolve('public', 'temp');

if (!fs.existsSync(tempDirectory)) {
    fs.mkdirSync(tempDirectory, { recursive: true });
}

const storage: StorageEngine = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
        cb(null, tempDirectory); 
    },
    filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
        const id = nanoid();
        const ext = path.extname(file.originalname); 
        cb(null, `${file.fieldname}-${id}${ext}`);  
    }
});

const upload = multer({ storage });

export { upload };
