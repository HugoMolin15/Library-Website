
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const componentPath = searchParams.get('path');

    if (!componentPath) {
        return NextResponse.json({ error: 'Path is required' }, { status: 400 });
    }

    try {
        // Basic security: only allow reading from src/components or Sections
        const safePath = path.join(process.cwd(), componentPath);
        if (!safePath.startsWith(process.cwd())) {
            return NextResponse.json({ error: 'Access denied' }, { status: 403 });
        }

        const code = fs.readFileSync(safePath, 'utf-8');
        return NextResponse.json({ code });
    } catch (error) {
        console.error('Error reading file:', error);
        return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }
}
