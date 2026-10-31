# 函子保同构　`prop.functor-preserves-iso`
命题：函子把同构送到同构
layer 9 · 命题 · 函子与自然变换 · 范畴论
[在星图里打开](../#n=prop.functor-preserves-iso)　·　[节点索引](../index.md)

设 $F : \mathcal{C} \to \mathcal{D}$ 是函子，$f : X \to Y$ 是 $\mathcal{C}$ 中的同构，逆为 $f^{-1} : Y \to X$。则 $F(f)$ 是同构，且

$$F(f)^{-1} = F\left(f^{-1}\right).$$

## 为什么成立（入边，证明在 proofs/）
- [`def.functor`](../nodes/def.functor.md) 函子：函子保复合与单位 $\implies$ 保同构　[proofs/imp.functor-preserves-iso.md](../proofs/imp.functor-preserves-iso.md)

refs: Mac Lane, Categories for the Working Mathematician, Ch. I

> 说明见 `notes/prop.functor-preserves-iso.md`

引用：`prop.functor-preserves-iso`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
