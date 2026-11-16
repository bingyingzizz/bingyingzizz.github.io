# 环同态　`def.ring-hom`
环同态、核与像
layer 9 · 定义 · 代数结构 · 抽象代数
[在星图里打开](../#n=def.ring-hom)　·　[节点索引](../index.md)

设 $R, S$ 是含幺环。映射 $f : R \to S$ 称为**环同态**，若
$f(a+b) = f(a)+f(b), \qquad f(ab) = f(a)f(b), \qquad f(1_R) = 1_S$
对一切 $a, b \in R$ 成立。

**核** $\ker f := \{\, a \in R : f(a) = 0 \,\}$ 是 $R$ 的**理想**；**像** $\operatorname{im} f$ 是 $S$ 的子环。$f$ 单当且仅当 $\ker f = 0$；双射的环同态叫**同构**。

## 为什么成立（入边，证明在 proofs/）
- [`def.ring`](../nodes/def.ring.md) 环：用到了定义 环　[proofs/dep.ringhom-ring.md](../proofs/dep.ringhom-ring.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.ring-hom.2.md](./def.ring-hom.2.md)

refs: Lang, Algebra, Ch. II；Atiyah–Macdonald, Introduction to Commutative Algebra, Ch. 1

> 说明见 `notes/def.ring-hom.md`

引用：`def.ring-hom`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
