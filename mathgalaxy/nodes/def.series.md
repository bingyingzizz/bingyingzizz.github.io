# 级数收敛　`def.series`
级数 $\sum a_n$（Series）
layer 14 · 定义 · 实数与极限 · 分析学
[在星图里打开](../#n=def.series)　·　[节点索引](../index.md)

给定数列 $\{a_n\}$，令**部分和** $s_N := \sum_{n=1}^{N} a_n$。

称级数 $\sum_{n=1}^{\infty} a_n$ **收敛**，当且仅当部分和数列 $\{s_N\}$ 收敛，此时记

$$\sum_{n=1}^{\infty} a_n := \lim_{N \to \infty} s_N$$

**非负项级数**（$a_n \ge 0$）特别干净：部分和递增，于是
> 陈述续见 [nodes/def.series.2.md](./def.series.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.series.3.md](./def.series.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.series.4.md](./def.series.4.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 3

## 说明
⭐ 测度的**可数可加**、积分的**逐项**性质，用的都是非负项级数这一行：非负就不必担心条件收敛与重排。

⚠ 收敛级数**可以重排**的只有绝对收敛的情形；条件收敛的级数重排后可能收敛到别的值（Riemann 重排定理）。

引用：`def.series`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
