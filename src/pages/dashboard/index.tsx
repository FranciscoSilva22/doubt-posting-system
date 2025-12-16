import { PlusIcon } from "lucide-react";
import { Content } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

const DashboardPage = () => {
  return (
    <Content>
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
                        <PlusIcon />
                        Entrar em Canal
                    </button>
                </div>
            </div>

            <button className="button-signout">
                <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
                Sair
            </button>
        </nav>
        <main></main>
        <aside></aside>
    </Content>
  );
};

export default DashboardPage;
