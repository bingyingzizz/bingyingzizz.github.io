# Riesz–Markov 表示　`thm.riesz-markov`
Riesz–Markov：$C_{c}(X)^{*} \cong$ Radon 测度
layer 22 · 定理 · 测度的构造 · 实变函数+数学分析
[在星图里打开](../#n=thm.riesz-markov)　·　[节点索引](../index.md)

设 $X$ 是局部紧 Hausdorff 空间，$C_{c}(X)$ 配 sup 范数（连续、紧支的实值函数）。则每个**正**线性泛函 $\Lambda : C_{c}(X) \to \mathbb{R}$ 都唯一地写成

$$\Lambda(f) = \int_{X} f \,\mathrm{d}\mu,$$

其中 $\mu$ 是 $X$ 上的一个**正则 Borel 测度**，且 $\lVert\Lambda\rVert = \mu(X)$。一般（不必正）的泛函对应符号测度之差。

## 它能推出什么 / 谁在用它
- ～弱边 [`def.cond-measure`](../nodes/def.cond-measure.md) 整值测度

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.riesz-markov.2.md](./thm.riesz-markov.2.md)

refs: Rudin, Real and Complex Analysis, Ch. 2（Riesz 表示定理）

> 说明见 `notes/thm.riesz-markov.md`

引用：`thm.riesz-markov`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
