# Naturality of the Adjunction Bijection　`prop.adjunction-naturality`
English entry · root `../`
[in graph](../#n=prop.adjunction-naturality)　·　[Chinese page (authoritative)](./prop.adjunction-naturality.md)

## Statement · **draft**
The naturality of the adjunction bijection $\Phi_{X, X'} : \operatorname{Hom}\bigl(F(X), X'\bigr) \cong \operatorname{Hom}\bigl(X, G(X')\bigr)$ says: for $g : Y \to X$, $g' : X' \to Y'$ and $f : F(X) \to X'$, one has $\Phi\bigl(g' \circ f \circ F(g)\bigr) = G(g') \circ \Phi(f) \circ g$.

## Notes · **draft**
**Proof.** Substitute $\Phi(f) = G(f) \circ \eta_{X}$ and $\Phi^{-1}(h) = \varepsilon_{X'} \circ F(h)$ ✓; the identity follows from naturality of the unit and counit ✓. ∎

> continued in nodes/prop.adjunction-naturality.en.3.md
