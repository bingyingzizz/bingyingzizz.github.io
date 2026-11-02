# 积分中值定理　`thm.mean-value-integral`
定理：积分中值定理（第一形式）
layer 20 · 定理 · Riemann 积分 · 数学分析
[在星图里打开](../#n=thm.mean-value-integral)　·　[节点索引](../index.md)

设 $f$ 在 $[a, b]$ 上连续、$g$ 可积且**不变号**（$g \ge 0$ 或 $g \le 0$）。则存在 $\xi \in [a, b]$ 使

$$\int_a^b f g = f(\xi) \int_a^b g$$

取 $g \equiv 1$ 得：存在 $\xi \in [a, b]$ 使 $\int_a^b f = f(\xi)(b - a)$，此时 $f(\xi)$ 称为 $f$ 在 $[a, b]$ 上的**平均值**。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.ftc-riemann-part2`](../nodes/thm.ftc-riemann-part2.md) Newton–Leibniz 公式

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.mean-value-integral.2.md](./thm.mean-value-integral.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 6

> 说明见 `notes/thm.mean-value-integral.md`

引用：`thm.mean-value-integral`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
