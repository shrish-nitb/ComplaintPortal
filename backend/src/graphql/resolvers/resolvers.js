import { GraphQLDateTime } from 'graphql-scalars';

export const resolvers = {
    DateTime: GraphQLDateTime,
    
    Query: {
      // Application Queries
      getApplication: async (_, { reference_id,  WithApplicationStatus, WithCaseStatus}, { prisma }) => {
        const app =  await prisma.application.findUnique({
          where: { reference_id },
          include: {
            application_status: WithApplicationStatus,
            case_status: WithCaseStatus,
          },
        });
        console.log(app)
        return app
      },

      listApplications: async(_, __, {prisma}) => {
        return prisma.application.findMany();
      },
  
    },
  
    Mutation: {
      // Application Mutations
      createApplication: async (_, { input }, { prisma }) => {
        return prisma.application.create({
          data: {
            reference_id: Date.now().toString(),
            ...input,
          },
        });
      },
  
      updateApplication: async (_, { reference_id, input }, { prisma }) => {
        return prisma.application.update({
          where: { reference_id },
          data: { ...input },
        });
      },
  
      deleteApplication: async (_, { reference_id }, { prisma }) => {
        await prisma.application.delete({
          where: { reference_id },
        });
        return true;
      },
  
      // ApplicationStatus Mutations
      createApplicationStatus: async (_, { input }, { prisma }) => {
        return prisma.application_status.create({
          data: {
            ...input,
          },
        });
      },

     // CaseStatus Mutations
     createCaseStatus: async (_, { input }, { prisma }) => {
        return prisma.case_status.create({
          data: {
            ...input,
          },
        });
      },
  
    },
  };
  