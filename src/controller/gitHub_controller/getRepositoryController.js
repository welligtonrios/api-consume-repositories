const { getRepositoryService } = require("../../services/getRepositoryService");

async function getRepositoryController(req, res, next) {

    try {

        const result = await getRepositoryService();
        let repository = [];
        let cont = 0; // contar os 5 repo de C#
        let objRepository = {
            id: '',
            avatar: '',
            name: '',
            description: '',
        };

        result.forEach((element, index) => {

            //receber as 5 primeiras posições do array || 5 repositorios mais antigos da language C#
            if (element.language === "C#" && cont < 5) {
                objRepository = {
                    id: element.id, 
                    avatar: element.owner.avatar_url, 
                    name: element.full_name,
                    description: element.description,
                };
                repository.push(objRepository);
                cont++;
            }

        });
        res.status(200);
        res.json(repository)

    } catch (er) {
        res.status(400).send("something went wrong");
    }

}

module.exports = { getRepositoryController }