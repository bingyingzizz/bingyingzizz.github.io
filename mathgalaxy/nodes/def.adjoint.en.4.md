# Adjoint Functors　`def.adjoint`
English entry · root `../`
[in graph](../#n=def.adjoint)　·　[Chinese page (authoritative)](./def.adjoint.md)

Two rules of computation:

- **duality**: $F \dashv G$ $\iff$ $G^{\mathrm{op}} \dashv F^{\mathrm{op}}$ (on $\mathcal{C}^{\mathrm{op}} \to \mathcal{D}^{\mathrm{op}}$).
- **composition**: $F \dashv G$ and $F' \dashv G'$ $\implies$ $F' \circ F \dashv G \circ G'$, because

$$\operatorname{Hom}(F'F(X), Y) \cong \operatorname{Hom}(F(X), G'(Y)) \cong \operatorname{Hom}(X, GG'(Y))$$

> Proofs of the edges are still Chinese only: `proofs/`; the Chinese page remains authoritative.

## Elsewhere
Wikipedia: https://en.wikipedia.org/wiki/Adjoint_functors · nLab: https://ncatlab.org/nlab/show/adjoint+functor


Cite: `def.adjoint` (content v0.9.3) · CC BY 4.0: [LICENSE.txt](../LICENSE.txt)

