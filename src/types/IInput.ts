export interface IInput{
    placeholder:string;
    type?:string;
    className?:string;
    value?:string
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
