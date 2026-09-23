# 简单函数逼近 + Egorov $\implies$ Lusin
`imp.lusin` · 推出 · strong 边 · 根 `../`

`thm.approximation-L1` L¹ 里的逼近 + `thm.egorov` Egorov 定理 → `cor.lusin` Lusin 定理

**③ 用 Egorov 把「几乎处处」升级成「一致」。** 把 ①② 得到的「在紧集上连续」逐步加细：取一列越来越好的紧集，用 Egorov 保证 $\varphi_n \to f$ 在某块丢掉任意小测度的集合后**一致**收敛。一致收敛保持连续性，故 $f$ 限制在剩下的那个紧集上连续。

**④ 收尾。** 每一步丢掉的测度都可以预先取得任意小，全部并起来仍小于 $\varepsilon$（把 $\varepsilon$ 预先换成 $\varepsilon /3$、$\varepsilon /9$、… 再求和）。于是得到一个紧集 $E \subseteq [a, b]$，$\mu(E^c) < \varepsilon$ 且 $f|_E$ 连续。∎

$>$ ⭐ 核心思想与 Egorov 一样是「**丢掉一小块，换取好性质**」：这次换到的是连续性。

> 路线是「Egorov + 简单函数逼近」。
