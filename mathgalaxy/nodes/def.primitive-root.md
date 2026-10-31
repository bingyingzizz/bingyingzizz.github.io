# 原根　`def.primitive-root`
原根：单位群的生成元
layer 8 · 定义 · 二次剩余与原根 · 数论
[在星图里打开](../#n=def.primitive-root)　·　[节点索引](../index.md)

设 $\gcd(g, n) = 1$。若

$$\operatorname{ord}_{n}(g) = \varphi(n) ,$$

即 $g$ 在 $(\mathbb{Z}/n\mathbb{Z})^{\times}$ 里的阶等于群的阶，称 $g$ 是模 $n$ 的**原根**。

等价说法：$\{[g]^{0}, [g]^{1}, \cdots, [g]^{\varphi(n)-1}\}$ 遍历整个单位群；即 $(\mathbb{Z}/n\mathbb{Z})^{\times}$ 是循环群、$g$ 是它的生成元。

## 为什么成立（入边，证明在 proofs/）
- [`def.order-mod-n`](../nodes/def.order-mod-n.md) 模 n 的阶：用到了定义 模 n 的阶　[proofs/e155:definition.md](../proofs/e155:definition.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.primitive-root.2.md](./def.primitive-root.2.md)

refs: 华罗庚《数论导引》第五章

> 说明见 `notes/def.primitive-root.md`

引用：`def.primitive-root`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
