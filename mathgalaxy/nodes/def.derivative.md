# 导数　`def.derivative`
导数 $F'$（Derivative）
layer 15 · 定义 · 实数与极限 · 分析学
[在星图里打开](../#n=def.derivative)　·　[节点索引](../index.md)

$F : (a, b) \to \mathbb{C}$ 在 $x_0 \in (a, b)$ **可导**，当且仅当极限

$$F'(x_0) := \lim_{h \to 0} \frac{F(x_0 + h) - F(x_0)}{h}$$

存在（有限）。这个数叫 $F$ 在 $x_0$ 的**导数**。

在 $(a, b)$ 上处处可导，就得到一个函数 $F'$；称 $F$ **可导**。

若不要求极限存在而允许 $\pm\infty$，得到的是**广义导数**，单调函数的导数理论要用它。

## 为什么成立（入边，证明在 proofs/）
- [`def.sequence-limit`](../nodes/def.sequence-limit.md) 数列极限：用到了定义 数列极限　[proofs/dep.real-derivative.md](../proofs/dep.real-derivative.md)

- …另有入边，续页见 [nodes/def.derivative.2.md](./def.derivative.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.derivative.3.md](./def.derivative.3.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 5

> 说明见 `notes/def.derivative.md`

引用：`def.derivative`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
