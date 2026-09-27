# Domain glossary

- **Category**: a closed thesis label the desk supports. The list is authored once in the catalog module. Typing never creates a Category.
- **Country cue**: ISO country the founder wants checks from, shown beside the IP-detected sitting country.
- **Investor plate**: one person on the blotter: portrait stage plus file facts.
- **Desk session**: category + country in the URL. Reloading restores the same plate list.
- **Catalog**: static investor records with source URLs. Not a live search engine.

# Architecture notes

Seams under test: Category matching, investor filtering, IP country parse. The catalog module is deep; React is an adapter. The geo adapter is a hypothetical seam (one HTTP client). A second client would make it a real seam.
