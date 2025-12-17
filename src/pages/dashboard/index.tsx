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

        <aside>
            <div className="section">
                <h2 className="section-title">Estatísticas do Canal</h2>

                <div className="flex-row section-container">
                    <div className="card text-[#4F46E5] bg-[#EEF2FF] border-[#E0E7FF]">
                        <span className="value">124</span>
                        <span className="label">Dúvidas Totais</span>
                    </div>

                    <div className="card text-[#16A34A] bg-[#F0FDF4] border-[#DCFCE7]">
                        <span className="value">85%</span>
                        <span className="label">Resolvidas</span>
                    </div>
                </div>
            </div>

            <div className="section">
                <h2 className="section-title">Tópicos Recorrentes</h2>

                <div className="section-container flex-col">
                    <div className="topic">
                        <span className="label">#Derivadas</span>
                        <span className="count">
                            <FontAwesomeIcon icon="fa-solid fa-rocket" />
                            42
                        </span>
                    </div>

                    <div className="topic">
                        <span className="label">#Integral</span>
                        <span className="count">
                            <FontAwesomeIcon icon="fa-solid fa-rocket" />
                            28
                        </span>
                    </div>

                    <div className="topic">
                        <span className="label">#Limite</span>
                        <span className="count">
                            <FontAwesomeIcon icon="fa-solid fa-rocket" />
                            12
                        </span>
                    </div>
                </div>
            </div>

            <div className="section">
                <h2 className="section-title">Administradores</h2>

                <div className="section-container flex-col">
                    <div className="adm">
                        <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?_gl=1*jzmqd*_ga*MTU3ODA1MjE4OS4xNzY1OTE4NTEx*_ga_8JE65Q40S6*czE3NjU5OTgyNjMkbzIkZzEkdDE3NjU5OTgyNzMkajUwJGwwJGgw" />
                        <div>
                            <span className="adm-name">Roberto Almeida</span>
                            <span className="adm-role">Professor Responsável</span>
                        </div>
                    </div>

                    <div className="adm">
                        <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?_gl=1*1a9ffxx*_ga*MTU3ODA1MjE4OS4xNzY1OTE4NTEx*_ga_8JE65Q40S6*czE3NjU5OTgyNjMkbzIkZzEkdDE3NjU5OTgzODckajUyJGwwJGgw" />
                        <div>
                            <span className="adm-name">Júlia Martins</span>
                            <span className="adm-role">Monitora</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    </Content>
  );
};

export default DashboardPage;
