# 因式定理与根　`thm.factor-theorem`
定理：因式定理 $f(a) = 0 \iff (x - a) \mid f$
layer 10 · 定理 · 多项式与因式分解 · 抽象代数
[在星图里打开](../#n=thm.factor-theorem)　·　[节点索引](../index.md)

设 $f \in K[x]$、$a \in K$。则

$$f(a) = 0 \iff (x - a) \text{ divides } f \ \text{ in } K[x]$$

即：存在 $h \in K[x]$ 使 $f = (x - a)\,h$。此时称 $a$ 是 $f$ 的**根**（零点）。

## 为什么成立（入边，证明在 proofs/）
- [`thm.division-algorithm`](../nodes/thm.division-algorithm.md) 带余除法：带余除法 $\implies$ 因式定理　[proofs/imp.factor-theorem.md](../proofs/imp.factor-theorem.md)

## 它能推出什么 / 谁在用它
- ⇒ [`prop.root-bound`](../nodes/prop.root-bound.md) 根的个数不超过次数

- …另有出边，续页见 [nodes/thm.factor-theorem.2.md](./thm.factor-theorem.2.md)

refs: Lang, Algebra, Ch. IV

> 说明见 `notes/thm.factor-theorem.md`

引用：`thm.factor-theorem`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
