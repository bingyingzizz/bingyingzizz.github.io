# 一致 Cauchy 列　`def.uniform-cauchy`
一致 Cauchy 列
layer 16 · 定义 · 函数列、幂级数与初等函数 · 数学分析
[在星图里打开](../#n=def.uniform-cauchy)　·　[节点索引](../index.md)

称 $\{f_n\}$ 是**一致 Cauchy 列**，当且仅当

$$\forall \varepsilon > 0,\ \exists N,\ \forall m, n \ge N,\ \forall x \in X :\ |f_m(x) - f_n(x)| < \varepsilon$$

即 $\sup_{x} |f_m(x) - f_n(x)| \to 0$（$m, n \to \infty$）。

## 为什么成立（入边，证明在 proofs/）
- [`def.abs`](../nodes/def.abs.md) 绝对值 |x|：用到了定义 绝对值 |x|　[proofs/def-link.abs-uniform-cauchy.md](../proofs/def-link.abs-uniform-cauchy.md)

- …另有入边，续页见 [nodes/def.uniform-cauchy.2.md](./def.uniform-cauchy.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.uniform-cauchy.3.md](./def.uniform-cauchy.3.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 7

> 说明见 `notes/def.uniform-cauchy.md`

引用：`def.uniform-cauchy`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
