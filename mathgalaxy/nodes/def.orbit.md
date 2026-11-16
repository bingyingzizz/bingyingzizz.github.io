# 轨道　`def.orbit`
轨道：一个点能到达的全体
layer 11 · 定义 · 群作用与置换 · 抽象代数
[在星图里打开](../#n=def.orbit)　·　[节点索引](../index.md)

设群 $G$ 作用在集合 $X$ 上，$x \in X$。集合
$\operatorname{Orb}(x) := G x := \{\, g \cdot x : g \in G \,\} \subseteq X$
称为 $x$ 的**轨道**。

关系 $x \sim y \iff \exists g \in G,\ y = g \cdot x$ 是 $X$ 上的等价关系，轨道正是它的等价类；因此 $X$ 是轨道的**无交并**。作用称为**传递**的，若 $X$ 只有一个轨道。

## 为什么成立（入边，证明在 proofs/）
- [`def.group-action`](../nodes/def.group-action.md) 群作用：用到了定义 群作用　[proofs/dep.orbit-action.md](../proofs/dep.orbit-action.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.orbit.2.md](./def.orbit.2.md)

refs: Lang, Algebra, Ch. I §5；Dummit–Foote, Abstract Algebra, §4.1

> 说明见 `notes/def.orbit.md`

引用：`def.orbit`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
