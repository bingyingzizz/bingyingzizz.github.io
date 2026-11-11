# natural transformation　`def.natural-transformation`
English entry · root `../`
[in graph](../#n=def.natural-transformation)　·　[Chinese page (authoritative)](./def.natural-transformation.md)

> English: **draft** · machine-drafted, pending author review; the Chinese page is authoritative.

layer 9 · definition · cluster Functors and Natural Transformations (`cat.functor`) · Category Theory

## Statement · **draft**
Let $F, G : \mathcal{C} \to \mathcal{D}$ be two functors. A **natural transformation** $\alpha : F \implies G$ from $F$ to $G$ is a family of morphisms

$$\alpha_X : F(X) \to G(X) \qquad (X \in \mathcal{C})$$

such that for every $f : X \to Y$ the square commutes:

$$G(f) \circ \alpha_X = \alpha_Y \circ F(f)$$

> continued in nodes/def.natural-transformation.en.2.md
