# 同伦不变性　`thm.homotopy-invariance`　·　说明
根 `../`

**边界计算。** 把 $\tau_{i}$ 的顶点依次记为 $u_{0}, \ldots, u_{n+1}$（即 $v_{0}, \ldots, v_{i}, w_{i}, \ldots, w_{n}$）。在 $\partial\tau_{i}$ 中，删去第 $r$ 个顶点的面带符号 $(-1)^{r}$。逐项看 $\partial P_{n}(\sigma)$：

① **内部面。** 从 $\tau_{i}$ 删去 $w_{i}$（位置 $i+1$，符号 $(-1)^{i+1}$）与从 $\tau_{i+1}$ 删去 $v_{i+1}$（位置 $i+1$，符号 $(-1)^{i+1}$）得到同一个面 $[v_{0}, \ldots, v_{i}, w_{i+1}, \ldots, w_{n}]$。它在 $\partial P_{n}(\sigma)$ 中的两个系数分别是 $(-1)^{i}(-1)^{i+1} = -1$ 与 $(-1)^{i+1}(-1)^{i+1} = +1$，相消。$i = 0, \ldots, n-1$ 共 $n$ 对面全部消掉。

② **两端。** $\tau_{0}$ 删去 $v_{0}$（符号 $+1$）得 $[w_{0}, \ldots, w_{n}]$，即 $g \circ \sigma$；$\tau_{n}$ 删去 $w_{n}$（位置 $n+1$，符号 $(-1)^{n+1}$）得 $[v_{0}, \ldots, v_{n}]$，即 $f \circ \sigma$，再乘 $P_{n}$ 的系数 $(-1)^{n}$，得 $-f \circ \sigma$。

> 续见 notes/thm.homotopy-invariance.3.md
