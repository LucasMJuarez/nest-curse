import { IsString, MinLength } from "class-validator";

export class CreateBrandDto { // aca va la info que espero que me manden mediante el Post
    @IsString()
    @MinLength(1)
    name: string;
}
