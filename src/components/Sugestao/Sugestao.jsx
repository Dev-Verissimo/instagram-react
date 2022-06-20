

export default function Sugestao({ user }) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={"assets/img/" + user + ".svg"} />
                <div class="texto">
                  <div class="nome">{ user }</div>
                  <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}