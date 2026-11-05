# 区间　`def.interval`
区间
layer 14 · 定义 · 实数与极限 · 数学分析+序理论
[在星图里打开](../#n=def.interval)　·　[节点索引](../index.md)

$\mathbb{R}$ 的**区间**是满足下式的子集 $I$：

$$a, b \in I,\ a \le x \le b \implies x \in I$$

即「中间不空」。常见的有界区间写成

$$(a, b), \quad [a, b], \quad [a, b), \quad (a, b]$$

按端点是否取到区分；另有 $(-\infty, b)$、$(a, +\infty)$、$\mathbb{R}$ 等无界区间，以及单点集 $[a, a]$。

**长度**（Lebesgue 测度 $m$ 的约定）就是 $b - a$（要求 $a \le b$；$a > b$ 时 $(a, b] = \emptyset$，要另行约定）。

## 它能推出什么 / 谁在用它
- 被 [`def.fundamental-class`](../nodes/def.fundamental-class.md) 基本类 用
- 被 [`def.ac-function`](../nodes/def.ac-function.md) 绝对连续函数 用

- …另有出边，续页见 [nodes/def.interval.3.md](./def.interval.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.interval.2.md](./def.interval.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 2

> 说明见 `notes/def.interval.md`

引用：`def.interval`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
