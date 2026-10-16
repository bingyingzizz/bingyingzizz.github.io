# 积分的线性与区间可加　`prop.integral-linear`
命题：积分的线性性与区间可加性
layer 19 · 命题 · Riemann 积分 · 分析学
[在星图里打开](../#n=prop.integral-linear)　·　[节点索引](../index.md)

设 $f, g$ 在 $[a, b]$ 上可积，$c \in \mathbb{R}$。则 $f + g$ 与 $cf$ 都可积，且

$$\int_a^b (f + g) = \int_a^b f + \int_a^b g, \qquad \int_a^b cf = c\int_a^b f$$

并且对 $a < c < b$：$f$ 在 $[a, b]$ 上可积，当且仅当它在 $[a, c]$ 与 $[c, b]$ 上分别可积，此时

$$\int_a^b f = \int_a^c f + \int_c^b f$$

## 它能推出什么 / 谁在用它
- ⇒ [`thm.ftc-riemann-part1`](../nodes/thm.ftc-riemann-part1.md) 变上限积分的导数

- …另有出边，续页见 [nodes/prop.integral-linear.3.md](./prop.integral-linear.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/prop.integral-linear.2.md](./prop.integral-linear.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 6

> 说明见 `notes/prop.integral-linear.md`

引用：`prop.integral-linear`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
