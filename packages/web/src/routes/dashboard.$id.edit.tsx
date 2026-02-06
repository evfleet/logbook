import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/$id/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/$id/edit"!</div>
}
