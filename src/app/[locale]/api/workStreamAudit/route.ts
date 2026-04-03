import { prisma } from "@/src/infrastructure/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { locale, path } = body;
    const entry = await prisma.workStreamAudit.create({
      data: {
        path,
        locale,
      },
    });

    return NextResponse.json(entry, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error registering visit" },
      { status: 500 },
    );
  }
}
