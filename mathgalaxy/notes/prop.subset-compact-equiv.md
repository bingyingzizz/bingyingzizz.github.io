# 子集的紧性刻画　`prop.subset-compact-equiv`　·　说明
根 `../`

⚠ **「$X$ 完备」这个前提不能省。** 理由是中间那一步：$A$ 作为子空间完备 $\iff A$ 在 $X$ 中闭 —— 这一步要用 $X$ 完备。少了它，$A$ 闭 $A$ 全有界推不出 $A$ 紧。

这也是 **Heine–Borel** 的推广：$\mathbb{R}^{n}$ 完备，而在 $\mathbb{R}^{n}$ 中 $A$ 有界 $\iff A$ 全有界，于是「有界闭集紧」正是它的特例。

**证明。**
- **$\implies$**：$A$ 紧 $\implies$ $A$ 在 $X$ 中闭（上一条）。

全有界：任给 $\varepsilon > 0$，$\{B(a,\varepsilon)\cap A\}_{a\in A}$ 是 $A$（带子空间度量）的开覆盖，紧性给有限子覆盖，那有限个中心就是 $\varepsilon$-网 ✓。
- **$\Longleftarrow$**：设 $A$ 闭、全有界。

先看**完备性**：$X$ 完备、$A$ 闭，则 $A$ 里的 Cauchy 列在 $X$ 里收敛到某点，极限落在闭的 $A$ 里，故 $A$ 作为子空间完备 ✓。

再证**紧**：全有界给可数稠密子集，于是 $A$ 里的任意序列可以用「逐层取 $2^{-n}$-网 + 抽屉原理」抽出 Cauchy 子列；

完备性让这个子列收敛 ✓。

> 续见 notes/prop.subset-compact-equiv.2.md
