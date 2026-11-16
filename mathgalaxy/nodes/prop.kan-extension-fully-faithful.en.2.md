# Kan Extension along a Fully Faithful Functor　`prop.kan-extension-fully-faithful`
English entry · root `../`
[in graph](../#n=prop.kan-extension-fully-faithful)　·　[Chinese page (authoritative)](./prop.kan-extension-fully-faithful.md)

## Notes · **draft**
**Proof.** Use the pointwise formula $p_{!}F(X') = \varinjlim_{p(X) \to X'} F(X)$ ✓.

Take $X' = p(X_{0})$: the comma category $p \downarrow p(X_{0})$ has $1_{p(X_{0})}$ as a **terminal object** ($p$ is fully faithful, so morphisms $p(X_0)$ to $p(X)$ come uniquely from $X_0 \to X$) ✓, and a colimit over a category with a terminal object is the value at that object ✓, so $(p_{!}F)(p(X_{0})) \cong F(X_{0})$ ✓.

∎

> Proofs of the edges are still Chinese only: `proofs/`; the Chinese page remains authoritative.


Cite: `prop.kan-extension-fully-faithful` (content v0.9.3) · CC BY 4.0: [LICENSE.txt](../LICENSE.txt)

