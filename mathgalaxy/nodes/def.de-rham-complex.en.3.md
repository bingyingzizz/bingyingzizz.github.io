# de Rham Complex and Cohomology　`def.de-rham-complex`
English entry · root `../`
[in graph](../#n=def.de-rham-complex)　·　[Chinese page (authoritative)](./def.de-rham-complex.md)

$$B^{k}(M) := \operatorname{im}\bigl(\mathrm{d} : \Omega^{k-1}(M) \to \Omega^{k}(M)\bigr),$$

(with $\Omega^{-1} := 0$, so $B^{0} = 0$). The **de Rham cohomology group** is the quotient

$$H^{k}_{\mathrm{dR}}(M) := Z^{k}(M) / B^{k}(M).$$

Given a smooth map $F : N \to M$, pullback gives a linear map $F^{\ast} : H^{k}_{\mathrm{dR}}(M) \to H^{k}_{\mathrm{dR}}(N)$ (because $F^{\ast}\mathrm{d} = \mathrm{d}F^{\ast}$, see `prop.pullback-form-manifold`), and $(G \circ F)^{\ast} = F^{\ast} \circ G^{\ast}$.

Thus $H^{k}_{\mathrm{dR}}$ is a **functor** on the category of smooth manifolds.

> continued in nodes/def.de-rham-complex.en.4.md
