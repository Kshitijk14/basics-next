# Routes:
1. Link routes:
   - about/ => example.com/about

2. Dynamic Route (id or username or any wildcard value):
    - [slug]/ => example.com/{slug}

3. Ignored routes (in order to place a file, but don't wanna affect the actual url):
   - (group)/ => example.com/???


# Layouts (layout.jsx)
## Nested Layouts:

- app                   (folder)
  - layout.jsx          (file)
  - dashboard           (folder)
    - layout.jsx        (file)

- layout in subdirectory, only be applied to the children of that route
- can also fetch data in layouts => application much more efficient (no need to re-render?re-fetch data on sub-routes)


# Components:
- Components => server components by default => gets rendered on the server => data fetching can be done directly into them (with async way)