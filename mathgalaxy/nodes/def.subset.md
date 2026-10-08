# 子集　`def.subset`
子集 / 真子集（Subset）
layer 1 · 定义 · 集合的构造 · 集合论

设 $A$、$B$ 是集合。

- **$A$ 是 $B$ 的子集**（记 $A \subseteq B$）：$\forall x ( x \in A \to x \in B )$
- **$A$ 是 $B$ 的真子集**（记 $A \subset B$）：$A \subseteq B$ 且 $A \ne B$。

基本性质：$\subseteq$ 自反、传递；并且由外延公理，

$$A = B \iff A \subseteq B \wedge  B \subseteq A$$

这是证明两个集合相等最常用的套路：**两边互包**。

## 为什么成立（入边，证明在 proofs/）
- `ax.ext` 外延公理：用到了定义 外延公理　proofs/def-link.ext-subset.md

## 它能推出什么 / 谁在用它
- 被 `def.union-inter` 并集与交集 用
- 被 `def.diff-complement` 差集与补集 用
- 被 `def.power-set` 幂集 𝒫(X) 用
- 被 `def.topology` 拓扑空间与开集 用
- 被 `ax.sep` 分离公理模式 用
- 被 `ax.power` 幂集公理 用
- 被 `def.finchar` 有限特征 用
- 被 `def.rel` 关系 用

refs: Kunen, Set Theory, I.2

- …另有出边，续页见 `nodes/def.subset.2.md`

## 说明
$\emptyset \subseteq A$ 对一切 $A$ 成立（空泛真）。
