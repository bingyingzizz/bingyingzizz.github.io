# 复数 ℂ　`def.complex`
复数系 $\mathbb{C}$
layer 15 · 定义 · 数系的构造 · 集合论+数学分析+抽象代数
[在星图里打开](../#n=def.complex)　·　[节点索引](../index.md)

**复数系** $\mathbb{C} := \mathbb{R}^2$，配以下运算：

$$(a, b) + (c, d) := (a + c, b + d), \qquad (a, b)(c, d) := (ac - bd, ad + bc)$$

记 $i := (0, 1)$，则每个复数唯一地写成 $z = a + bi$（$a, b \in \mathbb{R}$）。

$\bar{z} := a - bi$ 是**共轭**，$|z| := \sqrt{a^2 + b^2}$ 是**模**；并且

$$|zw| = |z|\,|w|, \qquad z \bar{z} = |z|^2$$

于是每个 $z \ne 0$ 都有逆 $z^{-1} = \bar{z}/|z|^2$：$\mathbb{C}$ 是一个域。

## 它能推出什么 / 谁在用它
- 被 [`def.exact-couple`](../nodes/def.exact-couple.md) 正合偶 用

- …另有出边，续页见 [nodes/def.complex.3.md](./def.complex.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.complex.2.md](./def.complex.2.md)

refs: Rudin, Real and Complex Analysis, Ch. 1

> 说明见 `notes/def.complex.md`

引用：`def.complex`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
