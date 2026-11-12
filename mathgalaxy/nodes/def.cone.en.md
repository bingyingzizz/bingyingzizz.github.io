# cone and cocone　`def.cone`
English entry · root `../`
[in graph](../#n=def.cone)　·　[Chinese page (authoritative)](./def.cone.md)

> English: **draft** · machine-drafted, pending author review; the Chinese page is authoritative.

layer 10 · definition · cluster Diagrams and Limits (`cat.limit`) · Category Theory

## Statement · **draft**
Let $D : I \to \mathcal{C}$ be a diagram. A **cone** over $D$ is an object $X \in \mathcal{C}$ together with a family of morphisms

$$p_i : X \longrightarrow D(i) \qquad (i \in I)$$

such that for every $\alpha : i \to j$ in $I$,

$$D(\alpha) \circ p_i = p_j$$

Equivalently, a cone is a natural transformation from the constant diagram $\Delta X$ to $D$. Reversing all arrows gives a **cocone**.

> continued in nodes/def.cone.en.2.md
