export default function Sobre() {
    return (
        <main className="text-[var(--color-font-black)] max-w-3xl mx-auto px-4 py-10 leading-relaxed">
            <h1 className="text-3xl font-bold mb-6 text-center">Sobre Mim</h1>

            <p>
                Meu nome é <strong>Moisés Waidemann</strong>, tenho 19 anos e sou estudante de 
                <strong> Análise e Desenvolvimento de Sistemas na FIAP</strong>. Sempre tive o desejo de transformar 
                tecnologia em algo útil para as pessoas — e construir este site, com domínio próprio, faz parte 
                desse sonho de tornar meu trabalho mais profissional e visível para o mundo.
            </p>

            <p className="mt-4">
                Ao longo da graduação, participei de projetos que uniram impacto social, design centrado no usuário 
                e soluções tecnológicas completas. Entre eles, destacam-se <strong>Cuida Mais HC</strong> e 
                <strong> WellMind</strong>, que foram fundamentais para desenvolver minhas habilidades técnicas, minha visão 
                de produto e minha capacidade de trabalhar em equipe.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-2">Lariel — Plataforma Digital para Gestão de Casamentos</h2>
            <p>
                Um projeto que centraliza todas as informações do evento em uma experiência digital elegante e funcional, 
                reunindo confirmação de presença (RSVP), lista de convidados, mural de recados e organização para os noivos.  
                A plataforma combina desenvolvimento front-end com React e TypeScript, back-end em Java com APIs REST e 
                modelagem de banco de dados relacional, garantindo controle, praticidade e uma experiência intuitiva para convidados e administradores.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-2">Cuida Mais HC — Assistente Virtual para Saúde Digital</h2>
            <p>
                Projeto desenvolvido para o Hospital das Clínicas com foco em reduzir o absenteísmo e facilitar o acesso 
                à saúde digital. A solução integra chatbot via WhatsApp usando IBM Watson Assistant, entidades personalizadas, 
                lógica conversacional com JSON, integração com Node-RED e Telegram, além de uma plataforma web acessível.  
                Também inclui banco de dados com pacientes, consultas, confirmações e logs, além de automações em Python/Java 
                para envio de notificações.  
                Esse projeto mostrou minha capacidade de solucionar problemas reais e colaborar com equipes multidisciplinares.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-2">WellMind — Plataforma Inteligente de Bem-Estar</h2>
            <p>
                Um projeto que reúne monitoramento diário de hábitos, gamificação e geração de feedbacks personalizados 
                usando APIs de IA como GPT, Watson e Gemini.  
                A plataforma combina coleta de dados, lógica de recomendação e experiência do usuário, criando um sistema 
                acessível e útil para melhorar o bem-estar no dia a dia.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-2">Entre em Contato</h2>
            <p>Caso queira conversar, colaborar ou saber mais sobre meu trabalho, estou disponível nos canais abaixo:</p>

            <ul className="mt-4 space-y-2">
                <li><strong>E-mail:</strong> <a href="mailto:mjrmolinllo@icloud.com" className="text-blue-600 underline">mjrmolinllo@icloud.com</a></li>
                <li><strong>WhatsApp:</strong> <a href="https://wa.me/5511969787666" target="_blank" className="text-blue-600 underline">11 96978-7666</a></li>
                <li><strong>Instagram:</strong> <a href="https://www.instagram.com/_waidemann.m/" target="_blank" className="text-blue-600 underline">@_waidemann.m</a></li>
                <li><strong>GitHub:</strong> <a href="https://github.com/Waidemannm" target="_blank" className="text-blue-600 underline">github.com/Waidemannm</a></li>
                <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/mois%C3%A9s-waidemann/" target="_blank" className="text-blue-600 underline">linkedin.com/in/moisés-waidemann</a></li>
            </ul>

            <p className="mt-10 text-center text-gray-600">
                Este site é um passo importante para transformar seu sonho de ter um domínio próprio e identidade visul profissional — em realidade.
            </p>

            <h1 className="text-3xl font-bold m-15 text-center">Sobre Este Site</h1>

            <p>
                Este site foi criado especialmente para celebrar o casamento de <strong>Larissa e Samuel</strong>,
                reunindo em um só lugar todas as informações importantes para amigos e familiares. A proposta é
                oferecer uma experiência moderna, organizada e elegante — inspirada nas melhores plataformas de
                casamento — mas totalmente desenvolvida por mim, com programação personalizada e foco total na
                experiência do usuário.
            </p>

            <p className="mt-4">
                A ideia central deste projeto é facilitar a vida dos noivos e convidados, oferecendo um ambiente
                digital completo que funciona como convite, guia do evento e espaço de interação. Cada detalhe
                foi pensado para ser intuitivo, acessível e visualmente agradável, criando uma experiência única
                e significativa para esse momento tão especial.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-2">Funcionalidades do Site</h2>

            <p><strong>Página Inicial</strong></p>
            <p className="mb-4">
                Onde tudo começa: foto do casal, mensagem de boas-vindas e o clima do casamento. É o primeiro
                contato de quem visita e já transmite a emoção da celebração.
            </p>

            <p><strong>História do Casal</strong></p>
            <p className="mb-4">
                Uma seção dedicada a contar a trajetória de Larissa e Samuel — como se conheceram, momentos
                marcantes e tudo o que os trouxe até o grande dia. Um espaço afetivo criado para aproximar
                ainda mais os convidados da história deles.
            </p>

            <p><strong>Informações do Evento</strong></p>
            <p className="mb-4">
                Data, horário, endereço, mapa de localização, instruções de chegada e todos os detalhes
                essenciais para que os convidados se organizem com tranquilidade.
            </p>

            <p><strong>Confirmação de Presença (RSVP)</strong></p>
            <p className="mb-4">
                Um sistema simples e rápido para que os convidados confirmem presença diretamente pelo site.
                Isso ajuda os noivos no planejamento, garantindo organização e controle do número de pessoas.
            </p>

            <p><strong>Galeria de Fotos</strong></p>
            <p className="mb-4">
                Lugar onde ficam reunidas fotos do casal, registros especiais e, futuramente, momentos do próprio
                dia do casamento. Tudo organizado de maneira elegante.
            </p>

            <p><strong>Mensagens e Recados</strong></p>
            <p className="mb-4">
                Um mural onde familiares e amigos podem deixar mensagens carinhosas para Larissa e Samuel,
                eternizando votos de felicidade e boas energias.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-2">Desenvolvimento</h2>

            <p>
                Todo este site foi desenvolvido por mim, unindo design, programação e muito cuidado em cada
                detalhe. A construção deste projeto representa não apenas uma forma de homenagear o casal, mas
                também a realização de um sonho pessoal: criar algo próprio, funcional e significativo usando
                todo o conhecimento que venho adquirindo.
            </p>

            <p className="mt-4">
                O resultado é um espaço digital feito com dedicação, pensado para tornar este momento ainda mais
                especial para Larissa, Samuel e todos que fazem parte dessa história.
            </p>
        </main>
    );
}
