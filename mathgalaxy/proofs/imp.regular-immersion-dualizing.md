# Koszul 复形 $\implies$ 正则闭浸入的对偶复形
`imp.regular-immersion-dualizing` · 推出 · strong 边 · 根 `../`

`prop.f-shriek-base-change` 对偶函子的扭转与基变换 + `def.f-shriek` 紧支撑推前 f_! → `prop.regular-immersion-dualizing` 正则闭浸入的对偶复形

局部 $A = R/(f_1, \ldots, f_c)$，$f_1, \ldots, f_c$ 是正则序列。Koszul 复形 $K(f_\bullet)$ 是 $A$ 的自由 $R$-消解（长度 $c$），于是

$$\operatorname{RHom}_R(A, R) = \operatorname{Hom}_R(K(f_\bullet), R) \cong A[-c].$$

$\det(I/I^2)$ 由 $f_1 \wedge \cdots \wedge f_c$ 给出基，故 $\det(I/I^2) \cong A$，取对偶不改变（线丛平凡化到 $A$）。整体上验证与生成元选取无关，即得自然同构。$\blacksquare$
