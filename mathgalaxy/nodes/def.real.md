# 实数系 ℝ　`def.real`
实数系 $\mathbb{R}$（由 Cauchy 列构造）
layer 12 · 定义 · 数系的构造 · 集合论+数学分析
[在星图里打开](../#n=def.real)　·　[节点索引](../index.md)

记 $\mathcal{C}$ 为全体**有理 Cauchy 列**，$\sim$ 是「差为**零列**」这个等价关系（见「Cauchy 列与零列」）。令

$$\mathbb{R} := \mathcal{C} / \sim$$

元素是等价类 $[x_n]$。运算**逐项**定义，序用代表元定义：

$$[x_n] + [y_n] := [x_n + y_n], \qquad [x_n] \cdot [y_n] := [x_n y_n]$$

$${}[x_n] > 0 :\iff \exists q \in \mathbb{Q},\ q > 0,\ \exists N,\ \forall n \ge N : x_n \ge q$$
> 陈述续见 [nodes/def.real.2.md](./def.real.2.md)


## 它能推出什么 / 谁在用它
- 被 [`def.extended-real`](../nodes/def.extended-real.md) 扩充实数 [−∞,+∞] 用

- …另有出边，续页见 [nodes/def.real.4.md](./def.real.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.real.3.md](./def.real.3.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 3；Tao, Analysis I, Ch. 5

> 说明见 `notes/def.real.md`

引用：`def.real`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
