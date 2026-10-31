# 链上的 Stokes 定理　`thm.stokes-chain`　·　续页（第 2 页）
[在星图里打开](../#n=thm.stokes-chain)　·　第 1 页 [nodes/thm.stokes-chain.md](./thm.stokes-chain.md)

## 陈述（续）
设 $c$ 是 $M$ 上的一条 $k$-链（$k\ge 1$），$\omega$ 是定义在 $c$ 的像的某个邻域上的 $(k-1)$-形式。则

$$\int_{\partial c}\omega = \int_{c}\mathrm{d}\omega .$$
**与流形版的关系**（`thm.stokes`）写清：流形版要求 $M$ 紧致、可定向、带边，$\omega$ 定义在 $M$ 上；链版不要 $M$ 可定向、不要紧致、不要 $\omega$ 有紧支，代价是把「流形」换成了「链」。两者互为特例 
—— 把 $M$ 剖分成（或细分成）一条覆盖它的 $n$-链，链版逐项相加就是流形版；反过来，把流形版限制在一块保向参数方块上，就是链版的单块情形。
$k = 1$、$c = \gamma : [0,1]\to\mathbb{R}$ 时：$\partial\gamma = \gamma(1)-\gamma(0)$，公式变成 $F(\gamma(1))-F(\gamma(0)) = \int_{0}^{1}(F^{\prime}\circ\gamma)\,\gamma^{\prime}\,\mathrm{d}t$，正是微积分基本定理。

> 续见 [nodes/thm.stokes-chain.3.md](./thm.stokes-chain.3.md)
