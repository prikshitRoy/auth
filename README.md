# How to Use Firebase Auth in Nextjs SSR

**Tech Stack**
Nextjs-14 , Firebase , trpc , zod, kysely , prettier, docker

*trpc*

`yarn add @trpc/server@next @trpc/client@next @trpc/react-query@next @trpc/next@next @tanstack/react-query@latest zod`

*keysely*

`yarn add kysely`
`yarn add -D keysely-codegen`

*prettier*

`yarn add -D prettier-plugin-embed prettier-plugin-sql prettier-plugin-tailwindcss`

docker
Adding a version field in a Docker Compose file is optional for newer versions of Docker Compose. Previously, it was required, but since Compose V2, the version field is no longer necessary.

check version: `docker compose version`

*Prisma*

`yarn add -D prisma`

create necessary prisma configuration files

`yarn dlx prisma init`