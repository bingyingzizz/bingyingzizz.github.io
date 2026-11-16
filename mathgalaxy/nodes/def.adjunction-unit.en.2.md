# Unit and Counit of an Adjunction　`def.adjunction-unit`
English entry · root `../`
[in graph](../#n=def.adjunction-unit)　·　[Chinese page (authoritative)](./def.adjunction-unit.md)

$$\eta_{X} := \Phi_{X, F(X)}(1_{F(X)}) : X \to G F(X)$$

$$\varepsilon_{Y} := \Phi_{G(Y), Y}^{-1}(1_{G(Y)}) : F G(Y) \to Y$$

They satisfy the **triangle identities**

$$\varepsilon_{F(X)} \circ F(\eta_{X}) = 1_{F(X)}, \qquad G(\varepsilon_{Y}) \circ \eta_{G(Y)} = 1_{G(Y)}$$

Conversely, given $\eta : 1_{\mathcal{C}} \implies G \circ F$ and $\varepsilon : F \circ G \implies 1_{\mathcal{D}}$ satisfying these two identities, they determine a pair of adjoint functors uniquely.

> continued in nodes/def.adjunction-unit.en.3.md
