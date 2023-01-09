import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { withClerkMiddleware } from '@clerk/nextjs/server';

export default withClerkMiddleware((req: NextRequest) => {
  return NextResponse.next();
});

// stop middleware running on static files
export const config = { matcher: '/((?!.*\\.).*)' };
