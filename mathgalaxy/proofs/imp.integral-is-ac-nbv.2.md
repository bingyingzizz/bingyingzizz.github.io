# imp.integral-is-ac-nbv
`imp.integral-is-ac-nbv` · 推出 · strong 边 · 根 `../`

`def.nbv` 规范有界变差函数 + `def.integrable` 可积 / L¹ → `cor.integral-is-ac-nbv` 积分得到的函数绝对连续且规范有界变差

于是对两两不交的区间族 $\bigsqcup(a_{j}, b_{j})$ 且 $\sum(b_{j}-a_{j}) < \delta$，
$$\sum_{j}|F(b_{j}) - F(a_{j})| \le \sum_{j}\int_{a_{j}}^{b_{j}}|f| = \int_{\bigcup(a_{j},b_{j})}|f| < \varepsilon \;✓$$
**(2)** 反之设 $F \in NBV \cap AC$。

$F$ 有界变差 $\implies$ $F$ 可测、a.e. 可导、$F' \in L^{1}(m)$，且有 Lebesgue 分解 $dF = F'\,\mathrm{d}m + dF_{s}$（$F_{s} \perp m$，由 $F$ 的测度部分给出）；

而**绝对连续恰好等价于「测度部分没有奇异部分」**，即 $F_{s} = 0$ ✓。

于是 $F(x) = \int_{-\infty}^{x}F'\,\mathrm{d}m$ ✓。

∎
