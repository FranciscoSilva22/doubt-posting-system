import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AsideNavigation: React.FC = () => {
    return (
        <nav>
            <div>
                <div className="icon-container">
                    <img src="assets/icon.svg" />
                </div>

                <div className="profile-container">
                    <img src="https://images.pexels.com/photos/5812311/pexels-photo-5812311.jpeg?_gl=1*fsbfiy*_ga*MTU3ODA1MjE4OS4xNzY1OTE4NTEx*_ga_8JE65Q40S6*czE3NjU5MTg1MTEkbzEkZzEkdDE3NjU5MTg1MzAkajQxJGwwJGgw" />
                    <div className="profile-data">
                        <span className="profile-name">Francisco Silva</span>
                        <span className="profile-ra">RA: 123456</span>
                    </div>
                </div>

                <div className="channel-container">
                    <span>Meus canais</span>
                    <ul className="channel-list">
                        <li className="channel-name">Cálculo I - Turma A</li>
                        <li className="channel-name">Física Geral II</li>
                        <li className="channel-name">Algoritmos</li>
                    </ul>

                    <button>
                        <FontAwesomeIcon icon="plus" />
                        Entrar em Canal
                    </button>
                </div>
            </div>

            <button className="button-signout">
                <FontAwesomeIcon icon="arrow-right-from-bracket" />
                Sair
            </button>
        </nav>
    );
};

export default AsideNavigation;