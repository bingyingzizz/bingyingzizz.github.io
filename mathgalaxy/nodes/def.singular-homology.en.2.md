# singular homology groups　`def.singular-homology`
English entry · root `../`
[in graph](../#n=def.singular-homology)　·　[Chinese page (authoritative)](./def.singular-homology.md)

it need **not** be injective, need not be an embedding, may self-intersect, and may collapse all of $\Delta^{p}$ to a point. The free abelian group on all singular $p$-simplices is denoted $S_{p}(X)$ (the **singular chain group**). The boundary operator is given by the face maps:

$$\partial_{p}\sigma := \sum_{i=0}^{p} (-1)^{i}\,\sigma \circ d_{i},$$

and again satisfies $\partial^{2} = 0$ (because $d_{j}d_{i} = d_{i}d_{j-1}$ is literally the same identity as in the simplicial case). Hence

$$H_{p}(X) := \ker\partial_{p}\, \big/\, \operatorname{im}\partial_{p+1}$$

> continued in nodes/def.singular-homology.en.3.md
