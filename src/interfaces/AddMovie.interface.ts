import { IMovie } from "./Movie.interface";

export interface IAddMovie {
    onAddMovie:(movie:IMovie)=>void;
}