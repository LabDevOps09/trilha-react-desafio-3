import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { useForm } from "react-hook-form";

import { Container, Title, Column, TitleSignup, SubtitleSignup, Row, Wrapper, CriarText } from './styles';

const Signup = () => {
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {
            const { data } = await api.post('/users', {
                nome: formData.nome,
                email: formData.email,
                senha: formData.senha
            });

            if (data.id) {
                navigate('/login'); 
                return;
            }

            alert('Erro ao criar conta');
        } catch (e) {
            alert('Erro ao criar conta');
        }
    };

    console.log('errors', errors);

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>Cadastre-se e comece sua jornada para dominar as principais tecnologias e entrar nas empresas mais desejadas.</Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleSignup>Faça seu cadastro</TitleSignup>
                        <SubtitleSignup>Preencha as informações abaixo para criar sua conta.</SubtitleSignup>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input placeholder="Nome" leftIcon={<MdPerson />} name="nome" control={control} />
                            {errors.nome && <span>Nome é obrigatório</span>}
                            <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
                            {errors.email && <span>E-mail é obrigatório</span>}
                            <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="senha" control={control} />
                            {errors.senha && <span>Senha é obrigatória</span>}
                            <Button title="Cadastrar" variant="secondary" type="submit"/>
                        </form>
                        <Row>
                            <CriarText>Já tem uma conta? <a href="/login">Faça login</a></CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
};

export { Signup };
