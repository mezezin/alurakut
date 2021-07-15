import { SiteClient } from "datocms-client";

export default async function recebedorDeRequests(request, response) {

    if (request.method === "POST") {
        const TOKEN = "472c3d8502a77ddcb2ea499f0a25cc";
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: '968069', // ID do Model de "Community" criado pelo Dato
            ...request.body,
            //title: 'Teste',
            //imageUrl: 'https://github.com/zezinnnnn.png',
            //creatorSlug: 'zezinnnnn',
        })

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: "Ainda não há informação no GET, mas no POST tem!"
    })
}