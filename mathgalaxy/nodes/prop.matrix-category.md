# 矩阵范畴　`prop.matrix-category`
命题：$\operatorname{Mat}(k)$ 是小范畴，与有限维向量空间等价
layer 8 · 命题 · 范畴与图 · 范畴论
[在星图里打开](../#n=prop.matrix-category)　·　[节点索引](../index.md)

$k$ 交换时 $\operatorname{Mat}(k)$（对象 $\mathbb{N}$、$\operatorname{Hom}(m,n) = M_{n \times m}(k)$、复合是矩阵乘法）是**小范畴**；$k$ 是域时 $\operatorname{Mat}(k) \simeq$ 有限维 $k$-向量空间范畴（**等价但不同构**）。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/prop.matrix-category.2.md](./prop.matrix-category.2.md)

refs: Le Stum, An introduction to condensed mathematics, Exercise 1.19

## 说明
**证明。** 矩阵乘法满足结合律与单位律 ✓；取一组基给出到有限维空间的函子，它是全忠实且本质满的 ✓，但没有同构 —— 左边是小范畴、右边是大范畴 ✓。∎

引用：`prop.matrix-category`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
