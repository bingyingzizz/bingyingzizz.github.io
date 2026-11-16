# 商环　`def.quotient-ring`
商环：模掉一个理想
layer 11 · 定义 · 代数结构 · 抽象代数
[在星图里打开](../#n=def.quotient-ring)　·　[节点索引](../index.md)

设 $A$ 是环，$I \subseteq A$ 是理想。在加法商群 $A/I$ 上定义
$(a+I)+(b+I) := (a+b)+I, \qquad (a+I)(b+I) := ab+I .$
这两个运算良定义，使 $A/I$ 成为环，称为**商环**；商映射 $\pi : A \to A/I$、$\pi(a) = a+I$ 是环同态，且 $\ker \pi = I$。

**泛性质**：若 $f : A \to B$ 是环同态且 $f(I) = 0$，则存在唯一环同态 $\bar f : A/I \to B$ 使 $\bar f \circ \pi = f$。

## 它能推出什么 / 谁在用它
- 被 [`prop.ideal-basic`](../nodes/prop.ideal-basic.md) 理想的运算与商环泛性质 用

- …另有出边，续页见 [nodes/def.quotient-ring.3.md](./def.quotient-ring.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.quotient-ring.2.md](./def.quotient-ring.2.md)

refs: Atiyah–Macdonald, Introduction to Commutative Algebra, Ch. 1；Lang, Algebra, Ch. II

> 说明见 `notes/def.quotient-ring.md`

引用：`def.quotient-ring`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
