import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
'/',
'/sign-in',
'/sign-up', 
'events/create',
'/api/webhook/clerk',
'/api/webhook/stripe',
'/api/uploadthing',]);
const isProtectedRoute = createRouteMatcher([
  'events/create',
  '/api/webhook/clerk',
  '/api/webhook/stripe',
  '/api/uploadthing',]); 

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