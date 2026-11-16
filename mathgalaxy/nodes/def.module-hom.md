# 模同态　`def.module-hom`
模同态：保持加法与环作用
layer 10 · 定义 · 代数结构 · 抽象代数
[在星图里打开](../#n=def.module-hom)　·　[节点索引](../index.md)

设 $A$ 是含幺环，$M, N$ 是 $A$-模。映射 $f : M \to N$ 称为 **$A$-模同态**，若
$f(m + m') = f(m) + f(m'), \qquad f(a m) = a f(m)$
对一切 $m, m' \in M$、$a \in A$ 成立。

全体 $A$-模同态记 $\operatorname{Hom}_A(M, N)$，在逐点加法下是阿贝尔群。核 $\ker f$ 与像 $\operatorname{im} f$ 都是子模；$f$ 是同构 $\iff$ 双射。

## 为什么成立（入边，证明在 proofs/）
- [`def.module`](../nodes/def.module.md) 模：用到了定义 模　[proofs/dep.module-hom.md](../proofs/dep.module-hom.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.module-hom.2.md](./def.module-hom.2.md)

refs: Lang, Algebra, Ch. III；Atiyah–Macdonald, Introduction to Commutative Algebra, Ch. 2

> 说明见 `notes/def.module-hom.md`

引用：`def.module-hom`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
