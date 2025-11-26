import { Channel } from 'stream-chat'
import app from './index.html'

const c = Channel

const server = Bun.serve({
  development: true,
  routes: {
    '/': app,
  },
})

console.log(`Serving at ${server.url.href}`)
