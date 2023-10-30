import Search from "./search";
import Premium from "./premium";
import Topics from "./topics";

export default function RightBar() {
    return(
        <aside className="w-[350px] mr-2.5">
            <Search />
            <Premium />
            <Topics />
        </aside>
    )
}