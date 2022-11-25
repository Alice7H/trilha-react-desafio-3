import { useNavigate  } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MdEmail, MdLock } from 'react-icons/md'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper } from './styles';
import { api } from '../../services/api';

const schema = yup.object({
  email: yup.string().email('E-mail inválido').required('O e-mail é obrigatório'),
  password: yup.string().min(5, 'Senha com no mínimo 5 caracteres').required('A senha é obrigatória'),
}).required();

const Login = () => {

  const navigate = useNavigate()

  const { control, handleSubmit, formState: { errors  } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const iconColor = '#8647AD';

  const onSubmit = async (formData) => {
    try{
      const {data} = await api.get(`/users?email=${formData.email}&password=${formData.password}`);

      if(data.length && data[0].id){
          navigate('/feed')
          return
      }
      alert('Usuário ou senha inválido')
    }catch(e){
      //TODO: HOUVE UM ERRO
      console.error(e);
    }
  };

  const handleRegisterAccount = () => {
    navigate('/register');
  }

  return (<>
    <Header />
    <Container>
      <Column>
        <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
      </Column>
      <Column>
        <Wrapper>
          <TitleLogin>Faça seu cadastro</TitleLogin>
          <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input errorMessage={errors.email?.message} placeholder="E-mail" leftIcon={<MdEmail color={iconColor} />} name="email"  control={control} />
            <Input errorMessage={errors.password?.message} type="password" placeholder="Senha" leftIcon={<MdLock color={iconColor} />}  name="password" control={control} />
            <Button title="Entrar" variant="secondary" type="submit"/>
          </form>
          <Row>
            <EsqueciText>Esqueci minha senha</EsqueciText>
            <CriarText onClick={handleRegisterAccount}>Criar Conta</CriarText>
          </Row>
        </Wrapper>
      </Column>
    </Container>
  </>)
}

export { Login }