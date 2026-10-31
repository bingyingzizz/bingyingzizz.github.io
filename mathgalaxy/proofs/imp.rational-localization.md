# 有理开集 $\implies$ 局部化
`imp.rational-localization` · 推出 · strong 边 · 根 `../`

`def.adic-spectrum` adic 谱 Spa + `prop.huber-subring-recovery` A⁺ 由谱决定 → `prop.rational-localization` 有理开集上的局部化

设 $(A,A^+) \to (B,B^+)$ 的谱映射落在 $U = \{|g_i| \le |f| \ne 0\}$ 内。

**$f$ 在 $B$ 中可逆。** 否则 $B/fB \ne 0$，取素理想 $\mathfrak{p} \supset fB$，它给出 $y \in \operatorname{Spa}(B,B^+)$ 且 $|f(y)| = 0$，与落在 $U$ 内矛盾。于是得到 $A[1/f] \to B$。

**$g_i/f \in B^+$。** 对一切 $y$，$|g_i(y)| \le |f(y)|$ 且 $|f(y)| \ne 0$，故 $|g_i/f(y)| \le 1$；由 `prop.huber-subring-recovery` 得 $g_i/f \in B^+$。于是有 $A^+[g_i/f] \to B^+$，再延拓到整闭包。

**同胚。** 两条映射互逆，展开定义即得。$\blacksquare$
