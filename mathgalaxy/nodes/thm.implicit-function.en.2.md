# Implicit Function Theorem　`thm.implicit-function`
English entry · root `../`
[in graph](../#n=thm.implicit-function)　·　[Chinese page (authoritative)](./thm.implicit-function.md)

($D_y F$ denotes the matrix of partial derivatives with respect to the last $m$ variables.) Then there exist an open neighbourhood $V \subseteq \mathbb{R}^{n}$ of $a$, an open neighbourhood $W \subseteq \mathbb{R}^{m}$ of $b$, and a **unique** $C^{1}$ map $g : V \to W$ such that

$$g(a) = b, \qquad F\bigl(x,\ g(x)\bigr) = 0 \quad (x \in V)$$

and

$$Dg(x) = - \bigl( D_y F(x, g(x)) \bigr)^{-1} D_x F(x, g(x))$$

## Notes · **draft**
⭐ In one sentence: **the equation $F(x, y) = 0$ can be solved uniquely for $y = g(x)$ where $D_yF$ is invertible, and the resulting map is automatically $C^{1}$**.

> continued in nodes/thm.implicit-function.en.3.md
