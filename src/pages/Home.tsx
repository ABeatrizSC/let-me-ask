//navegação para botão Criar sala com o Google
import { useNavigate } from 'react-router-dom';

import { Button } from '../components/Button';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';

//contextos
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export const Home = () => {
    const history = useNavigate();
    const { user, signInWithGoogle } = useContext(AuthContext);
    
    async function haldleCreateRoom() {
        if (!user) { //sem autenticação
            await signInWithGoogle();
        }

        history('/rooms/new');
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&A ao vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Logo do Let me Ask" />
                    <button onClick={haldleCreateRoom} className="button-create-room">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className='separator'>Ou entre em uma sala</div>
                    <form action="">
                        <input 
                            type="text" 
                            placeholder='Digite o código da sala'
                        />
                        <Button type='submit'>
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}
  