

export default function Post({ user, img, numeroDeCurtidas, curtidoPor }) {
    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={'assets/img/' + user + '.svg'} alt='' />
                    {user}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div className="conteudo">
                <img src={"assets/img/" + img + ".svg"} alt=''/>
            </div>
            <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img src={"assets/img/" + curtidoPor +".svg"} alt='' />
                  <div class="texto">
                    Curtido por <strong>{curtidoPor}</strong> e <strong>outras {numeroDeCurtidas} pessoas</strong>
                  </div>
                </div>
              </div>
        </div>
    )
}