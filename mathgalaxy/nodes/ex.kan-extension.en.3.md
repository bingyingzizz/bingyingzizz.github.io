# Kan extensions: colimits and right adjoints　`ex.kan-extension`
English entry · root `../`
[in graph](../#n=ex.kan-extension)　·　[Chinese page (authoritative)](./ex.kan-extension.md)

## Statement · **reviewed**
**(1)** A diagram $D : I \to \mathcal{C}$ has a colimit $X$ $\iff$ the left Kan extension $p_{!}D : \mathbf{1} \to \mathcal{C}$ along the projection $p : I \to \mathbf{1}$ exists, and its value is

$$(p_{!}D)(\ast) = \varinjlim_{i \in I} D(i) = X$$

**(2)** A functor $F : \mathcal{C} \to \mathcal{D}$ has a right adjoint $G$ $\iff$ the left Kan extension of the identity functor $1_{\mathcal{C}}$ along $F$ exists, and then

$$G = F_{!}1_{\mathcal{C}}, \qquad \operatorname{Hom}(F_{!}1_{\mathcal{C}},\ G) \cong \operatorname{Hom}(1_{\mathcal{C}},\ G \circ F)$$

> 续见 nodes/ex.kan-extension.en.4.md
