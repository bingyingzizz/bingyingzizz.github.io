# 微积分基本定理（Lebesgue 版）　`thm.ftc-lebesgue`
定理：以下几条等价 —— 绝对连续、是 $L^{1}$ 函数的积分、导数的积分还原
layer 22 · 定理 · 有界变差与绝对连续 · 实变函数+数学分析
[在星图里打开](../#n=thm.ftc-lebesgue)　·　[节点索引](../index.md)

设 $F : [a, b] \to \mathbb{C}$，区间紧。则下列三条**彼此等价**：

**(a)** $F$ 在 $[a, b]$ 上**绝对连续**；

**(b)** 存在 $f \in L^1([a, b])$ 使

$$F(x) - F(a) = \int_a^x f(t) dt\quad  \forall x \in [a, b]$$

**(c)** $F$ **a.e. 可导**、$F' \in L^1([a, b])$，且

$$F(x) - F(a) = \int_a^x F'(t) dt$$

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.ftc-lebesgue.2.md](./thm.ftc-lebesgue.2.md)

refs: Folland, Real Analysis, Theorem 3.35

> 说明见 `notes/thm.ftc-lebesgue.md`

引用：`thm.ftc-lebesgue`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
