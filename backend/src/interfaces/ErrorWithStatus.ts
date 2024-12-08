export default interface ErrorWithStatus extends Error{
    status?:number
}