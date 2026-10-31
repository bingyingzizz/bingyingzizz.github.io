# 积分的保序与估计　`prop.integral-order`
命题：保序性、绝对值不等式与基本估计
layer 17 · 命题 · Riemann 积分 · 数学分析
[在星图里打开](../#n=prop.integral-order)　·　[节点索引](../index.md)

设 $f, g$ 在 $[a, b]$ 上可积。

- **保序**：若 $f(x) \le g(x)$ 处处成立，则 $\int_a^b f \le \int_a^b g$；特别地 $f \ge 0 \implies \int_a^b f \ge 0$。
- **绝对值**：$|f|$ 可积，且

$$\Bigl| \int_a^b f \Bigr| \le \int_a^b |f|$$

- **基本估计**：若 $|f(x)| \le M$ 处处成立，则 $\bigl| \int_a^b f \bigr| \le M\,(b - a)$。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.ftc-riemann-part1`](../nodes/thm.ftc-riemann-part1.md) 变上限积分的导数

- …另有出边，续页见 [nodes/prop.integral-order.3.md](./prop.integral-order.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/prop.integral-order.2.md](./prop.integral-order.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 6

> 说明见 `notes/prop.integral-order.md`

引用：`prop.integral-order`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
