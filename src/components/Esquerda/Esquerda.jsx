import PostsContainer from "../PostsContainer/PostsContainer";
import StoryContainer from "../StoryContainer/StoryContainer";


export default function Esquerda() {
    return (
        <div className="esquerda">
            <StoryContainer />
            <PostsContainer /> 
        </div>

    )
}