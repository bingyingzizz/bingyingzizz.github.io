# 范数　`def.norm`
范数（赋范空间）
layer 10 · 定义 · 赋范空间与有界算子 · 泛函分析
[在星图里打开](../#n=def.norm)　·　[节点索引](../index.md)

设 $E$ 是 $\mathbb{K}$（$\mathbb{K} = \mathbb{R}$ 或 $\mathbb{C}$）上的向量空间。函数 $\|\cdot\| : E \to [0, +\infty)$ 叫**范数**，若

1. $\|x\| = 0 \iff x = 0$；
2. $\|\lambda x\| = |\lambda|\,\|x\|$；
3. $\|x + y\| \le \|x\| + \|y\|$。

带范数的空间叫**赋范空间**。只满足 2、3（允许非零元素有零范数）叫**半范数**。

## 为什么成立（入边，证明在 proofs/）
- [`def.vs`](../nodes/def.vs.md) 向量空间的基：用到了定义 向量空间的基　[proofs/def-link.fa-vs-norm.md](../proofs/def-link.fa-vs-norm.md)

- …另有入边，续页见 [nodes/def.norm.2.md](./def.norm.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.norm.3.md](./def.norm.3.md)

refs: Rudin, Functional Analysis · 赋范空间与有限维；Rudin, Functional Analysis, Ch. 1

> 说明见 `notes/def.norm.md`

引用：`def.norm`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
