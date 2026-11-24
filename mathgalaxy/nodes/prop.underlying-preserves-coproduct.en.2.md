# The Underlying Functor Preserves Coproducts　`prop.underlying-preserves-coproduct`
English entry · root `../`
[in graph](../#n=prop.underlying-preserves-coproduct)　·　[Chinese page (authoritative)](./prop.underlying-preserves-coproduct.md)

$$\underline{X} \;=\; \coprod_{i \in I} \underline{X_{i}}.$$

## Notes · **draft**
**Proof.** The functor $X \mapsto \underline{X}$ ($\underline{X}(S) = C(S, X)$) is a **left adjoint** of $X \mapsto X(\cdot)$ ✓; left adjoints preserve colimits, in particular coproducts ✓.

So sending a disjoint union of topological spaces into $\mathrm{Cond}$ gives the coproduct ✓ (the coproduct in $\mathrm{Cond}$ is "take the pointwise disjoint union, then sheafify", which is exactly the sheafification of $C(S, \coprod_i X_i)$) ✓.

∎

> continued in nodes/prop.underlying-preserves-coproduct.en.3.md
