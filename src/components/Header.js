import { Nav } from "./Nav";
function Header() {
    return (
        <>
            <header id="header" className="text-center p-3">
                <h1 className="mb-3">Sodati</h1>
                <Nav />
            </header>
        </>
    );
}
export { Header };