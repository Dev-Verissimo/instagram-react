import Sugestao from "../Sugestao/Sugestao"

export default function SugestaoContainer() {
    const users = [
        'bad.vibes.memes',
        'chibirdart',
        'razoesparaacreditar',
        'adorable_animals',
        'smallcutecats'
    ]
    return (
        <div className="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            {
                users.map(user =>  <Sugestao user={user} />)
            }
        </div>
    )
}