# Next-Auth-V4 Example with Nextjs-V14

## Setup:

**Create Nextjs Project:**

```
npx create-next-app@14.2.24
```

**Install Prisma:**

```
yarn add -D prisma
```

**Initialize Prisma:**

```
yarn prisma init
```

```
yarn add @prisma/client next-auth @next-auth/prisma-adapter @tailwindcss/forms react-hot-toast autoprefixer axios bcrypt
```

## TODO:

- fix: When user uses same email to login with Google and Github OAuth Error
