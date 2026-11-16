# 不动域　`def.fixed-field`
不动域：自同构群固定下来的元素
layer 14 · 定义 · Galois 理论 · 抽象代数
[在星图里打开](../#n=def.fixed-field)　·　[节点索引](../index.md)

设 $L/K$ 是域扩张，$H \le \operatorname{Aut}(L/K)$ 是 $K$-自同构群的子群。集合
$L^{H} := \{\, x \in L : \sigma(x) = x \ \text{for all } \sigma \in H \,\}$
称为 $H$ 的**不动域**（fixed field）。它是 $L$ 的子域，且 $K \subseteq L^{H} \subseteq L$。

在有限 Galois 扩张的 Galois 对应中，$H \mapsto L^{H}$ 与中间域 $M \mapsto \operatorname{Gal}(L/M)$ 互为逆映射（见 `thm.galois-correspondence`）。

## 它能推出什么 / 谁在用它
- 被 [`thm.galois-correspondence`](../nodes/thm.galois-correspondence.md) 伽罗瓦基本定理 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.fixed-field.2.md](./def.fixed-field.2.md)

refs: Lang, Algebra, Ch. VI；Dummit–Foote, Abstract Algebra, §14.2

> 说明见 `notes/def.fixed-field.md`

引用：`def.fixed-field`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
