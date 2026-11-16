# 正规化子　`def.normalizer`
正规化子：把子群整体送到自己的元素
layer 11 · 定义 · 群作用与置换 · 抽象代数
[在星图里打开](../#n=def.normalizer)　·　[节点索引](../index.md)

设 $G$ 是群，$S \subseteq G$。集合
$N_G(S) := \{\, g \in G : g S g^{-1} = S \,\} \le G$
称为 $S$ 在 $G$ 中的**正规化子**。对子群 $H \le G$，$N_G(H)$ 是 $G$ 中含 $H$ 的、使 $H$ 在其内正规的**最大**子群。

若 $H \le G$，则 $H \trianglelefteq G \iff N_G(H) = G$；又 $H \subseteq N_G(H)$，且 $H \trianglelefteq N_G(H)$。Sylow 计数 $n_p = [G : N_G(P)]$。

## 它能推出什么 / 谁在用它
- 被 [`thm.sylow`](../nodes/thm.sylow.md) Sylow 定理 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.normalizer.2.md](./def.normalizer.2.md)

refs: Lang, Algebra, Ch. I §6；Dummit–Foote, Abstract Algebra, §4.3

> 说明见 `notes/def.normalizer.md`

引用：`def.normalizer`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
