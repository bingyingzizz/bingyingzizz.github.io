# 同伦不变性　`thm.homotopy-invariance`　·　说明
根 `../`

**证明（棱柱算子）**：只需造一条链同伦（`def.chain-homotopy`）$P_{n} : S_{n}(X) \to S_{n+1}(Y)$，使 $\partial P + P\partial = g_{\#} - f_{\#}$。

**几何图像**：一个奇异单形 $\sigma : \Delta^{n} \to X$ 与 $F$ 一起给出「棱柱」$F \circ (\sigma \times \mathrm{id}) : \Delta^{n} \times [0,1] \to Y$。棱柱有 $n+2$ 个面：$n+1$ 个「侧面」加底（$f \circ \sigma$）和顶（$g \circ \sigma$）。把 $\Delta^{n} \times [0,1]$ 三角剖分成 $n+1$ 个 $\Delta^{n+1}$，按定向取侧面之和：

$$P_{n}(\sigma) := \sum_{i=0}^{n} (-1)^{i}\, F \circ (\sigma \times \mathrm{id}) \circ \tau_{i},$$

其中 $\tau_{i} := [v_{0}, \ldots, v_{i}, w_{i}, \ldots, w_{n}]$ 是棱柱剖分出的第 $i$ 块。

**关键计算**：对 $P$ 取边缘 $\partial$，每个「内部面」被相邻两个三角块各算一次、定向相反 $\implies$ 抵消；剩下「底 + 顶 + 一圈侧面」。而那一圈侧面恰好是 $P(\partial\sigma)$（因为 $\partial\sigma$ 的单形正好对应棱柱的侧面）。于是

> 续见 notes/thm.homotopy-invariance.2.md
