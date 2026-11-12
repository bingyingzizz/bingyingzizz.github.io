# Yoneda lemma　`lem.yoneda`
English entry · root `../`
[in graph](../#n=lem.yoneda)　·　[Chinese page (authoritative)](./lem.yoneda.md)

$$\alpha_{Y}\circ h^{X}(f) = F(f)\circ \alpha_{X} \;\implies\; \alpha_{Y}(f) = F(f)\bigl(\alpha_{X}(1_{X})\bigr) = \Psi\bigl(\Phi(\alpha)\bigr)_{Y}(f) ✓$$

- **Naturality**: $\Phi$ is natural in $F$ (along $\beta : F\to G$ both sides become $\beta_{X}\circ(-)$) ✓; and natural in $X$ (along $k : X'\to X$, precomposition with $h^{k}$ corresponds to $F(k)$) ✓.

Hence $\operatorname{Hom}(h^{X}, F) \cong F(X)$, and the bijection is $\alpha\mapsto\alpha_{X}(1_{X})$ ✓; dually (taking $\mathcal{C}^{\mathrm{op}}$) one gets the presheaf version $\operatorname{Hom}(h_{X}, T) \cong T(X)$ ✓.

∎

> continued in nodes/lem.yoneda.en.4.md
