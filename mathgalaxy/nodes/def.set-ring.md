# 环与代数　`def.set-ring`
环与代数（Ring, Algebra）
layer 2 · 定义 · 集合族与 σ-代数 · 分析学
[在星图里打开](../#n=def.set-ring)　·　[节点索引](../index.md)

设 $\mathfrak{A} \subseteq \mathcal{P}(X)$ 是 $X$ 的一族子集。

$\mathfrak{A}$ 是**环**（ring），当且仅当它对有限并封闭、且对差封闭：

$$A, B \in \mathfrak{A} \implies A \cup B \in \mathfrak{A}, \quad A \setminus B \in \mathfrak{A}$$

$\mathfrak{A}$ 是**代数**（algebra），当且仅当 $\mathfrak{A}$ 是环、且含全集：

$$X \in \mathfrak{A}$$

**代数 $=$ 环 $X \in \mathfrak{A}$**。「把整个 $X$ 放进去」是唯一的差别。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.ring-monotone-sigma`](../nodes/thm.ring-monotone-sigma.md) 环 → σ-环 的判据

- …另有出边，续页见 [nodes/def.set-ring.3.md](./def.set-ring.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.set-ring.2.md](./def.set-ring.2.md)

refs: Halmos, Measure Theory, §4；Folland, Real Analysis, §1.2

> 说明见 `notes/def.set-ring.md`

引用：`def.set-ring`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
