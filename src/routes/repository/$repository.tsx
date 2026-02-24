import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/repository/$repository')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/repository/$repository"!</div>
}
