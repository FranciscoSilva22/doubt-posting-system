import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Content } from "./styles";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { useState } from "react";

const LoginPage: React.FC = () => {
    const [tabValue, setTabValue] = useState("student");

    return (
        <Content>
            <div className="login-card">
                <div className="bg-linear-310 from-[#4F46E5] to-[#9333EA]">
                    <div className="icon-container">
                        <FontAwesomeIcon className="text-[24px] text-white" icon="graduation-cap" />
                    </div>

                    <h1 className="title">EduDúvidas</h1>
                    <p className="text-info">Plataforma colaborativa para resolução de dúvidas acadêmicas. Conecte-se, aprenda e cresça junto com sua comunidade.</p>

                    <div className="list">
                        <div className="item">
                            <div className="icon-container small">
                                <FontAwesomeIcon className="text-[14px] text-white" icon="check" />
                            </div>
                            Discussões em tempo real
                        </div>

                        <div className="item">
                            <div className="icon-container small">
                                <FontAwesomeIcon className="text-[14px] text-white" icon="check" />
                            </div>
                            Gestão inteligente de canais
                        </div>

                        <div className="item">
                            <div className="icon-container small">
                                <FontAwesomeIcon className="text-[14px] text-white" icon="check" />
                            </div>
                            Acompanhamento de progresso
                        </div>
                    </div>

                    <p className="footer-text">© 2024 EduDúvidas • Todos os direitos reservados</p>
                </div>

                <div className="form-box">
                    <h2 className="form-title">Bem-vindo</h2>
                    <span className="form-text">Faça login para continuar</span>

                    <div className="form">
                        <Tabs defaultValue="student" onValueChange={value => setTabValue(value)}>
                            <TabsList className="w-full mb-6">
                                <TabsTrigger value="student" className={tabValue == "student" ? "text-[#4F46E5]" : "text-[#4B5563]"}>
                                    <FontAwesomeIcon icon="user-graduate" />
                                    Aluno
                                </TabsTrigger>
                                <TabsTrigger value="teacher" className={tabValue == "teacher" ? "text-[#4F46E5]" : "text-[#4B5563]"}>
                                    <FontAwesomeIcon icon="chalkboard-user" />
                                    Professor
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="student">
                               <div className="grid w-full items-center gap-3 mb-5">
                                    <Label htmlFor="ra">Registro Acadêmico</Label>
                                    <InputGroup>
                                        <InputGroupInput
                                            autoComplete="off"
                                            type="text"
                                            id="ra"
                                            placeholder="Digite seu RA"
                                        />
                                        <InputGroupAddon>
                                            <FontAwesomeIcon icon="id-card" />
                                        </InputGroupAddon>
                                    </InputGroup>
                                </div> 
                            </TabsContent>
                            <TabsContent value="teacher">
                                <div className="grid w-full items-center gap-3 mb-5">
                                    <Label htmlFor="matricula">Matrícula</Label>
                                    <InputGroup>
                                        <InputGroupInput
                                            autoComplete="off"
                                            type="text"
                                            id="matricula"
                                            placeholder="Digite sua matrícula"
                                        />
                                        <InputGroupAddon>
                                            <FontAwesomeIcon icon="id-card" />
                                        </InputGroupAddon>
                                    </InputGroup>
                                </div>
                            </TabsContent>
                        </Tabs>

                        <div className="grid w-full items-center gap-3 mb-5">
                            <Label htmlFor="password">Senha</Label>
                            <InputGroup>
                                <InputGroupInput
                                    autoComplete="off"
                                    type="password"
                                    id="password"
                                    placeholder="Informe sua senha"
                                />
                                <InputGroupAddon>
                                    <FontAwesomeIcon icon="lock" />
                                </InputGroupAddon>
                            </InputGroup>
                        </div>

                        <div className="flex flex-row gap-6 justify-between mb-5">
                            <div className="flex items-center gap-3">
                                <Checkbox
                                    id="remember"
                                    className="data-[state=checked]:border-[#4F46E5] data-[state=checked]:bg-[#4F46E5] data-[state=checked]:text-white dark:data-[state=checked]:border-[#4F46E5] dark:data-[state=checked]:bg-[#4F46E5]"
                                />
                                <Label htmlFor="remember">Lembre de mim</Label>
                            </div>

                            <a>Esqueceu a senha</a>
                        </div>

                        <button className="button-submit bg-linear-0 from-[#4F46E5] to-[#9333EA]">Entrar no Sistema</button>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default LoginPage;