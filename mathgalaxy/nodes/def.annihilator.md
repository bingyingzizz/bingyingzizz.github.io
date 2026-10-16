# 零化子　`def.annihilator`
零化子 $U^{0}$（Annihilator）
layer 11 · 定义 · 线性映射与秩 · 抽象代数
[在星图里打开](../#n=def.annihilator)　·　[节点索引](../index.md)

设 $U \subseteq V$ 是子空间。$U$ 的**零化子**定义为

$$U^{0} := \{\, \varphi \in V^{\ast} : \varphi(u) = 0 \ \text{whenever}\ u \in U \,\} \subseteq V^{\ast}$$

它是 $V^{\ast}$ 的子空间，并且（$\dim V < \infty$ 时）

$$\dim U^{0} = \dim V - \dim U, \qquad (U^{0})^{0} = U$$

（第二个等号把 $U$ 看成 $V^{\ast\ast}$ 的子集，用自然同构 $V \cong V^{\ast\ast}$。）

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.annihilator.2.md](./def.annihilator.2.md)

refs: Lang, Linear Algebra；Hoffman–Kunze, Linear Algebra, Ch. 3

> 说明见 `notes/def.annihilator.md`

引用：`def.annihilator`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
