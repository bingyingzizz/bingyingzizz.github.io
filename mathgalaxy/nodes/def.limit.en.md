# limit and colimit　`def.limit`
English entry · root `../`
[in graph](../#n=def.limit)　·　[Chinese page (authoritative)](./def.limit.md)

> English: **draft** · machine-drafted, pending author review; the Chinese page is authoritative.

layer 11 · definition · cluster Diagrams and Limits (`cat.limit`) · Category Theory

## Statement · **draft**
The **limit** of the diagram $D : I \to \mathcal{C}$ is the cone over $D$ with the universal property: a cone $(\lim D,\ p_i)$ such that for every cone $(Y,\ g_i)$ there is a **unique** morphism $g : Y \to \lim D$ with

$$p_i \circ g = g_i \qquad (i \in I)$$

Equivalently, the cone functor is represented by $\lim D$:

$$\operatorname{Hom}_{\mathcal{C}^{I}}(\Delta Y, D) \;\cong\; \operatorname{Hom}_{\mathcal{C}}(Y, \lim D)$$

> continued in nodes/def.limit.en.2.md
