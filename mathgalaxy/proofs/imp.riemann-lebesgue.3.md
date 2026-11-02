# 振幅判据 + 零测集 $\implies$ Lebesgue 判据
`imp.riemann-lebesgue` · 推出 · strong 边 · 根 `../`

`thm.riemann-criterion` 可积的振幅判据 + `def.null-set` 零集与完备 → `thm.riemann-lebesgue-criterion` 可积 ⟺ 不连续点零测

由振幅判据可积。

**($\implies$)** 设 $f$ 可积。对每个 $k \ge 1$ 取分割 $P_k$ 使 $\sum_i \omega_i \Delta x_i < 1 / k$。把「$\omega_i > 1/k$」的那些小区间记为 $J_{k,1}, \ldots$，则

$$\sum_j |J_{k, j}| \le k \sum_j \omega_j |J_{k,j}| \le k \cdot \frac{1}{k} = 1$$

更精细地取 $\varepsilon / k$ 代替 $1/k$，可得 $\sum_j |J_{k,j}| < \varepsilon$。所以集合 $D_k := \bigcup_j J_{k,j}$ 是零测集的「$\varepsilon$-近似」。

> 续见 proofs/imp.riemann-lebesgue.4.md
