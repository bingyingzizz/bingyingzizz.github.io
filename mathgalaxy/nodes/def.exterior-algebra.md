# 外代数　`def.exterior-algebra`
外代数 $\bigwedge^{\bullet} V$
layer 12 · 定义 · 多重线性与张量 · 抽象代数
[在星图里打开](../#n=def.exterior-algebra)　·　[节点索引](../index.md)

把各次外幂直和起来：

$$\bigwedge^{\bullet} V := \bigoplus_{k \ge 0} \bigwedge^{k} V \qquad (\bigwedge^{0} V := K,\ \bigwedge^{1} V := V)$$

它按「先张量再取像」的乘法 $\wedge$ 构成一个**分次交换代数**：

$$(u \wedge v) \wedge w = u \wedge (v \wedge w), \qquad v \wedge w = (-1)^{|v| |w|}\ w \wedge v$$

（$|v|$ 是元素的次数。「分次交换」意味着奇次元素之间反交换。）

## 它能推出什么 / 谁在用它
- 被 [`def.differential-form`](../nodes/def.differential-form.md) 微分形式 用

- …另有出边，续页见 [nodes/def.exterior-algebra.3.md](./def.exterior-algebra.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.exterior-algebra.2.md](./def.exterior-algebra.2.md)

refs: Lang, Algebra, Ch. XIX

> 说明见 `notes/def.exterior-algebra.md`

引用：`def.exterior-algebra`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
