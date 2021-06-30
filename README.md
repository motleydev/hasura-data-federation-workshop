---
title: Welcome to the Workshop!
---

# Data Federation with Hasura Cloud

Welcome to the data federation workshop! This base template is based on [Next.js](https://nextjs.org/), you can read more about it over there. This [Readme](https://github.com/motleydev/hasura-data-federation-workshop) is used to distribute information for the workshop. If you are not attending the workshop, there's a good chance the primary database connection urls will no-longer work. In that case, you can find the original postgres data in in the following folder.
`/data`

## Services you need an account for

- [Hasura Cloud](https://cloud.hasura-.io/signup?pg=github&repo=data-fed-workshop)
- [Open Weather Map (Optional)](https://openweathermap.org/)

## Connection Information

### Postgres Database: Read Only

**Connection String: DefaultDB**  
`postgres://workshopuser:hasura-is-great@rec-gov-hasura-94a1.aivencloud.com:11162/defaultdb?sslmode=require`

**Connection String: UserDB** _We'll discuss this in more detail_  
`postgres://workshopuser:hasura-is-great@rec-gov-hasura-94a1.aivencloud.com:11162/userdb?sslmode=require`

### Remote GraphQL URLS

**GraphCMS URL (CMS Layer)**  
`https://api-eu-central-1.graphcms.com/v2/ckq2hi73s512a01yxaqef2dtq/master`

**GraphCMS Read only Token**

```
eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MjQzNTkzODcsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NrcTJoaTczczUxMmEwMXl4YXFlZjJkdHEvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYzZhZDQxNTUtN2YyNy00ODM0LWExYmItZDA1YmUzYzZjYjRlIiwianRpIjoiY2txN3huMGxsY252MzAxejZnb2FuZTdscSJ9.NuHZdDgEY0-QtytQN0DUiuGKxN7ev4HvFq-_Z-NLpMPbBe_kjE_tsANpJX6PjEeDKv-9KMaq-VknuvAjVBoGQrN2JNrWnvWu0Rnp4XzBEzFZeKeOK18_axeHfk_ETXEMFu5RcTDjAVWCz6RV02X8ZPcIr4R3Eof6GbWOBw9c9OiR8nMJhgjw2mVDleKGNkEdDxOsz7lpKeIS9KveujWL-xBhsQBdsawBslsxl_scZtvgf4n762SHBSUhPrvidLGnlcph67XAunAKqZI1Bs3ZMh6bHRxCxX_A8NEaBfN-5-QW1QyqRdd10wQQFcjnvNInyYktHbDIun9-RpVygHjbYKmUZ7B9IJDAkNElF_IRSzAhrm9KldPvDiNjPoTeApvQT2Y7HZU-tzeuPNZcZ-i8F2BgvN4CHUxBo_Qf61BbOCWil7OX6Dr1L9DH6Lvh4g4aMY9in5hWEbYo2Qs70-0pm0mNgIm2OY-Z4n0gk2Ql6EIdwxQOy7yAjral_ujCd-yVYElMJw2osRzhmKKGlOnVZNyEV9pSitme7bYQo4jgA8nDjYLFi4IjTiTUIW3ERe4kEf3s9hpIT6H6x487QeEJn2BFaXeRrDgP2d5ZPMhtHcDAcoSMP71Evr5a3DTga9ItxqU-tHfDCEvPMzAjFFbQLMgPdUmikOy3JGONozibg1M
```

### Repo for Weather API

**Github Repo for Weather (this repo)**  
[Link](https://github.com/motleydev/hasura-data-federation-workshop)  
`https://hasura-data-federation-workshop.vercel.app/api/graphql`

## Steps

1. Create Hasura Cloud Account
2. Create new project
3. Add defaultDB to data tab
4. Track all tables
5. Track all foreign keys
6. Turn on API limits
7. Test query
8. Add manual relation for media
9. Test query
10. Add GraphCMS remote schema
11. Create relation
12. Test query
13. Tell alternatives to user story _(show example - manually add reservation and user tables)_
14. Add weather API _(make Vercel account, clone/deploy)_
15. Create relation
16. Test query
17. Check performance
18. Add cache
19. Q&A - Play time!

## Notes:

Original Data https://ridb.recreation.gov/ (Downloads as CSV)
