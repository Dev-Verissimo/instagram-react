import Esquerda from "../Esquerda/Esquerda";
import FundoMobile from "../FundoMobile/Fundo-mobile";
import Sidebar from "../Sidebar/Sidebar";


export default function Main() {
    return (
        <div className="corpo">
            <Esquerda />
            <Sidebar />
            <FundoMobile />
        </div>

    )
}