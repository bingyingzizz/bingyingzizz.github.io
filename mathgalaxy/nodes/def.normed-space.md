# 赋范空间　`def.normed-space`
赋范空间
layer 9 · 定义 · 多元微分 · 数学分析
[在星图里打开](../#n=def.normed-space)　·　[节点索引](../index.md)

设 $V$ 是 $K$-向量空间（$K = \mathbb{R}$ 或 $\mathbb{C}$）。映射 $\|\cdot\| : V \to \mathbb{R}$ 叫 $V$ 上的**范数**，当且仅当对一切 $v, w \in V$、$c \in K$：

$$\|v\| \ge 0, \qquad \|v\| = 0 \iff v = 0; \qquad \|cv\| = |c|\,\|v\|; \qquad \|v + w\| \le \|v\| + \|w\|$$

配了范数的 $V$ 叫**赋范空间**。它按 $d(v, w) := \|v - w\|$ 成为度量空间，于是「收敛」「连续」「完备」「紧」这些说法全都继承过来。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.normed-space.2.md](./def.normed-space.2.md)

refs: Rudin, Functional Analysis, Ch. 1；Lang, Real and Functional Analysis, Ch. I

> 说明见 `notes/def.normed-space.md`

引用：`def.normed-space`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
