import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Header } from '../../components/Header';
import { Input }  from '../../components/Input';
import { Button }  from '../../components/Button';
import { Container, Column, Wrapper, Title, TitleRegister, SubtitleRegister, PolicyText, LoginText } from './styles';
import { api } from '../../services/api';

const schema = yup.object({
  name: yup.string().min(3, 'Nome com no mínimo 3 caracteres').required('O nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('O e-mail é obrigatório'),
  password: yup.string().min(5, 'Senha com no mínimo 5 caracteres').required('A senha é obrigatória'),
}).required()

const Registration = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  })
  const iconColor = '#8647AD';

  const onSubmit = async(formData) => {
    try{
      if(isValid){
        const user = JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        });
        const customConfig = {
          headers: {
          'Content-Type': 'application/json'
          }
        };
        const {data} = await api.post(`/users`, user, customConfig);
        if(data.name) {
          alert(`${data.name} cadastrado(a) com sucesso!`);
        }
      }
    }catch(e){
      console.log('Erro no cadastro do usuário.');
    }
  }

  const handleLoginAccount = () => {
    navigate('/login');
  }

  return (
    <>
      <Header/>
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleRegister>Comece agora grátis</TitleRegister>
            <SubtitleRegister>Crie sua conta e make the change._</SubtitleRegister>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input errorMessage={errors.name?.message} leftIcon={<MdPerson color={iconColor} />} control={control} name="name" placeholder="Nome completo" />
              <Input errorMessage={errors.email?.message} leftIcon={<MdEmail color={iconColor} />} control={control} name="email" placeholder="E-mail" />
              <Input errorMessage={errors.password?.message} leftIcon={<MdLock color={iconColor} />} control={control} name="password" placeholder="Password" />

              <Button title="Criar minha conta" variant="secondary" type="submit"/>
            </form>

            <PolicyText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</PolicyText>
            <LoginText>Já Tenho conta. <span onClick={handleLoginAccount}>Fazer login</span></LoginText>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}

export { Registration }