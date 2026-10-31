# 有理指数与实数指数幂　`def.real-power`
有理指数与实数指数幂
layer 15 · 定义 · 实数的运算与不等式 · 数学分析
[在星图里打开](../#n=def.real-power)　·　[节点索引](../index.md)

设 $a > 0$。

**(i) 有理指数。** 对 $r = m/n$（$m \in \mathbb{Z}$，$n \ge 1$）定义

$$a^{r} := \sqrt[n]{a^{m}}.$$

这与 $m/n$ 的表示无关：若 $m/n = m'/n'$，则 $mn' = m'n$，于是 $(a^{m})^{n'} = (a^{m'})^{n}$，由 n 次方根的唯一性两者相等。

**(ii) 实数指数。** 对 $x \in \mathbb{R}$：当 $a > 1$ 时

$$a^{x} := \sup\{\, a^{q} : q \in \mathbb{Q},\ q < x \,\};$$

当 $0 < a < 1$ 时 $a^{x} := 1/(1/a)^{x}$；$a = 1$ 时 $a^{x} := 1$。

## 它能推出什么 / 谁在用它
- 被 [`lem.young-inequality`](../nodes/lem.young-inequality.md) Young 不等式 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.real-power.2.md](./def.real-power.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 1

> 说明见 `notes/def.real-power.md`

引用：`def.real-power`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
