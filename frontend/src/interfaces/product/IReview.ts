export default interface IReview {
    id: string;                     // Unique review ID
    productId: string;              // ID of the reviewed product
    userId: string;                 // ID of the reviewer
    rating: number;                 // Rating (e.g., 1-5)
    comment: string;                // Optional comment
    date: Date;                     // Review timestamp
}
