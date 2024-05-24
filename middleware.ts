import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
'/',
'/sign-in',
'/sign-up', 
'events/create',
'/api/webhooks',
'/api/uploadthing',]);
const isProtectedRoute = createRouteMatcher([
  'events/create',
  '/api/webhooks',
 ]); 

export default clerkMiddleware((auth, request) => {
  if(isProtectedRoute(request)) {
    auth().protect();
  } else if(!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}