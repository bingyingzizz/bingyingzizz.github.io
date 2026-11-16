# 幂零群　`def.nilpotent-group`
幂零群：下中心列终止
layer 10 · 定义 · 代数结构 · 抽象代数
[在星图里打开](../#n=def.nilpotent-group)　·　[节点索引](../index.md)

设 $G$ 是群。归纳定义**下中心列**
$\gamma_0 = G, \qquad \gamma_{i+1} = [G, \gamma_i] = \langle\, [g, x] : g \in G,\ x \in \gamma_i \,\rangle .$
若存在 $c \ge 0$ 使 $\gamma_c = \{e\}$，称 $G$ 是**幂零群**；最小的这样的 $c$ 叫 $G$ 的**幂零类**。

等价地，**上中心列** $Z_0 = \{e\}$、$Z_{i+1}/Z_i := Z(G/Z_i)$ 在有限步到达 $G$。

## 它能推出什么 / 谁在用它
- ⇒ [`def.solvable-group`](../nodes/def.solvable-group.md) 可解群

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.nilpotent-group.2.md](./def.nilpotent-group.2.md)

refs: Lang, Algebra, Ch. I §6；Dummit–Foote, Abstract Algebra, §6.1

> 说明见 `notes/def.nilpotent-group.md`

引用：`def.nilpotent-group`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
