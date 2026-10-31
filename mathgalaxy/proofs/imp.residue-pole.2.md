# 留数等于 Laurent 系数 $c_{-1}$ + $\psi$ 的 Taylor 展开 $\implies$ 极点留数公式
`imp.residue-pole` · 推出 · strong 边 · 根 `../`

`def.residue` 留数 + `def.laurent-series` Laurent 级数 → `prop.residue-at-pole` 极点处的留数公式

**$m = 1$ 的化简。** $\operatorname{Res}(f, a) = \psi(a) = \lim_{z \to a}(z - a)f(z)$（$\psi$ 连续）。若写成 $f = p/q$、$p(a) \ne 0$、$q$ 在 $a$ 有一阶零点，则 $\psi = p/(q/(z - a)) \to p(a)/q'(a)$。$\blacksquare$
