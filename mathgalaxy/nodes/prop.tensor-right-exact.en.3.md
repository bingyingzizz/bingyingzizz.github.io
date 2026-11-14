# Right Exactness of the Tensor Functor　`prop.tensor-right-exact`
English entry · root `../`
[in graph](../#n=prop.tensor-right-exact)　·　[Chinese page (authoritative)](./prop.tensor-right-exact.md)

## Notes · **draft**
**Proof (adjunction route, fastest)**: by `thm.hom-tensor-adjunction-mod`, $(-) \otimes_{R} N \dashv \operatorname{Hom}_{\mathbb{Z}}(N, -)$ (the target is $\mathbf{Ab}$, and the right adjoint takes $\mathbb{Z}$-linear homs).

A left adjoint preserves all colimits, and a cokernel is the colimit of a two-term diagram, so $(-) \otimes N$ preserves cokernels — for an additive functor "preserves cokernels" is exactly "sends short exact sequences to the exact sequence $M_{1} \otimes N \to M \otimes N \to M_{2} \otimes N \to 0$" ✓.

> continued in nodes/prop.tensor-right-exact.en.4.md
