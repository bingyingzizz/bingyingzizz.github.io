# 变上限积分的导数　`thm.ftc-riemann-part1`
定理（第一基本定理）：变上限积分及其导数
layer 20 · 定理 · Riemann 积分 · 数学分析
[在星图里打开](../#n=thm.ftc-riemann-part1)　·　[节点索引](../index.md)

设 $f$ 在 $[a, b]$ 上可积，定义

$$F(x) := \int_a^x f, \qquad x \in [a, b]$$

则：

**(a)** $F$ 在 $[a, b]$ 上连续；事实上若 $|f| \le M$ 则 $|F(y) - F(x)| \le M|y - x|$（即 $F$ 是 Lipschitz 的）。

**(b)** 若 $f$ 在 $x_0 \in (a, b)$ 处连续，则 $F$ 在 $x_0$ 处可导，且

$$F'(x_0) = f(x_0)$$

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.ftc-riemann-part1.2.md](./thm.ftc-riemann-part1.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 6

> 说明见 `notes/thm.ftc-riemann-part1.md`

引用：`thm.ftc-riemann-part1`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
