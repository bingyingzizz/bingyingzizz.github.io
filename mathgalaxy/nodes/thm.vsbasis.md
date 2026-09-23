# 每个向量空间有基　`thm.vsbasis`
每个向量空间都有基（Zorn 引理的经典应用）
layer 10 · 定理 · 向量空间的基 · 抽象代数

设 $V$ 是域 $K$ 上的向量空间。则

$V$ 有基；
- 更精确地：$V$ 的任一线性无关子集都能扩充成 $V$ 的一个基，任一生成集都含有一个基。

## 为什么成立（入边，证明在 proofs/）
- `lem.zorn` 佐恩引理：佐恩引理 $\implies$ 每个向量空间有基　proofs/imp.zorn-to-basis.md
- `def.vs` 向量空间的基：用到了定义 向量空间的基　proofs/def-link.basis-vs.md

refs: Lang, Linear Algebra；Brunner, The Axiom of Choice in Topology

## 说明
在 ZF 中此命题与 AC 等价——去掉 AC，可以构造出没有基的向量空间。

这是「序理论的结论在代数里落地」的标准范例，也是本星图上跨板块连线的一个实例。
