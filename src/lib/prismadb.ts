import { PrismaClient } from '@prisma/client';

declare global {
  var prismadb: PrismaClient | undefined;
}

const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV === 'production') {
  global.prismadb = client;
}

export { client };
export default client;
