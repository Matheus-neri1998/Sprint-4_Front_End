import React, {Component} from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            senha : '',
        }
    };

    render(){
        return (
            <div>
                <main>
                    <section>
                        <p>Bem vindo(a) <br/> Faça o login para acessar a sua conta</p>

                        {/* Faz a chamada para a função de login quando o botão for pressionado */}

                        <form onSubmit={this.efetuarLogin}>
                            <input
                                // Email
                                type="text"
                                name="Email"

                                // Define um input do email recebe o valor do state email
                                value={this.state.email}

                                // Faz a chamada para a função que atualiza o state, confome o usuário altere o valor do input
                                onChange={this.atualizaCampo}
                                placeholder="usuário"
                            />

                            <input
                                // Senha
                                type="text"
                                name="Senha"

                                // Define um input do senha recebe o valor do state email
                                value={this.state.senha}

                                // Faz a chamada para a função que atualiza o state, confome o usuário altere o valor do input
                                onChange={this.atualizaCampo}
                                placeholder="senha"
                            />

                            <button type="submit">
                                Login
                            </button>

                        </form>
                    </section>
                </main>
            </div>

        )
    }
}

export default Login;