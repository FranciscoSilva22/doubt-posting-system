import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AsideContent: React.FC = () => {
    return (
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
                            <FontAwesomeIcon icon="rocket" />
                            42
                        </span>
                    </div>

                    <div className="topic">
                        <span className="label">#Integral</span>
                        <span className="count">
                            <FontAwesomeIcon icon="rocket" />
                            28
                        </span>
                    </div>

                    <div className="topic">
                        <span className="label">#Limite</span>
                        <span className="count">
                            <FontAwesomeIcon icon="rocket" />
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
    );
}

export default AsideContent;