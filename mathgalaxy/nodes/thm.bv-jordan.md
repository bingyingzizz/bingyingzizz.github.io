# 有界变差函数的 Jordan 分解　`thm.bv-jordan`
定理：$F \in BV \iff F = G - H$（G、H 有界递增）
layer 18 · 定理 · 有界变差与绝对连续 · 实变函数+数学分析
[在星图里打开](../#n=thm.bv-jordan)　·　[节点索引](../index.md)

**(a)** $F \in BV \iff \operatorname{Re} F \in BV\text{ 且} \operatorname{Im} F \in BV$。

**(b)** 设 $F : \mathbb{R} \to \mathbb{R}$。则

$$F \in BV \iff F = G - H,\text{ 其中} G, H\text{ 都是有界递增函数}$$

## 为什么成立（入边，证明在 proofs/）
- [`lem.variation-monotone`](../nodes/lem.variation-monotone.md) T_F ± F 递增：$T_F \pm F$ 递增 $\implies BV$ 的 Jordan 分解　[proofs/imp.bv-jordan.md](../proofs/imp.bv-jordan.md)

- …另有入边，续页见 [nodes/thm.bv-jordan.2.md](./thm.bv-jordan.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.bv-jordan.3.md](./thm.bv-jordan.3.md)

refs: Folland, Real Analysis, Theorem 3.27

> 说明见 `notes/thm.bv-jordan.md`

引用：`thm.bv-jordan`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
