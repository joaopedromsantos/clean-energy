import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const {
      energyBillValue,
      city,
      state,
      supplyType,
      fullName,
      email,
      phone,
      cpf
    } = await request.json();

    await prisma.leads.upsert({
      where: {
        cpf: cpf,
      },
      update: {
        energyBillValue,
        city,
        state,
        supplyType,
        fullName,
        phone,
        cpf
      },
      create: {
        energyBillValue,
        city,
        state,
        supplyType,
        fullName,
        email,
        phone,
        cpf
      }
    });

    return NextResponse.json({ message: 'Lead criado ou atualizado com sucesso!' }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: 'Erro ao criar ou atualizar lead.' }, { status: 500 });
  }
}


export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') ?? '1');
    const perPage = parseInt(url.searchParams.get('perPage') ?? '10');

    const [leads, total] = await Promise.all([
      prisma.leads.findMany({
        skip: (page - 1) * perPage,
        take: perPage,
        orderBy: { createdAt: 'desc' }
      }),
      prisma.leads.count()
    ]);

    return NextResponse.json({
      leads,
      total,
      page,
      perPage
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: 'Erro ao listar leads.' }, { status: 500 });
  }
}
