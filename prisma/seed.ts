import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';


async function seed() {
  const admin = await prisma.user.findUnique({
    where: { email: 'admin@admin.com' },
  });

  if (!admin) {
    const hashedPassword = await bcrypt.hash('admin', 10);
    await prisma.user.create({
      data: {
        email: 'admin@admin.com',
        password: hashedPassword,
        role: 'admin',
      },
    });
    console.log('Admin created');
  } else {
    console.log('Admin already exists');
  }
}

seed()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
