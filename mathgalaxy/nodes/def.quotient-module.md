# 商模　`def.quotient-module`
商模：模掉一个子模
layer 15 · 定义 · 代数结构 · 抽象代数
[在星图里打开](../#n=def.quotient-module)　·　[节点索引](../index.md)

设 $A$ 是含幺环，$M$ 是 $A$-模，$N \subseteq M$ 是子模。在加法商群 $M/N$ 上定义
$(m + N) + (m' + N) := (m + m') + N, \qquad a(m + N) := a m + N .$
这两个运算良定义，使 $M/N$ 成为 $A$-模，叫**商模**；商映射 $\pi : M \to M/N$ 是模同态，$\ker \pi = N$。

**泛性质**：若 $f : M \to L$ 是模同态且 $f(N) = 0$，则存在唯一模同态 $\bar f : M/N \to L$ 使 $\bar f \circ \pi = f$。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.quotient-module.2.md](./def.quotient-module.2.md)

refs: Lang, Algebra, Ch. III；Atiyah–Macdonald, Introduction to Commutative Algebra, Ch. 2

> 说明见 `notes/def.quotient-module.md`

引用：`def.quotient-module`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
