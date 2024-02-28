document.addEventListener("DOMContentLoaded", function () {
    // Array de mensagens de sabedoria
    const mensagens = [
        "A vida é uma jornada espiritual, onde cada experiência nos aproxima mais da compreensão do amor divino.",
        "A cada dificuldade, enxergue uma oportunidade de crescimento espiritual.",
        "A verdadeira riqueza está na paz interior e na evolução espiritual.",
        "A caridade é o caminho mais curto para a evolução espiritual.",
        "A gratidão é a ponte que nos conecta com o divino.",
        "O perdão é a chave que liberta nossa alma e nos eleva espiritualmente.",
        "A fé é o alicerce da jornada espiritual.",
        "A humildade nos aproxima da sabedoria divina.",
        "O amor é a energia que move o universo e transcende todas as barreiras.",
        "Cada desafio é uma oportunidade para exercitar a fé e a confiança no plano divino.",
        "A caridade não consiste apenas em dar, mas em compreender, ajudar e amar.",
        "O conhecimento é a luz que ilumina o caminho da evolução espiritual.",
        "A paz interior é o resultado da harmonia entre mente, corpo e espírito.",
        "A alegria de viver está em encontrar sentido e propósito em cada momento.",
        "A sabedoria está em ouvir a voz da intuição, que é a voz do divino dentro de nós.",
        "O amor incondicional é a expressão mais pura do divino em nós.",
        "A paciência nos ensina a confiar no tempo divino e a esperar com serenidade.",
        "A compaixão é a linguagem do coração que transcende todas as diferenças.",
        "A verdadeira liberdade está em viver de acordo com os princípios da alma.",
        "O silêncio é o momento de comunhão com o divino dentro de nós.",
        "A fé remove montanhas e nos faz transcender os limites da matéria.",
        "Aprender a perdoar é libertar-se das correntes do passado e abrir as portas para o futuro.",
        "A prece é o diálogo da alma com Deus, que fortalece e ilumina nosso caminho.",
        "A espiritualidade nos ensina a enxergar além das aparências e a reconhecer a divindade em todos os seres.",
        "A compreensão nos permite aceitar as diferenças e amar incondicionalmente.",
        "O respeito é a base de todas as relações e a expressão do amor ao próximo.",
        "A felicidade está na gratidão pelo presente e na esperança pelo futuro.",
        "A coragem nos impulsiona a seguir em frente, mesmo diante dos desafios mais difíceis.",
        "A verdadeira felicidade está na busca do autoconhecimento e na realização espiritual.",
        "A sabedoria está em reconhecer a grandeza de cada alma e a respeitar seu caminho.",
        "A compaixão é a força que nos move a ajudar o próximo e a transformar o mundo.",
        "A união faz a força, e juntos somos capazes de superar qualquer obstáculo.",
        "A verdadeira beleza está na pureza do coração e na nobreza dos sentimentos.",
        "O amor é a essência divina que habita em cada ser humano.",
        "A esperança nos faz perseverar mesmo nos momentos mais difíceis.",
        "A luz divina brilha em cada um de nós, iluminando o caminho da verdade e do amor.",
        "A fé nos sustenta nos momentos de dúvida e nos fortalece nos momentos de dificuldade.",
        "O amor é a chave que abre todas as portas e une todas as almas.",
        "A gratidão é a atitude que nos conecta com a abundância do universo.",
        "A harmonia está na aceitação de si mesmo e na compreensão do próximo.",
        "A verdadeira felicidade está em viver em paz consigo mesmo e em harmonia com o mundo.",
        "O perdão é a ponte que nos permite transcender o passado e abraçar o presente com amor.",
        "A compreensão nos leva além das aparências e nos permite enxergar a verdadeira essência de cada ser.",
        "A paz interior é o resultado da aceitação de si mesmo e da busca constante pela evolução espiritual.",
        "O amor é a força que move o universo e nos faz transcender os limites da matéria.",
        "A fé nos sustenta nos momentos de escuridão e nos guia rumo à luz.",
        "A gratidão é a chave que abre as portas da prosperidade e da abundância.",
        "A paciência é a virtude que nos permite esperar com serenidade e confiança pelo cumprimento do plano divino.",
        "A esperança é a luz que brilha mesmo nas noites mais escuras, mostrando-nos o caminho para um futuro melhor.",
        "A caridade é a expressão mais sublime do amor ao próximo, que nos torna verdadeiramente humanos.",
        "O autoconhecimento nos leva ao encontro de nossa verdadeira essência, que é divina e eterna.",
        "A compaixão é a força que nos impulsiona a ajudar o próximo e a transformar o mundo em um lugar melhor.",
        "A união faz a força, e juntos somos capazes de superar qualquer obstáculo e alcançar nossos objetivos mais nobres.",
        "A verdadeira felicidade está na simplicidade e na gratidão pelo presente.",
        "O amor é a energia que move o universo e nos faz transcender as barreiras da separação e do egoísmo.",
        "A fé nos fortalece nos momentos de adversidade e nos guia rumo à vitória.",
        "A esperança nos faz perseverar mesmo diante das tempestades mais violentas, pois sabemos que o sol sempre voltará a brilhar.",
        "A paciência é a virtude que nos ensina a esperar com serenidade pelo cumprimento do plano divino.",
        "A caridade é o amor em ação, que nos faz compreender a necessidade de ajudar o próximo e de fazer o bem sem olhar a quem.",
        "A gratidão é a atitude que nos conecta com a abundância do universo e nos permite receber as bênçãos divinas com o coração aberto.",
        "A compaixão é a capacidade de nos colocarmos no lugar do outro e de sentir suas dores e alegrias como se fossem nossas próprias.",
        "A união faz a força, e juntos somos capazes de superar qualquer obstáculo e de alcançar nossos objetivos mais elevados.",
        "A verdadeira felicidade está na simplicidade e na gratidão pelo presente, pois é no agora que encontramos a plenitude e a paz interior.",
        "O amor é a força mais poderosa do universo, que nos une uns aos outros e nos conecta com a essência divina que habita em cada ser humano.",
        "A fé nos sustenta nos momentos de escuridão e nos guia rumo à luz, mostrando-nos que mesmo nas situações mais difíceis há sempre uma saída.",
        "A esperança é a luz que brilha mesmo nas noites mais escuras, mostrando-nos o caminho para um futuro melhor e alimentando-nos com a certeza de que tudo ficará bem.",
        "A paciência é a virtude que nos ensina a esperar com serenidade pelo cumprimento do plano divino, confiantes de que tudo acontecerá no momento certo e da melhor forma possível.",
        "A caridade é o amor em ação, que nos faz compreender a necessidade de ajudar o próximo e de fazer o bem sem olhar a quem, pois é dando que se recebe e é amando que se é amado.",
        "A gratidão é a atitude que nos conecta com a abundância do universo e nos permite receber as bênçãos divinas com o coração aberto, agradecendo por tudo o que temos e por tudo o que somos.",
        "A compaixão é a capacidade de nos colocarmos no lugar do outro e de sentir suas dores e alegrias como se fossem nossas próprias, guiando-nos pelo caminho do amor e da solidariedade.",
        "A união faz a força, e juntos somos capazes de superar qualquer obstáculo e de alcançar nossos objetivos mais elevados, unidos pelo vínculo sagrado do amor e da fraternidade.",
        "A verdadeira felicidade está na simplicidade e na gratidão pelo presente, pois é no agora que encontramos a plenitude e a paz interior, vivendo cada momento com intensidade e alegria.",
        "O amor é a força mais poderosa do universo, que nos une uns aos outros e nos conecta com a essência divina que habita em cada ser humano, transcendendo todas as barreiras e diferenças.",
        "A fé nos sustenta nos momentos de escuridão e nos guia rumo à luz, mostrando-nos que mesmo nas situações mais difíceis há sempre uma saída, pois Deus nunca nos abandona e está sempre ao nosso lado.",
        "A esperança é a luz que brilha mesmo nas noites mais escuras, mostrando-nos o caminho para um futuro melhor e alimentando-nos com a certeza de que tudo ficará bem, pois o amor de Deus nunca falha e sua misericórdia é infinita.",
        "A paciência é a virtude que nos ensina a esperar com serenidade pelo cumprimento do plano divino, confiantes de que tudo acontecerá no momento certo e da melhor forma possível, pois Deus sabe o que é melhor para nós e sempre nos conduzirá pelo caminho da felicidade e da realização.",
        "A caridade é o amor em ação, que nos faz compreender a necessidade de ajudar o próximo e de fazer o bem sem olhar a quem, pois é dando que se recebe e é amando que se é amado, seguindo os ensinamentos de Jesus Cristo, o maior exemplo de amor e compaixão que já existiu.",
        "A gratidão é a atitude que nos conecta com a abundância do universo e nos permite receber as bênçãos divinas com o coração aberto, agradecendo por tudo o que temos e por tudo o que somos, reconhecendo que cada momento de nossas vidas é uma dádiva de Deus e uma oportunidade de crescimento e evolução espiritual.",
        "A compaixão é a capacidade de nos colocarmos no lugar do outro e de sentir suas dores e alegrias como se fossem nossas próprias, guiando-nos pelo caminho do amor e da solidariedade, pois somos todos filhos de Deus e devemos amar e respeitar uns aos outros como irmãos.",
        "A união faz a força, e juntos somos capazes de superar qualquer obstáculo e de alcançar nossos objetivos mais elevados, unidos pelo vínculo sagrado do amor e da fraternidade, pois quando estamos unidos em espírito, nada pode nos deter e somos invencíveis.",
        "A verdadeira felicidade está na simplicidade e na gratidão pelo presente, pois é no agora que encontramos a plenitude e a paz interior, vivendo cada momento com intensidade e alegria, pois a vida é uma dádiva de Deus e devemos aproveitá-la ao máximo, amando, aprendendo e crescendo a cada dia.",
        "O amor é a força mais poderosa do universo, que nos une uns aos outros e nos conecta com a essência divina que habita em cada ser humano, transcendendo todas as barreiras e diferenças, pois o amor é a essência de Deus e a fonte de toda a vida e de toda a criação.",
        "A fé nos sustenta nos momentos de escuridão e nos guia rumo à luz, mostrando-nos que mesmo nas situações mais difíceis há sempre uma saída, pois Deus nunca nos abandona e está sempre ao nosso lado, protegendo-nos e orientando-nos em todos os momentos de nossas vidas.",
        "A esperança é a luz que brilha mesmo nas noites mais escuras, mostrando-nos o caminho para um futuro melhor e alimentando-nos com a certeza de que tudo ficará bem, pois o amor de Deus nunca falha e sua misericórdia é infinita, renovando nossas forças e enchendo-nos de coragem e determinação para enfrentar os desafios da vida com fé e esperança.",
        "A paciência é a virtude que nos ensina a esperar com serenidade pelo cumprimento do plano divino, confiantes de que tudo acontecerá no momento certo e da melhor forma possível, pois Deus sabe o que é melhor para nós e sempre nos conduzirá pelo caminho da felicidade e da realização, mesmo que às vezes não entendamos seus desígnios e nos sintamos perdidos e desamparados.",
        "A caridade é o amor em ação, que nos faz compreender a necessidade de ajudar o próximo e de fazer o bem sem olhar a quem, pois é dando que se recebe e é amando que se é amado, seguindo os ensinamentos de Jesus Cristo, o maior exemplo de amor e compaixão que já existiu, pois ele veio ao mundo para nos ensinar a amar e a perdoar, a servir e a ajudar, a sermos humildes e generosos, pois somente assim encontraremos a verdadeira paz e a verdadeira felicidade.",
        "A gratidão é a atitude que nos conecta com a abundância do universo e nos permite receber as bênçãos divinas com o coração aberto, agradecendo por tudo o que temos e por tudo o que somos, reconhecendo que cada momento de nossas vidas é uma dádiva de Deus e uma oportunidade de crescimento e evolução espiritual, pois a vida é uma dádiva preciosa que devemos valorizar e aproveitar ao máximo, agradecendo por cada experiência, por cada aprendizado, por cada alegria e por cada desafio, pois tudo contribui para o nosso crescimento e para a nossa evolução como seres espirituais.",
        "A compaixão é a capacidade de nos colocarmos no lugar do outro e de sentir suas dores e alegrias como se fossem nossas próprias, guiando-nos pelo caminho do amor e da solidariedade, pois somos todos filhos de Deus e devemos amar e respeitar uns aos outros como irmãos, ajudando-nos mutuamente e compartilhando o amor e a luz que habitam em nossos corações, pois quando ajudamos o próximo, estamos ajudando a nós mesmos e contribuindo para a construção de um mundo melhor e mais justo, onde reine a paz, a harmonia e o amor.",
        "A união faz a força, e juntos somos capazes de superar qualquer obstáculo e de alcançar nossos objetivos mais elevados, unidos pelo vínculo sagrado do amor e da fraternidade, pois quando estamos unidos em espírito, nada pode nos deter e somos invencíveis, pois o amor é a força mais poderosa do universo e quando estamos unidos pelo amor, somos capazes de realizar verdadeiros milagres e de transformar o mundo ao nosso redor, tornando-o um lugar mais belo, mais justo e mais feliz para todos os seres que nele habitam.",
        "A verdadeira felicidade está na simplicidade e na gratidão pelo presente, pois é no agora que encontramos a plenitude e a paz interior, vivendo cada momento com intensidade e alegria, pois a vida é uma dádiva de Deus e devemos aproveitá-la ao máximo, amando, aprendendo e crescendo a cada dia, pois o amor é a essência de nossa existência e é ele que nos guia e nos sustenta em todos os momentos de nossas vidas, nos dando força e coragem para enfrentar os desafios e as provações que surgem em nosso caminho, com fé, esperança e determinação, pois Deus está sempre ao nosso lado, nos amparando e nos protegendo, nos dando forças e nos conduzindo pelo caminho da luz e da verdade, pois ele é o nosso pai amoroso que nos ama incondicionalmente e que quer o nosso bem acima de tudo, por isso devemos confiar nele e entregar-lhe nossos problemas e nossas preocupações, sabendo que ele cuidará de nós com todo o seu amor e misericórdia, nos abençoando e nos protegendo em todos os momentos de nossa vida, nos guiando e nos conduzindo pelo caminho da felicidade e da paz, nos ajudando a superar todos os obstáculos e dificuldades que surgem em nosso caminho, nos fortalecendo e nos sustentando com sua poderosa mão, nos dando coragem e esperança para seguirmos em frente, firmes e confiantes em sua bondade e amor infinitos, pois ele é o nosso refúgio e nossa fortaleza, nossa rocha firme e nossa salvação, nosso escudo e nossa proteção, nossa luz e nossa vida, nosso tudo e nosso nada, pois sem ele não somos nada e com ele somos tudo, pois ele é o nosso pai celestial que nos ama mais do que tudo e que sempre estará ao nosso lado, nos guiando e nos protegendo, nos abençoando e nos guardando, nos amparando e nos sustentando, nos dando força e coragem para enfrentar todos os desafios e provações que surgem em nosso caminho, nos conduzindo pelo caminho da luz e da verdade, nos ajudando a superar todos os obstáculos e dificuldades que encontramos em nossa jornada, nos fortalecendo e nos sustentando com sua poderosa mão, nos dando esperança e consolação em todos os momentos de nossa vida, nos protegendo e nos guardando com seu amor infinito, nos conduzindo com sua graça e misericórdia pelo caminho da felicidade e da paz, nos levando para os braços de seu amor eterno, onde encontramos descanso e refúgio, consolo e paz, alegria e felicidade, para todo o sempre, amém.",
    ];


    // Obtém a data atual
    const dataAtual = new Date();
    const diaDoAno = getDiaDoAno(dataAtual); // Função para obter o dia do ano
    const mensagemDoDia = mensagens[diaDoAno % mensagens.length]; // Usa o resto da divisão para selecionar uma mensagem

    // Exibe a mensagem e a data
    document.getElementById("mensagem").textContent = mensagemDoDia;
    document.getElementById("data").textContent = `Data: ${dataAtual.toLocaleDateString()}`;
});

function getDiaDoAno(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = (date - start) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
    const umDiaEmMilissegundos = 1000 * 60 * 60 * 24;
    const diaDoAno = Math.floor(diff / umDiaEmMilissegundos);
    return diaDoAno;
}

function compartilharWhatsApp() {
    // Obtenha os dados da mensagem
    var titulo = document.getElementById("titulo").innerText;
    var data = document.getElementById("data").innerText;
    var mensagem = document.getElementById("mensagem").innerText;

    // Construa o texto do compartilhamento com o link da página
    var textoCompartilhamento = "Confira esta mensagem do dia:\n\n" + titulo + "\n" + data + "\n" + mensagem + "\n\n https://mensagemdodia.vercel.app/";

    // Codifique o texto para a URL
    var textoCodificado = encodeURIComponent(textoCompartilhamento);

    // Construa o link de compartilhamento do WhatsApp
    var linkWhatsApp = "https://api.whatsapp.com/send?text=" + textoCodificado;

    // Abra uma nova janela do WhatsApp com o link
    window.open(linkWhatsApp);
}




