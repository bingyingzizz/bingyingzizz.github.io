# 凝聚判别法 + 几何级数 $\implies$ p-级数
`imp.p-series` · 推出 · strong 边 · 根 `../`

`thm.cauchy-condensation` Cauchy 凝聚判别法 + `thm.geometric-series` 几何级数 → `thm.p-series` p-级数

**$p \le 0$**：$1/n^{p} \ge 1$，通项不趋于 $0$，发散。

**$p > 0$**：$a_n = n^{-p}$ 非负且单调递减。由 Cauchy 凝聚判别法（`thm.cauchy-condensation`），

$$\sum_{n \ge 1} \frac{1}{n^{p}} \ \text{收敛} \iff \sum_{k \ge 0} 2^{k} \cdot \frac{1}{(2^{k})^{p}} = \sum_{k \ge 0} \left(2^{1-p}\right)^{k} \ \text{收敛}.$$

右边是公比 $q = 2^{1-p}$ 的几何级数。由 `thm.geometric-series`，它收敛 $\iff$ $q < 1$ $\iff$ $2^{1-p} < 1$ $\iff$ $p > 1$。$\blacksquare$
