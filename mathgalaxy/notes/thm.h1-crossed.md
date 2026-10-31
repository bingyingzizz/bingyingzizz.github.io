# 一维上同调与交叉同态　`thm.h1-crossed`　·　说明
根 `../`

**读法**：交叉同态是「差一个作用」的同态 —— 作用平凡时它退化成普通的群同态 $G \to M$，主交叉同态则全部坍成 $0$。

**证明只用一行**：在标准上链复形里 $C^{1}(G, M)$ 就是全体映射 $G \to M$，而

$$\delta c(g_{1}, g_{2}) = g_{1} c(g_{2}) - c(g_{1} g_{2}) + c(g_{1}),$$

所以 $\delta c = 0 \iff c(g_{1}g_{2}) = c(g_{1}) + g_{1}c(g_{2})$，即 $Z^{1}$ 恰是交叉同态。又 $C^{0} = M$、$(\delta^{0}m)(g) = g m - m$，故 $\operatorname{im}\delta^{0} = B^{1}$。于是 $H^{1} = \ker\delta^{1}/\operatorname{im}\delta^{0} = Z^{1}/B^{1}$。∎

**两个立刻能用的**：
- 作用**平凡**时 $Z^{1} = \operatorname{Hom}(G, M)$ 而 $B^{1} = 0$，于是 $H^{1}(G, M) = \operatorname{Hom}(G, M)$。
- $G$ **有限**、$M$ 无挠且作用平凡 $\implies H^{1}(G, M) = 0$（有限群到无挠群没有非同态）。

> 续见 notes/thm.h1-crossed.2.md
