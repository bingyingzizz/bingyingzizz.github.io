# 极限的四则运算与保序性　`prop.limit-arithmetic`
命题：极限的四则运算、保序性与绝对值（Algebra of Limits）
layer 15 · 命题 · 实数与极限 · 分析学
[在星图里打开](../#n=prop.limit-arithmetic)　·　[节点索引](../index.md)

设 $x_n \to x$、$y_n \to y$（有限），$c \in \mathbb{R}$。则

- $x_n \pm y_n \to x \pm y$，$c\,x_n \to c\,x$，$x_n y_n \to xy$；
- 若 $y \ne 0$，则当 $n$ 充分大时 $y_n \ne 0$，且 $x_n / y_n \to x / y$；
- $|x_n| \to |x|$；
- **保序性**：若存在 $N_0$ 使 $n \ge N_0$ 时 $x_n \le y_n$，则 $x \le y$。

函数版逐字照搬（把「存在 $N$」换成「存在 $\delta$」）。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/prop.limit-arithmetic.2.md](./prop.limit-arithmetic.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 3

> 说明见 `notes/prop.limit-arithmetic.md`

引用：`prop.limit-arithmetic`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
