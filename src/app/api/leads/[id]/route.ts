import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

interface Params {
  params: { id: string };
}

export async function DELETE(_request: Request, context: Params) {
  const params = await context.params;
  const id = params.id;

  try {
    await prisma.leads.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({ message: 'Lead deleted successfully!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting lead.' }, { status: 500 });
  }
}
