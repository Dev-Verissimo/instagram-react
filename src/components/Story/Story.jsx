


export default function Story({titulo}) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={'assets/img/' + titulo + '.svg'} alt="" />
            </div>
            <div className="usuario">
                {titulo} 
            </div>
        </div>
        

    )
}