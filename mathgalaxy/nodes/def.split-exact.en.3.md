# split short exact sequence　`def.split-exact`
English entry · root `../`
[in graph](../#n=def.split-exact)　·　[Chinese page (authoritative)](./def.split-exact.md)

**Proof.** Write $i := i_{1}$ and $p := i_{2}$. Then $i$ is monic, $p$ is epic, and $\operatorname{im} i = \ker p$.
- **Has a section $\implies$ splits**: Suppose $p s = 1_{M_{2}}$. Then $p(1_{M} - s p) = p - p s p = 0$, so $1_{M} - sp$ lies in $\ker p = \operatorname{im} i$. Thus there exists $r : M \to M_{1}$ such that
$$i r = 1_{M} - s p.$$
Since $i$ is monic, $i(r i) = (1_{M} - sp)\,i = i - s(p i) = i$ (using $p i = 0$), so $r i = 1_{M_{1}}$ ✓.

> continued in nodes/def.split-exact.en.4.md
