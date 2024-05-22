import { iPost } from "./posts"

export interface iJsonContent {

    posts: iPost[]
    total: number
    skip: number
    limit: number

}
