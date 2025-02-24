import { Hono } from 'hono'
import { serve } from 'bun'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

// Ensure Bun properly serves the app
serve({
  fetch: app.fetch,
  port: 3000, // Change this if needed
})

console.log("Server is running on http://localhost:3500");
