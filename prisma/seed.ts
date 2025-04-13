import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await hash('Senha@123456', 10)
  
  // Criar usuário admin
  const admin = await prisma.user.upsert({
    where: { email: 'admin@admin.com' },
    update: {
      role: 'admin',
      password: hashedPassword
    },
    create: {
      email: 'admin@admin.com',
      name: 'Administrador',
      password: hashedPassword,
      role: 'admin',
      status: 1
    },
  })
  
  // Criar usuário funcionário
  const funcionario = await prisma.user.upsert({
    where: { email: 'funcionario@exemplo.com' },
    update: {
      role: 'funcionario',
      password: hashedPassword
    },
    create: {
      email: 'funcionario@exemplo.com',
      name: 'Funcionário Exemplo',
      password: hashedPassword,
      role: 'funcionario',
      status: 1
    },
  })
  
  // Criar usuário cliente
  const cliente = await prisma.user.upsert({
    where: { email: 'cliente@exemplo.com' },
    update: {
      role: 'cliente',
      password: hashedPassword
    },
    create: {
      email: 'cliente@exemplo.com',
      name: 'Cliente Exemplo',
      password: hashedPassword,
      role: 'cliente',
      status: 1
    },
  })

  console.log({ admin, funcionario, cliente })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 