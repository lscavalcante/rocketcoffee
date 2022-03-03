import Header from "../header";

export default function Template({children}: any) {
    return (
        <Header>
           {children}
        </Header>
    )
}