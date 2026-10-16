# 幂级数的逐项运算　`thm.power-series-analytic`
定理：收敛区间内幂级数可逐项求导与积分
layer 23 · 定理 · 函数列、幂级数与初等函数 · 分析学
[在星图里打开](../#n=thm.power-series-analytic)　·　[节点索引](../index.md)

设 $f(x) := \sum_{n=0}^{\infty} a_n (x - x_0)^{n}$ 的收敛半径为 $R > 0$。则：

- 在 $|x - x_0| < R$ 内 $f$ 连续，而且在每个 $[x_0 - r, x_0 + r]$（$r < R$）上**一致收敛**；
- $f$ 在 $|x - x_0| < R$ 内可导，且**逐项求导**给出导数，收敛半径仍是 $R$：

$$f'(x) = \sum_{n=1}^{\infty} n\, a_n (x - x_0)^{n-1}$$

- 同理可以**逐项积分**，收敛半径仍是 $R$。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.power-series-analytic.2.md](./thm.power-series-analytic.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 8

> 说明见 `notes/thm.power-series-analytic.md`

引用：`thm.power-series-analytic`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
