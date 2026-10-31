# 半有限部分　`def.semifinite-part`
半有限部分
layer 16 · 定义 · 测度的构造 · 实变函数+数学分析
[在星图里打开](../#n=def.semifinite-part)　·　[节点索引](../index.md)

设 $(X, \mathcal{M}, \mu )$ 是测度空间。定义

$$\mu_0(E) := \sup \{ \mu(F) : F \subseteq E, F \in \mathcal{M}, \mu(F) < \infty \}$$

则 $\mu _{0}$ 称为 $\mu$ 的**半有限部分**，它是一个半有限测度，且 $\mu _{0} \le \mu$。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.semifinite-part.2.md](./def.semifinite-part.2.md)

refs: Folland, Real Analysis, §1.2

## 说明
它的作用：把一个「可能有很坏的无穷值」的测度修成半有限的，同时尽量保留原来的有限部分。

若 $\mu$ 本身半有限，则 $\mu _{0} = \mu$ —— 所以这是「半有限化」操作。

引用：`def.semifinite-part`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
