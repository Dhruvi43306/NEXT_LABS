// DTO (Data Transfer Object)

//Used for:
// Validation
// Type safety
// Clean request structure
export class CreateAuthDto {
    UserName:string;
    Email:string;
    Password:string
    Role:string
}
