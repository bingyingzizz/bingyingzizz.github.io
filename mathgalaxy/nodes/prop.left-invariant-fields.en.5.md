# Left-Invariant Vector Fields　`prop.left-invariant-fields`
English entry · root `../`
[in graph](../#n=prop.left-invariant-fields)　·　[Chinese page (authoritative)](./prop.left-invariant-fields.md)

Thus "Lie group $\to$ Lie algebra" is a functor: $\mathrm{Lie}(G)$.

## Notes · **draft**
**Why evaluation is a bijection**: left-invariance determines the value of $X$ at $gh$ **uniquely** from $X_{h}$; taking $h = e$ shows $X$ is determined by $X_{e}$ (injectivity). Conversely, given $v \in \mathfrak{g}$, put $X_{g} := \mathrm{d}(L_{g})_{e}(v)$; then $X_{gh} = \mathrm{d}(L_{gh})_{e}(v) = \mathrm{d}(L_{g})_{h}\bigl(\mathrm{d}(L_{h})_{e}(v)\bigr) = \mathrm{d}(L_{g})_{h}(X_{h})$ (chain rule plus $L_{gh} = L_{g} \circ L_{h}$), so it is left-invariant (surjectivity).

> continued in nodes/prop.left-invariant-fields.en.6.md
