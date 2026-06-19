import TitleBlock from "../components/titleBlock"
import ProjectsSection from "../components/projectsSection"
import ExtraProjectItem from "../components/extraProjectItem"

export default function Projects() {
    return ( 
    <>
        <div className="grey-background">
            <TitleBlock title="Projects" />
            <ProjectsSection />
            <br />
            <ExtraProjectItem 
                title="Linked Lists (C++)" 
                desc="For this C++ project, I implemented both doubly and singly linked list classes utilizing generic types. The singly linked list allows for basic operations such as insertion, deletion, and traversal, while the doubly linked list extends functionality by enabling traversal in both directions."
                skills={["This project highlights my ability to manipulate pointers, manage dynamic memory, and design efficient algorithms for common operations."]}
                link="https://github.com/ipaulhamus/Linked-Lists"
            />
            <ExtraProjectItem 
                title="Chat Room" 
                desc="A locally hosted chatroom application that utilizes WebSockets for persistent bidirectional communication between the server and connected clients. 
                    The application has built-in commands that the user can use to customize their application experience and view helpful information.
                    The application has one chatroom that is automatically joined, and the server this room is hosted on is an express server using the 'concurrently' package."
                skills={["This project shows a proficient background in using Node.js and an understanding of continuous communication through web sockets."]}
                link="https://github.com/ipaulhamus/Chat-Room"
            />
        </div>
    </>
    )
}