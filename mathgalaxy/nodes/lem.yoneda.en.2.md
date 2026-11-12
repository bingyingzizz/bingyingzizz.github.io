# Yoneda lemma　`lem.yoneda`
English entry · root `../`
[in graph](../#n=lem.yoneda)　·　[Chinese page (authoritative)](./lem.yoneda.md)

$$\Phi : \operatorname{Nat}(h^{X}, F) \longrightarrow F(X), \qquad \Phi(\alpha) := \alpha_{X}(1_{X}).$$

- **Inverse map**: given $u \in F(X)$, for each $Y$ define

$$\Psi(u)_{Y} : \operatorname{Hom}_{\mathcal{C}}(X, Y) \to F(Y), \qquad \Psi(u)_{Y}(f) := F(f)(u).$$

It is natural: for $g : Y \to Z$, by functoriality of $F$, $F(g)\circ F(f) = F(g\circ f)$, the two sides are exactly $F(g)\bigl(\Psi(u)_{Y}(f)\bigr)$ and $\Psi(u)_{Z}(g\circ f)$ ✓.

- **$\Phi\Psi = \mathrm{id}$**: $\Psi(u)_{X}(1_{X}) = F(1_{X})(u) = u$ ✓.

- **$\Psi\Phi = \mathrm{id}$**: given $\alpha$ and $f : X\to Y$, use the naturality of $\alpha$ (applied to $f$)

> continued in nodes/lem.yoneda.en.3.md
