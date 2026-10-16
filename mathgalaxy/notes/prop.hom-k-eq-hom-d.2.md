# Hom 在同伦范畴与导出范畴里一样　`prop.hom-k-eq-hom-d`　·　说明
根 `../`

**满。** $D$ 里的态射是屋顶 $K^{\bullet} \xleftarrow{\;s\;} K'^{\bullet} \xrightarrow{\;q\;} I^{\bullet}$（$s$ 拟同构）。由引理「右乘 $s$」是满射，存在 $p : K^{\bullet} \to I^{\bullet}$ 使 $p s \simeq q$ —— 屋顶与直接态射 $p$ 在 $D$ 里表示同一个态射。

**单。** 若 $p, p'$ 在 $D$ 里相等，则存在拟同构 $s$ 使 $p s \simeq p' s$（屋顶的等价关系按定义就是「存在公共细化」）；由引理「右乘 $s$」是单射，得 $p \simeq p'$。∎

⭐ **用途**：这是「上有界内射复形**就是**导出范畴」与「用内射消解算 $R\operatorname{Hom}$」两件事的共同地基 —— 以 $I^{\bullet}$ 为靶时，同伦类和导出态射没有区别，于是可以安心在 $\mathbf{K}$ 里算。
