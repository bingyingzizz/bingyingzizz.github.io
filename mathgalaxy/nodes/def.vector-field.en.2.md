# Vector Field　`def.vector-field`
English entry · root `../`
[in graph](../#n=def.vector-field)　·　[Chinese page (authoritative)](./def.vector-field.md)

Let $M$ be a smooth manifold. A **vector field** on $M$ is a map $X : M \to TM$ such that $\pi \circ X = \operatorname{id}_{M}$ (each point is assigned a tangent vector at that point). If $X$ is smooth as a map $M \to TM$, call it a **smooth vector field**; the set of all of them is denoted $\mathfrak{X}(M)$.

In each chart $(U,\varphi)$, write

$$X\big|_{U} = \sum_{i=1}^{n} X^{i}\,\frac{\partial}{\partial x^{i}},\qquad X^{i} := \mathrm{d}x^{i}(X) ,$$

then $X$ is smooth if and only if on every chart of one atlas every $X^{i}$ is smooth (checking a single atlas suffices).

$X$ **acting on functions** gives a new function

> continued in nodes/def.vector-field.en.3.md
