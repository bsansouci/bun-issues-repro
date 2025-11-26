# bun-issues-repro
Currently on the main branch is the following issue: the source maps are wrong for the console.log line in A.tsx.

Install deps: `bun install`
Run dev server: `bun start`
Go to `http://localhost:3000`
You should see in the console a `Source maps for this line is broken` log, with a random line attribution that is not `A.tsx`

If you comment out any of the imports for `stream-chat`, the issue goes away.
One important line: the `stream-chat` import on the server! Removing that also makes the issue go away.
But the client-side imports are also necessary to hit this edge case.

