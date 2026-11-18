# Mayer–Vietoris sequence in homology　`thm.mv-homology`
English entry · root `../`
[in graph](../#n=thm.mv-homology)　·　[Chinese page (authoritative)](./thm.mv-homology.md)

$$c_{p} := \operatorname{sd}_{p} - \operatorname{id}_{p} - t_{p-1}(\partial\Delta^{p}),\qquad t_{p} := [b_{p},\ c_{p}],$$

where $\operatorname{id}_{p}$ is the identity $p$-simplex. Induction on $p$ gives $\partial c_{p} = 0$ using $\partial\partial = 0$ and the inductive hypothesis. Thus $\partial t_{p} = c_{p}$, that is,

$$\partial t_{p} + t_{p-1}(\partial\Delta^{p}) = \operatorname{sd}_{p} - \operatorname{id}_{p}.$$

In the base case $p = 0$, we have $\operatorname{sd}_{0} = \operatorname{id}_{0}$ and $t_{0} = 0$.

> continued in nodes/thm.mv-homology.en.7.md
