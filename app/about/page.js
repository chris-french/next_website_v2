import { BodyBox } from "../components/BodyBox"
import { BodyTitle } from "../components/BodyTitle"

export default function About() {
    return (
        <>
            <BodyTitle>About</BodyTitle>
            <BodyBox>
                Professional programmer with an emphasis on full-stack development and data engineering using Python, SQL, NodeJS, and React. 
            </BodyBox>
            <BodyBox>
                In addition to my professional pursuits, I enjoy making games using Unreal Engine 5 and Godot 4.x.<br/><br/>Nothing is finished, but, for example, this past year I've been working on several Godot games in C# and a small game engine written in C++ for the Vulkan API.
            </BodyBox>
            <BodyBox>
                I also write science fiction, dabble in generative AI, and spend time painting with oils and drawing with charcoal.
            </BodyBox>
            <BodyBox>
                In a previous lifetime, I was an academic. <br /><br />I still enjoy thinking and reading about the history and foundations of science (especially the history of cybernetics and the social sciences).
            </BodyBox>
        </>
    )
  }