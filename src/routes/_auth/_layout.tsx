import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/_layout')({
  component: AuthLayoutComponent,
})

function AuthLayoutComponent() {
  return <Outlet />;
}
