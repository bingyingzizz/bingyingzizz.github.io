# Čech Functor　`def.cech-functor`
English entry · root `../`
[in graph](../#n=def.cech-functor)　·　[Chinese page (authoritative)](./def.cech-functor.md)

> English: **draft** · machine-drafted, pending author review; the Chinese page is authoritative.

layer 16 · definition · cluster Sheaves and Topologies (`cat.sheaf`) · Category Theory

## Statement · **draft**
On a site $\mathcal{C}$, the **Čech functor** $\widehat{H}$ is defined on presheaves by

$$\widehat{H}(T)(X) \;:=\; \varinjlim_{R \in J(X)} \operatorname{Hom}(R, T)$$

(since $J(X)$ is a filter, this is a **filtered colimit**). From $h_{X} \in J(X)$ and $\operatorname{Hom}(h_{X}, T) \cong T(X)$ one obtains a natural map $T \to \widehat{H}(T)$.

> continued in nodes/def.cech-functor.en.2.md
