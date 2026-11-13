# Boundary Operator　`def.boundary-operator`
English entry · root `../`
[in graph](../#n=def.boundary-operator)　·　[Chinese page (authoritative)](./def.boundary-operator.md)

$$I^{k}_{(i,\alpha)} : I^{k-1}\longrightarrow I^{k},\qquad (x^{1},\ldots,x^{k-1})\longmapsto(x^{1},\ldots,x^{i-1},\alpha,x^{i},\ldots,x^{k-1}).$$

For a $k$-cube $c$, write $c_{(i,\alpha)} := c\circ I^{k}_{(i,\alpha)}$; it is a $(k-1)$-cube, called the **$(i,\alpha)$ face** of $c$.

**Boundary operator** $\partial$ first sends a cube to the "signed sum of its faces", then extends linearly to chains:

$$\partial c := \sum_{i=1}^{k}\sum_{\alpha=0}^{1}(-1)^{i+\alpha}\,c_{(i,\alpha)},\qquad \partial\Bigl(\sum_{l}n_{l}c_{l}\Bigr) := \sum_{l}n_{l}\,\partial c_{l}.$$

> continued in nodes/def.boundary-operator.en.3.md
