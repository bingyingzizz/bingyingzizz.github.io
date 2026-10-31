# Cauchy 列　`def.cauchy-sequence`
Cauchy 列
layer 14 · 定义 · 实数与极限 · 数学分析
[在星图里打开](../#n=def.cauchy-sequence)　·　[节点索引](../index.md)

实数列 $\{x_n\}$ 是 **Cauchy 列**，当且仅当

$$\forall \varepsilon > 0,\ \exists N,\ \forall m, n \ge N :\ |x_m - x_n| < \varepsilon$$

即：只要取得足够靠后，**任意两项**都互相接近。

## 为什么成立（入边，证明在 proofs/）
- [`def.abs`](../nodes/def.abs.md) 绝对值 |x|：用到了定义 绝对值 |x|　[proofs/def-link.abs-cauchy-seq.md](../proofs/def-link.abs-cauchy-seq.md)

- …另有入边，续页见 [nodes/def.cauchy-sequence.2.md](./def.cauchy-sequence.2.md)

## 它能推出什么 / 谁在用它
- 被 [`thm.cauchy-criterion`](../nodes/thm.cauchy-criterion.md) Cauchy 收敛准则 用

refs: Rudin, Principles of Mathematical Analysis, Ch. 3

> 说明见 `notes/def.cauchy-sequence.md`

引用：`def.cauchy-sequence`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
