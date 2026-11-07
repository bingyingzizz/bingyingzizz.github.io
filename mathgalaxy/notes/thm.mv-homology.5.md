# Mayer–Vietoris（同调）　`thm.mv-homology`　·　说明
根 `../`

**满射**：任取闭链 $z$。$z$ 只有有限个单纯形，取 $M$ 使每个 $\operatorname{Sd}^{M}(\sigma)$（$\sigma$ 跑遍 $z$ 的单纯形）都小，则 $\operatorname{Sd}^{M} z \in S^{\mathcal{U}}_{*}(X)$，且 $\operatorname{Sd}^{M} z - z = \partial T_{M} z$，故 $\iota_{*}[\operatorname{Sd}^{M} z] = [z]$。

**单射**：设 $z \in S^{\mathcal{U}}_{p}(X)$ 是闭链且 $z = \partial b$（$b \in S_{p+1}(X)$）。取 $M$ 同时使 $z$、$T z$、$b$ 的所有单纯形的 $M$ 次重分都小。则 $z = \operatorname{Sd}^{M} z - \partial T_{M} z$，其中 $\operatorname{Sd}^{M} z$ 与 $T_{M} z$ 都在小链复形里；而 $\operatorname{Sd}^{M} z = \operatorname{Sd}^{M}\partial b = \partial(\operatorname{Sd}^{M} b)$，$\operatorname{Sd}^{M} b$ 也小。于是在 $H_{p}(S^{\mathcal{U}}_{*}(X))$ 中 $[z] = [\operatorname{Sd}^{M} z] = 0$。

**第五步：拆成两块。** 一条链小，当且仅当它属于 $S_{*}(U) + S_{*}(V)$。于是有链复形的短正合列

> 续见 notes/thm.mv-homology.6.md
