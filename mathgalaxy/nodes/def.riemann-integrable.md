# Riemann 可积　`def.riemann-integrable`
Riemann 可积与积分 $\int_a^b f$
layer 16 · 定义 · Riemann 积分 · 分析学
[在星图里打开](../#n=def.riemann-integrable)　·　[节点索引](../index.md)

设 $f$ 在 $[a, b]$ 上有界。称 $f$ **Riemann 可积**，当且仅当存在实数 $I$ 使

$$\forall \varepsilon > 0,\ \exists \delta > 0 :\ \|P\| < \delta \implies \bigl| S(f, P, \xi) - I \bigr| < \varepsilon$$

对**任意**分割 $P$ 与**任意**标记 $\xi$ 成立。此时 $I$ 唯一，记作

$$I = \int_a^b f = \int_a^b f(x)\,dx$$
> 陈述续见 [nodes/def.riemann-integrable.2.md](./def.riemann-integrable.2.md)


## 它能推出什么 / 谁在用它
- 被 [`def.improper-integral`](../nodes/def.improper-integral.md) 反常积分 用

- …另有出边，续页见 [nodes/def.riemann-integrable.4.md](./def.riemann-integrable.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.riemann-integrable.3.md](./def.riemann-integrable.3.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 6

> 说明见 `notes/def.riemann-integrable.md`

引用：`def.riemann-integrable`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
