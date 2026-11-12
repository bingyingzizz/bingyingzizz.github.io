# group homomorphism　`def.group-hom`
English entry · root `../`
[in graph](../#n=def.group-hom)　·　[Chinese page (authoritative)](./def.group-hom.md)

## Notes · **draft**
**A homomorphism automatically preserves the identity and inverses**: $\varphi(e) = e'$, $\varphi(a^{-1}) = \varphi(a)^{-1}$ (obtained by cancelling in $\varphi(e) = \varphi(e e) = \varphi(e)\varphi(e)$). So only one equation is needed in the definition.

**Kernel and image are subgroups**: $\operatorname{im}\varphi \le G'$ is obvious; $\ker\varphi \le G$ follows from $\varphi(ab^{-1}) = \varphi(a)\varphi(b)^{-1} = e'$.

⭐ **The kernel is moreover a normal subgroup**: for $k \in \ker\varphi$ and $g \in G$,

$$\varphi(g k g^{-1}) = \varphi(g)\, e'\, \varphi(g)^{-1} = e',$$

> continued in nodes/def.group-hom.en.3.md
