import prismaCLient from "../prisma";



class GetLast3MesssagesService {
    async execute() {
        const messages = await prismaCLient.message.findMany({
            take: 3,
            orderBy: {
                create_at: "desc"
            },
            include: {
                user: true
            }
        })

        //  SELECT * FROM MESSAGES LIMIT 3 ORDER BY CREATED_AT DESC 

        return messages;
    }

}

export { GetLast3MesssagesService };