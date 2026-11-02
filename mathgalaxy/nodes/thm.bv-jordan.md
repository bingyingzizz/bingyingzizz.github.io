# 有界变差函数的 Jordan 分解　`thm.bv-jordan`
定理：$F \in BV \iff F = G - H$（G、H 有界递增）
layer 18 · 定理 · 有界变差与绝对连续 · 实变函数+数学分析
[在星图里打开](../#n=thm.bv-jordan)　·　[节点索引](../index.md)

**(a)** 若 $F$ 的实部与虚部都是 $BV$，则 $F \in BV$；反之亦然：

$F \in BV \iff \operatorname{Re} F \in BV$ **且** $\operatorname{Im} F \in BV$。

**(b)** 设 $F : \mathbb{R} \to \mathbb{R}$。则 $F \in BV$ 当且仅当它可以写成两个有界递增函数之差：

$F \in BV \iff F = G - H$，其中 $G, H$ **都是有界递增函数**。

## 它能推出什么 / 谁在用它
- ⇒ [`prop.bv-regularity`](../nodes/prop.bv-regularity.md) 有界变差函数的正则性

- …另有出边，续页见 [nodes/thm.bv-jordan.3.md](./thm.bv-jordan.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.bv-jordan.2.md](./thm.bv-jordan.2.md)

refs: Folland, Real Analysis, Theorem 3.27

> 说明见 `notes/thm.bv-jordan.md`

引用：`thm.bv-jordan`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
