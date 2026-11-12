# presheaf　`def.presheaf`
English entry · root `../`
[in graph](../#n=def.presheaf)　·　[Chinese page (authoritative)](./def.presheaf.md)

## Notes · **draft**
Plainly: **each object is assigned a piece of data, and each morphism is assigned a restriction**. Contravariance is what lets a smaller object receive more data — the further one goes into substructures, the more restrictions there are.

Examples:

- On a poset: assign to each $i$ a set $T_i$, and to $i \le j$ the restriction $T_j \to T_i$ (dropping antisymmetry, the same works on a preorder).
- On a topological space: $\operatorname{Open}(X)$ is the category of open sets (morphisms are inclusions); a presheaf assigns to each open set $u$ a set $T(u)$, and to $u' \subseteq u$ a restriction $T(u) \to T(u')$, $s \mapsto s|_{u'}$.

> continued in nodes/def.presheaf.en.3.md
